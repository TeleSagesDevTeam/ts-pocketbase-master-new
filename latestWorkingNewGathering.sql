SELECT
    g.id as id,
    g.sage AS sageID,
    g.priceCurve,
    g.name AS gatheringName,
    u.walletAddress AS sageWalletAddress,
    COALESCE(
        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour')) - 
        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour')),
        0
    ) AS supplyChange1H,

COALESCE(
    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day')) -
    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),
    0
) AS supplyChange1D,
COALESCE(
    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days')) -
    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),
    0
) AS supplyChange1W,

    COALESCE(
        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))
         FROM Trades
         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),
        0
    ) AS timeSinceLastTrade,
    COALESCE(
        (SELECT SUM(ethAmount) / 1e18
         FROM Trades
         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),
        0
    ) AS totalETHvolume,
    COALESCE(
        (SELECT SUM(ethAmount) / 1e18
         FROM Trades
         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),
        0
    ) AS volumeETH1H,
    COALESCE(
        (SELECT SUM(ethAmount) / 1e18
         FROM Trades
         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),
        0
    ) AS volumeETH1D,
    COALESCE(
        (SELECT SUM(ethAmount) / 1e18
         FROM Trades
         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),
        0
    ) AS volumeETH1W,
    COALESCE(
        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),
        0
    ) AS currentSupply
FROM Gatherings g
JOIN Users u ON g.sage = u.id
WHERE g.poolIndex > -1;