/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w425enaohxx9gb3")

  collection.options = {
    "query": "SELECT\n g.id AS id,\n g.created as created,\n g.sage,\n g.priceCurve,\n g.poolIndex,\n g.name as name,\n COALESCE(\n   (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id), ''\n ) AS membership_count,\n COALESCE(\n   (SELECT t.ethAmount/t.keyAmount \n    FROM Trades t \n    WHERE t.subject=(SELECT walletAddress FROM Users WHERE id=g.sage) \n      AND t.poolIndex=g.rowid \n      AND t.created=(SELECT MAX(tt.created) FROM Trades tt WHERE tt.subject=(SELECT walletAddress FROM Users WHERE id=g.sage) AND tt.poolIndex=g.rowid)\n   ), ''\n ) AS lastPrice\n-- ... [Continue with other columns as in your original query]\nFROM Gatherings g;\n"
  }

  // remove
  collection.schema.removeField("xcya16pp")

  // remove
  collection.schema.removeField("xwb6t5t5")

  // remove
  collection.schema.removeField("h4bxdjms")

  // remove
  collection.schema.removeField("avcnrlq3")

  // remove
  collection.schema.removeField("fzcwglfm")

  // remove
  collection.schema.removeField("mc3xzszf")

  // remove
  collection.schema.removeField("xniy2zxv")

  // remove
  collection.schema.removeField("dl7qd8lj")

  // remove
  collection.schema.removeField("laznjt5u")

  // remove
  collection.schema.removeField("5y2xzqrh")

  // remove
  collection.schema.removeField("iokoc6pg")

  // remove
  collection.schema.removeField("o9tl9tpm")

  // remove
  collection.schema.removeField("zhr7kvuh")

  // remove
  collection.schema.removeField("hz7omlnn")

  // remove
  collection.schema.removeField("s3lb5nl4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cx6bbkgd",
    "name": "sage",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yedljbwp2myzbmg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yp8su3vw",
    "name": "priceCurve",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cldhwivc",
    "name": "poolIndex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "seuk8kyb",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qpxtpry",
    "name": "membership_count",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yksmjktb",
    "name": "lastPrice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w425enaohxx9gb3")

  collection.options = {
    "query": "SELECT\n g.id AS id, g.created as created, g.sage,g.priceCurve, g.poolIndex,\n  g.name as name,\n  COALESCE(\n   (\n     SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id\n   ), ''\n ) AS membership_count,\n  COALESCE(\n   (\n  SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex=g.rowid AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid)), '')  as lastPrice,\n  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(\n   (\n     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND created_epoch=(select max(tt.created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-3600)\n   ), 0\n ) AS priceChange1hr,\n  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(\n   (\n     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex = g.rowid AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-86400)\n   ), 0\n ) AS priceChange1d,\n  COALESCE((SELECT tw.ethAmount/tw.shareAmount from Trades tw where tw.subject=(select walletAddress from Users where id=g.sage) AND tw.poolIndex=g.rowid AND tw.created_epoch=(select max(created_epoch) from Trades twt where twt.subject=(select walletAddress from Users where id=g.sage) and twt.poolIndex=g.rowid)), 0)-COALESCE(\n   (\n     SELECT t.ethAmount/t.shareAmount from Trades t where t.subject=(select walletAddress from Users where id=g.sage) AND t.poolIndex = g.rowid  AND created_epoch=(select max(created_epoch) from Trades tt where tt.subject=(select walletAddress from Users where id=g.sage) and tt.poolIndex=g.rowid and unixepoch(created_epoch) <= UNIXEPOCH()-604800)\n   ), 0\n ) AS priceChange7d,\nCOALESCE(\n   (\n     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = TRUE\n   ), 0\n ) AS totalSharesBought,\n  COALESCE(\n   (\n     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = FALSE\n   ), ''\n ) AS totalSharesSold,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = TRUE\n   ), 0\n ) AS totalEthPooled,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid and t.isBuy = FALSE\n   ), 0\n ) AS totalEthDispersed,\n  COALESCE(\n   (\n     SELECT SUM(t.protocolEthAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid\n   ), 0\n ) AS totalProtocolTax,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = (select walletAddress from Users where id=g.sage) and t.poolIndex=g.rowid\n   ), 0\n ) AS totalSageTax\n  \nFROM Gatherings g;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcya16pp",
    "name": "sage",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yedljbwp2myzbmg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwb6t5t5",
    "name": "priceCurve",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h4bxdjms",
    "name": "poolIndex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "avcnrlq3",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzcwglfm",
    "name": "membership_count",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mc3xzszf",
    "name": "lastPrice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xniy2zxv",
    "name": "priceChange1hr",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dl7qd8lj",
    "name": "priceChange1d",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "laznjt5u",
    "name": "priceChange7d",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5y2xzqrh",
    "name": "totalSharesBought",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iokoc6pg",
    "name": "totalSharesSold",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o9tl9tpm",
    "name": "totalEthPooled",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhr7kvuh",
    "name": "totalEthDispersed",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hz7omlnn",
    "name": "totalProtocolTax",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s3lb5nl4",
    "name": "totalSageTax",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("cx6bbkgd")

  // remove
  collection.schema.removeField("yp8su3vw")

  // remove
  collection.schema.removeField("cldhwivc")

  // remove
  collection.schema.removeField("seuk8kyb")

  // remove
  collection.schema.removeField("5qpxtpry")

  // remove
  collection.schema.removeField("yksmjktb")

  return dao.saveCollection(collection)
})
