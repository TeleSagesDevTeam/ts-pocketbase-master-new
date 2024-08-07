/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jy5nbnyq3i2kpuy")

  collection.options = {
    "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalKeysBought,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalKeysSold,\n  COALESCE(\n    (\n      SELECT MAX(poolIndex) as maxPool FROM Gatherings g WHERE g.sage = u.id\n    ), ''\n  ) AS maxPoolIndex\nFROM Users u;"
  }

  // remove
  collection.schema.removeField("prgekocj")

  // remove
  collection.schema.removeField("mr4yh9od")

  // remove
  collection.schema.removeField("6izixmnn")

  // remove
  collection.schema.removeField("tks8tg79")

  // remove
  collection.schema.removeField("toemidc5")

  // remove
  collection.schema.removeField("2mx5l4xj")

  // remove
  collection.schema.removeField("40jxtwle")

  // remove
  collection.schema.removeField("rm0ofick")

  // remove
  collection.schema.removeField("jthsluhd")

  // remove
  collection.schema.removeField("f9eardjk")

  // remove
  collection.schema.removeField("egxp0mwh")

  // remove
  collection.schema.removeField("ir5wqkl4")

  // remove
  collection.schema.removeField("aeques1r")

  // remove
  collection.schema.removeField("gfpw3jl2")

  // remove
  collection.schema.removeField("iqyhngo2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nxbvsqr",
    "name": "telegramID",
    "type": "text",
    "required": true,
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
    "id": "vtxfik66",
    "name": "walletAddress",
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
    "id": "iv2xbhkz",
    "name": "isWalletLinked",
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
    "id": "anzajcsw",
    "name": "xUsername",
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
    "id": "ilrcuagt",
    "name": "ogGroupVerified",
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
    "id": "roqc5bmb",
    "name": "isSage",
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
    "id": "621okiu4",
    "name": "memberships",
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
    "id": "9nccqkrw",
    "name": "gatherings",
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
    "id": "icpryldi",
    "name": "totalEthSpentOnTax",
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
    "id": "1ahuu1dx",
    "name": "totalEthSpentOnBuy",
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
    "id": "giltbddd",
    "name": "totalEthGainedByTax",
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
    "id": "biumz91c",
    "name": "totalEthGainedBySale",
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
    "id": "udn4ezyq",
    "name": "totalKeysBought",
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
    "id": "4pw0aywe",
    "name": "totalKeysSold",
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
    "id": "m7hvhmop",
    "name": "maxPoolIndex",
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
  const collection = dao.findCollectionByNameOrId("jy5nbnyq3i2kpuy")

  collection.options = {
    "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalKeysBought,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalKeysSold,\n  COALESCE(\n    (\n      SELECT sage, MAX(poolIndex) as maxPool FROM Gatherings g WHERE g.sage = u.id\n    ), ''\n  ) AS maxPoolIndex\nFROM Users u;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prgekocj",
    "name": "telegramID",
    "type": "text",
    "required": true,
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
    "id": "mr4yh9od",
    "name": "walletAddress",
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
    "id": "6izixmnn",
    "name": "isWalletLinked",
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
    "id": "tks8tg79",
    "name": "xUsername",
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
    "id": "toemidc5",
    "name": "ogGroupVerified",
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
    "id": "2mx5l4xj",
    "name": "isSage",
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
    "id": "40jxtwle",
    "name": "memberships",
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
    "id": "rm0ofick",
    "name": "gatherings",
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
    "id": "jthsluhd",
    "name": "totalEthSpentOnTax",
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
    "id": "f9eardjk",
    "name": "totalEthSpentOnBuy",
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
    "id": "egxp0mwh",
    "name": "totalEthGainedByTax",
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
    "id": "ir5wqkl4",
    "name": "totalEthGainedBySale",
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
    "id": "aeques1r",
    "name": "totalKeysBought",
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
    "id": "gfpw3jl2",
    "name": "totalKeysSold",
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
    "id": "iqyhngo2",
    "name": "maxPoolIndex",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("7nxbvsqr")

  // remove
  collection.schema.removeField("vtxfik66")

  // remove
  collection.schema.removeField("iv2xbhkz")

  // remove
  collection.schema.removeField("anzajcsw")

  // remove
  collection.schema.removeField("ilrcuagt")

  // remove
  collection.schema.removeField("roqc5bmb")

  // remove
  collection.schema.removeField("621okiu4")

  // remove
  collection.schema.removeField("9nccqkrw")

  // remove
  collection.schema.removeField("icpryldi")

  // remove
  collection.schema.removeField("1ahuu1dx")

  // remove
  collection.schema.removeField("giltbddd")

  // remove
  collection.schema.removeField("biumz91c")

  // remove
  collection.schema.removeField("udn4ezyq")

  // remove
  collection.schema.removeField("4pw0aywe")

  // remove
  collection.schema.removeField("m7hvhmop")

  return dao.saveCollection(collection)
})
