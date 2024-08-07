/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  COALESCE(\n    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n    0\n  ) AS membership_count,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0\n  ) AS lastPrice,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1hr,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1D,\n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1W,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalSharesBought,\n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalSharesSold,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalEthBought,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalEthSold,\n  COALESCE(\n    (SELECT strftime('%s', 'now') - MAX(strftime('%s', t.created))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;"
  }

  // remove
  collection.schema.removeField("socnlvbj")

  // remove
  collection.schema.removeField("hii7szgf")

  // remove
  collection.schema.removeField("g5pizzan")

  // remove
  collection.schema.removeField("vhy51ol5")

  // remove
  collection.schema.removeField("lazbkf1j")

  // remove
  collection.schema.removeField("l9winzpw")

  // remove
  collection.schema.removeField("3ytcnybf")

  // remove
  collection.schema.removeField("epryprwt")

  // remove
  collection.schema.removeField("xtghwges")

  // remove
  collection.schema.removeField("kuyy5btl")

  // remove
  collection.schema.removeField("cyajnfiw")

  // remove
  collection.schema.removeField("spqzlgrr")

  // remove
  collection.schema.removeField("bim3tmkx")

  // remove
  collection.schema.removeField("vs5bkcn0")

  // remove
  collection.schema.removeField("2rtqhmup")

  // remove
  collection.schema.removeField("t6ggqfvf")

  // remove
  collection.schema.removeField("mbsdp4ep")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  COALESCE(\n    (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n    0\n  ) AS membership_count,\n  COALESCE(\n    (SELECT t.ethAmount/t.shareAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created_epoch = (\n       SELECT MAX(tt.created_epoch)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0\n  ) AS lastPrice,\n  COALESCE(\n    (SELECT t.ethAmount/t.shareAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created_epoch = (\n       SELECT MAX(tt.created_epoch)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 3600)\n    ) - (SELECT t.ethAmount/t.shareAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created_epoch = (\n           SELECT MAX(tt.created_epoch)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1hr,\n  COALESCE(\n    (SELECT t.ethAmount/t.shareAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created_epoch = (\n       SELECT MAX(tt.created_epoch)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 86400)\n    ) - (SELECT t.ethAmount/t.shareAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created_epoch = (\n           SELECT MAX(tt.created_epoch)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1D,\n  COALESCE(\n    (SELECT t.ethAmount/t.shareAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created_epoch = (\n       SELECT MAX(tt.created_epoch)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND UNIXEPOCH(created_epoch) <= UNIXEPOCH() - 604800)\n    ) - (SELECT t.ethAmount/t.shareAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created_epoch = (\n           SELECT MAX(tt.created_epoch)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0\n  ) AS priceChange1W,\n  COALESCE(\n    (SELECT SUM(t.shareAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalSharesBought,\n  COALESCE(\n    (SELECT SUM(t.shareAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalSharesSold,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0\n  ) AS totalEthBought,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0\n  ) AS totalEthSold,\n  COALESCE(\n    (SELECT UNIXEPOCH() - MAX(t.created_epoch)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "socnlvbj",
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
    "id": "hii7szgf",
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
    "id": "g5pizzan",
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
    "id": "vhy51ol5",
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
    "id": "lazbkf1j",
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
    "id": "l9winzpw",
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
    "id": "3ytcnybf",
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
    "id": "epryprwt",
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
    "id": "xtghwges",
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
    "id": "kuyy5btl",
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
    "id": "cyajnfiw",
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
    "id": "spqzlgrr",
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
    "id": "bim3tmkx",
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
    "id": "vs5bkcn0",
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
    "id": "2rtqhmup",
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
    "id": "t6ggqfvf",
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
    "id": "mbsdp4ep",
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

  return dao.saveCollection(collection)
})
