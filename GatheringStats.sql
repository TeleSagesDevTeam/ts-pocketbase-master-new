SELECT
 g.id AS id, g.created as created, g.sage,g.priceCurve, g.poolIndex,
  g.name as name,
  COALESCE(
   (
     SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id
   ), ''
 ) AS membership_count,
  COALESCE(
   (
  SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex=g.rowid AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid)), '')  as lastPrice,
  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(
   (
     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND created_epoch=(select max(tt.created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-3600)
   ), 0
 ) AS priceChange1hr,
  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(
   (
     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex = g.rowid AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-86400)
   ), 0
 ) AS priceChange1d,
  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(
   (
     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex = g.rowid  AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-604800)
   ), 0
 ) AS priceChange7d,
COALESCE(
   (
     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = TRUE
   ), 0
 ) AS totalSharesBought,
  COALESCE(
   (
     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = FALSE
   ), ''
 ) AS totalSharesSold,
  COALESCE(
   (
     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = TRUE
   ), 0
 ) AS totalEthPooled,
  COALESCE(
   (
     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = FALSE
   ), 0
 ) AS totalEthDispersed,
  COALESCE(
   (
     SELECT SUM(t.protocolEthAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid
   ), 0
 ) AS totalProtocolTax,
  COALESCE(
   (
     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid
   ), 0
 ) AS totalSageTax
  
FROM Gatherings g;