SELECT
    g.id AS id,
    u.walletAddress AS sageWalletAddress,
    t.poolIndex,
    COALESCE(
        MAX(CASE 
            WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply 
            ELSE NULL 
        END),
        1
    ) AS currentSupply,
    COALESCE(
        MAX(CASE 
            WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply 
            ELSE NULL 
        END),
        0
    ) AS lastKnownSupplyBefore1H,
    (
        COALESCE(
            MAX(CASE 
                WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply 
                ELSE NULL 
            END),
            1
        ) - COALESCE(
            MAX(CASE 
                WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply 
                ELSE NULL 
            END),
            0
        )
    ) AS supplyChange1H
FROM Gatherings g
JOIN Users u ON g.sage = u.id
LEFT JOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress
WHERE g.poolIndex > -1
GROUP BY g.id, u.walletAddress, t.poolIndex
ORDER BY g.id, u.walletAddress, t.poolIndex;
