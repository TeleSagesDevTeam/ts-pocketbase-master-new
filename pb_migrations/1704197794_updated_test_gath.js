/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  COALESCE(\n    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n    0\n  ) AS membership_count,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0\n  ) AS lastPrice,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1hr,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1D,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1W,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalSharesBought,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalSharesSold,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalEthBought,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalEthSold,\n  COALESCE(\n    (SELECT strftime('%s', 'now') - MAX(strftime('%s', t.created))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\n\nWHERE EXISTS (\n  SELECT 1\n  FROM Trades t\n  WHERE t.poolIndex = g.poolIndex\n  AND t.subject = u.walletAddress\n);\n"
  }

  // remove
  collection.schema.removeField("dnsvvpj8")

  // remove
  collection.schema.removeField("gionhn1b")

  // remove
  collection.schema.removeField("0vaceylr")

  // remove
  collection.schema.removeField("rjc6iwgg")

  // remove
  collection.schema.removeField("thur1jcp")

  // remove
  collection.schema.removeField("syormc8e")

  // remove
  collection.schema.removeField("wcwfjlzm")

  // remove
  collection.schema.removeField("ixksha9t")

  // remove
  collection.schema.removeField("8xrhjtop")

  // remove
  collection.schema.removeField("ipxml14c")

  // remove
  collection.schema.removeField("srjk7nsq")

  // remove
  collection.schema.removeField("wgtjyeqe")

  // remove
  collection.schema.removeField("uo4uubya")

  // remove
  collection.schema.removeField("lq5cngjy")

  // remove
  collection.schema.removeField("e7t7yl5z")

  // remove
  collection.schema.removeField("uwuz1woh")

  // remove
  collection.schema.removeField("bxg1dqpe")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  COALESCE(\n    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n    0\n  ) AS membership_count,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0\n  ) AS lastPrice,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1hr,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1D,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1W,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalSharesBought,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalSharesSold,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalEthBought,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalEthSold,\n  COALESCE(\n    (SELECT strftime('%s', 'now') - MAX(strftime('%s', t.created))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnsvvpj8",
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
    "id": "gionhn1b",
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
    "id": "0vaceylr",
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
    "id": "rjc6iwgg",
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
    "id": "thur1jcp",
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
    "id": "syormc8e",
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
    "id": "wcwfjlzm",
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
    "id": "ixksha9t",
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
    "id": "8xrhjtop",
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
    "id": "ipxml14c",
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
    "id": "srjk7nsq",
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
    "id": "wgtjyeqe",
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
    "id": "uo4uubya",
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
    "id": "lq5cngjy",
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
    "id": "e7t7yl5z",
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
    "id": "uwuz1woh",
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
    "id": "bxg1dqpe",
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

  return dao.saveCollection(collection)
})
