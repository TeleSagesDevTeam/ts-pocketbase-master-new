/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  \n  COALESCE(\n    (SELECT COUNT(t.subject)\n     FROM Trades t\n     WHERE t.poolIndex = g.poolIndex\n     AND t.subject = u.walletAddress), 0) AS membership_count,\n     \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0) AS lastPrice,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1hr,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1D,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1W,\n    \n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalSharesBought,\n    \n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalSharesSold,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalEthBought,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalEthSold,\n    \n  COALESCE(\n    (SELECT strftime('%s', 'now', 'localtime') - MAX(strftime('%s', t.created, 'localtime'))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0) AS timeSinceLastTrade,\n    \n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0) AS totalMembers,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE EXISTS (\n  SELECT 1\n  FROM Trades t\n  WHERE t.poolIndex = g.poolIndex\n  AND t.subject = u.walletAddress\n);\n"
  }

  // remove
  collection.schema.removeField("deuv7ukp")

  // remove
  collection.schema.removeField("bjxg6sdj")

  // remove
  collection.schema.removeField("qveauryd")

  // remove
  collection.schema.removeField("ncivkhex")

  // remove
  collection.schema.removeField("dasw2fla")

  // remove
  collection.schema.removeField("tz3y1nko")

  // remove
  collection.schema.removeField("koftuzac")

  // remove
  collection.schema.removeField("hmwodjjt")

  // remove
  collection.schema.removeField("bgzpyfwi")

  // remove
  collection.schema.removeField("qyij4vki")

  // remove
  collection.schema.removeField("b1omhm8x")

  // remove
  collection.schema.removeField("2h9nmria")

  // remove
  collection.schema.removeField("gjxyds9i")

  // remove
  collection.schema.removeField("dyd4mt3b")

  // remove
  collection.schema.removeField("ymlyuia1")

  // remove
  collection.schema.removeField("ztrjcg29")

  // remove
  collection.schema.removeField("ebj5gbal")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbalnlfa",
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
    "id": "z4172nka",
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
    "id": "vcsvn2mo",
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
    "id": "yg9ouogs",
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
    "id": "xn2e5mic",
    "name": "sageWalletAddress",
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
    "id": "mb8hflr2",
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
    "id": "ohbbci8a",
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
    "id": "sbvwlc2p",
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
    "id": "gtayszft",
    "name": "priceChange1D",
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
    "id": "qoqsxvhz",
    "name": "priceChange1W",
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
    "id": "riojaqur",
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
    "id": "lqtyxszv",
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
    "id": "4xysiugu",
    "name": "totalEthBought",
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
    "id": "tejy5fgs",
    "name": "totalEthSold",
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
    "id": "ofhtnguc",
    "name": "timeSinceLastTrade",
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
    "id": "q5ciytuy",
    "name": "totalMembers",
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
    "id": "oyghj4vb",
    "name": "totalVolumeTraded",
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
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  COALESCE(\n    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n    0\n  ) AS membership_count,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0\n  ) AS lastPrice,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1hr,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1D,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1W,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalSharesBought,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalSharesSold,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalEthBought,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalEthSold,\n  COALESCE(\n    (SELECT strftime('%s', 'now') - MAX(strftime('%s', t.created))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\n\nWHERE EXISTS (\n  SELECT 1\n  FROM Trades t\n  WHERE t.poolIndex = g.poolIndex\n  AND t.subject = u.walletAddress\n);\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "deuv7ukp",
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
    "id": "bjxg6sdj",
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
    "id": "qveauryd",
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
    "id": "ncivkhex",
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
    "id": "dasw2fla",
    "name": "sageWalletAddress",
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
    "id": "tz3y1nko",
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
    "id": "koftuzac",
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
    "id": "hmwodjjt",
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
    "id": "bgzpyfwi",
    "name": "priceChange1D",
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
    "id": "qyij4vki",
    "name": "priceChange1W",
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
    "id": "b1omhm8x",
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
    "id": "2h9nmria",
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
    "id": "gjxyds9i",
    "name": "totalEthBought",
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
    "id": "dyd4mt3b",
    "name": "totalEthSold",
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
    "id": "ymlyuia1",
    "name": "timeSinceLastTrade",
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
    "id": "ztrjcg29",
    "name": "totalMembers",
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
    "id": "ebj5gbal",
    "name": "totalVolumeTraded",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("vbalnlfa")

  // remove
  collection.schema.removeField("z4172nka")

  // remove
  collection.schema.removeField("vcsvn2mo")

  // remove
  collection.schema.removeField("yg9ouogs")

  // remove
  collection.schema.removeField("xn2e5mic")

  // remove
  collection.schema.removeField("mb8hflr2")

  // remove
  collection.schema.removeField("ohbbci8a")

  // remove
  collection.schema.removeField("sbvwlc2p")

  // remove
  collection.schema.removeField("gtayszft")

  // remove
  collection.schema.removeField("qoqsxvhz")

  // remove
  collection.schema.removeField("riojaqur")

  // remove
  collection.schema.removeField("lqtyxszv")

  // remove
  collection.schema.removeField("4xysiugu")

  // remove
  collection.schema.removeField("tejy5fgs")

  // remove
  collection.schema.removeField("ofhtnguc")

  // remove
  collection.schema.removeField("q5ciytuy")

  // remove
  collection.schema.removeField("oyghj4vb")

  return dao.saveCollection(collection)
})
