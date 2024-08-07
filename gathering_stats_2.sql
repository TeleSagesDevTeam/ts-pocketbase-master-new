SELECT
  g.id AS id,
  g.created AS created,
  g.sage,
  g.priceCurve,
  g.poolIndex,
  g.name AS name,
  u.walletAddress AS sageWalletAddress,
  COALESCE(
    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),
    0
  ) AS membership_count,
  COALESCE(
    (SELECT t.ethAmount/t.shareAmount
     FROM Trades t 
     WHERE t.subject = u.walletAddress 
     AND t.poolIndex = g.poolIndex 
     AND t.created_epoch = (
       SELECT MAX(tt.created_epoch)
       FROM Trades tt
       WHERE tt.subject = u.walletAddress 
       AND tt.poolIndex = g.poolIndex)
    ), 0
  ) AS lastPrice,
  COALESCE(
    (SELECT t.ethAmount/t.shareAmount
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.created_epoch = (
       SELECT MAX(tt.created_epoch)
       FROM Trades tt
       WHERE tt.subject = u.walletAddress
       AND tt.poolIndex = g.poolIndex
       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 3600)
    ) - (SELECT t.ethAmount/t.shareAmount
         FROM Trades t
         WHERE t.subject = u.walletAddress
         AND t.poolIndex = g.poolIndex
         AND t.created_epoch = (
           SELECT MAX(tt.created_epoch)
           FROM Trades tt
           WHERE tt.subject = u.walletAddress
           AND tt.poolIndex = g.poolIndex
         )
    ), 0
  ) AS priceChange1hr,
  COALESCE(
    (SELECT t.ethAmount/t.shareAmount
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.created_epoch = (
       SELECT MAX(tt.created_epoch)
       FROM Trades tt
       WHERE tt.subject = u.walletAddress
       AND tt.poolIndex = g.poolIndex
       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 86400)
    ) - (SELECT t.ethAmount/t.shareAmount
         FROM Trades t
         WHERE t.subject = u.walletAddress
         AND t.poolIndex = g.poolIndex
         AND t.created_epoch = (
           SELECT MAX(tt.created_epoch)
           FROM Trades tt
           WHERE tt.subject = u.walletAddress
           AND tt.poolIndex = g.poolIndex
         )
    ), 0
  ) AS priceChange1D,
  COALESCE(
    (SELECT t.ethAmount/t.shareAmount
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.created_epoch = (
       SELECT MAX(tt.created_epoch)
       FROM Trades tt
       WHERE tt.subject = u.walletAddress
       AND tt.poolIndex = g.poolIndex
       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 604800)
    ) - (SELECT t.ethAmount/t.shareAmount
         FROM Trades t
         WHERE t.subject = u.walletAddress
         AND t.poolIndex = g.poolIndex
         AND t.created_epoch = (
           SELECT MAX(tt.created_epoch)
           FROM Trades tt
           WHERE tt.subject = u.walletAddress
           AND tt.poolIndex = g.poolIndex
         )
    ), 0
  ) AS priceChange1W,
  COALESCE(
    (SELECT SUM(t.shareAmount)
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.isBuy = TRUE
    ), 0
  ) AS totalSharesBought,
  COALESCE(
    (SELECT SUM(t.shareAmount)
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.isBuy = FALSE
    ), 0
  ) AS totalSharesSold,
  COALESCE(
    (SELECT SUM(t.ethAmount)
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.isBuy = TRUE
    ), 0
  ) AS totalEthBought,
  COALESCE(
    (SELECT SUM(t.ethAmount)
     FROM Trades t
     WHERE t.subject = u.walletAddress
     AND t.poolIndex = g.poolIndex
     AND t.isBuy = FALSE
    ), 0
  ) AS totalEthSold,
  COALESCE(
    (SELECT UNIXEPOCH() - MAX(t.created_epoch)
     FROM Trades t
     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),
    0
  ) AS timeSinceLastTrade,
  COALESCE(
    (SELECT COUNT(DISTINCT ug.user_id)
     FROM UserGathering ug
     WHERE ug.gathering_id = g.id),
    0
  ) AS totalMembers,
  COALESCE(
    (SELECT SUM(t.ethAmount)
     FROM Trades t
     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),
    0
  ) AS totalVolumeTraded
FROM Gatherings g
JOIN Users u ON g.sage = u.id;
