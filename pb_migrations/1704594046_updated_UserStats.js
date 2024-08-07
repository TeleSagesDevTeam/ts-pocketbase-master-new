/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wtxtd3np96furdc")

  collection.options = {
    "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalKeysBought,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalKeysSold,\n  COALESCE(\n    (\n      SELECT sage, MAX(poolIndex) as maxPool FROM Gatherings g WHERE g.sage = u.id\n    ), ''\n  ) AS maxPoolIndex\nFROM Users u;"
  }

  // remove
  collection.schema.removeField("5czz7qaa")

  // remove
  collection.schema.removeField("t0ufscwe")

  // remove
  collection.schema.removeField("o59qhbxq")

  // remove
  collection.schema.removeField("lc4b8hba")

  // remove
  collection.schema.removeField("rvp7sotd")

  // remove
  collection.schema.removeField("ytnkgapf")

  // remove
  collection.schema.removeField("sdra86of")

  // remove
  collection.schema.removeField("wba9jvbr")

  // remove
  collection.schema.removeField("bqwg0ada")

  // remove
  collection.schema.removeField("jbwvosgs")

  // remove
  collection.schema.removeField("wuzkadb7")

  // remove
  collection.schema.removeField("1iwy3rob")

  // remove
  collection.schema.removeField("jqoo8vqw")

  // remove
  collection.schema.removeField("vakqrles")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwrvhask",
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
    "id": "rx6uoyxn",
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
    "id": "x1na8hca",
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
    "id": "nl8btgeu",
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
    "id": "8gsjgjwl",
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
    "id": "grcilfvk",
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
    "id": "piwqafyc",
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
    "id": "kfxzs6yv",
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
    "id": "1hnhtpnu",
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
    "id": "qskbnims",
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
    "id": "e0inv9zm",
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
    "id": "r1zwxbx9",
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
    "id": "vbwz9ctw",
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
    "id": "58zexftu",
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
    "id": "lmgcgixa",
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
  const collection = dao.findCollectionByNameOrId("wtxtd3np96furdc")

  collection.options = {
    "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalSharesBought,\n  COALESCE(\n   (\n     SELECT SUM(t.shareAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalSharesSold\nFROM Users u;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5czz7qaa",
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
    "id": "t0ufscwe",
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
    "id": "o59qhbxq",
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
    "id": "lc4b8hba",
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
    "id": "rvp7sotd",
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
    "id": "ytnkgapf",
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
    "id": "sdra86of",
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
    "id": "wba9jvbr",
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
    "id": "bqwg0ada",
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
    "id": "jbwvosgs",
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
    "id": "wuzkadb7",
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
    "id": "1iwy3rob",
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
    "id": "jqoo8vqw",
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
    "id": "vakqrles",
    "name": "totalSharesSold",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("qwrvhask")

  // remove
  collection.schema.removeField("rx6uoyxn")

  // remove
  collection.schema.removeField("x1na8hca")

  // remove
  collection.schema.removeField("nl8btgeu")

  // remove
  collection.schema.removeField("8gsjgjwl")

  // remove
  collection.schema.removeField("grcilfvk")

  // remove
  collection.schema.removeField("piwqafyc")

  // remove
  collection.schema.removeField("kfxzs6yv")

  // remove
  collection.schema.removeField("1hnhtpnu")

  // remove
  collection.schema.removeField("qskbnims")

  // remove
  collection.schema.removeField("e0inv9zm")

  // remove
  collection.schema.removeField("r1zwxbx9")

  // remove
  collection.schema.removeField("vbwz9ctw")

  // remove
  collection.schema.removeField("58zexftu")

  // remove
  collection.schema.removeField("lmgcgixa")

  return dao.saveCollection(collection)
})
