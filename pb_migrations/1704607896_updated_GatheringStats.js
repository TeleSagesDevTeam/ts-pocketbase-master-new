/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS name,\n  g.description AS description,\n  g.flatPriceParam AS flatParam,\n  g.multiPriceParam AS multiParam,\n  g.priceCurve AS priceCurce,\n  g.poolIndex AS poolIndex,\n    u.walletAddress AS sageWalletAddress,\n  g.created,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 hour') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 day') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1D,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-7 days') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("cgojroiq")

  // remove
  collection.schema.removeField("py4gwpd0")

  // remove
  collection.schema.removeField("cvvyqbhy")

  // remove
  collection.schema.removeField("rg0kdq8m")

  // remove
  collection.schema.removeField("vwcsqnyz")

  // remove
  collection.schema.removeField("qywa6skk")

  // remove
  collection.schema.removeField("jzr48ech")

  // remove
  collection.schema.removeField("gfzqhtoi")

  // remove
  collection.schema.removeField("cipv3fg3")

  // remove
  collection.schema.removeField("8nsav4p6")

  // remove
  collection.schema.removeField("uwxwxafb")

  // remove
  collection.schema.removeField("3eu2u7yt")

  // remove
  collection.schema.removeField("rbjfl6i2")

  // remove
  collection.schema.removeField("kxuuygey")

  // remove
  collection.schema.removeField("oygk8uzg")

  // remove
  collection.schema.removeField("rciyxti8")

  // remove
  collection.schema.removeField("khudqgmy")

  // remove
  collection.schema.removeField("g5fsbqqb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkqfddoa",
    "name": "sageID",
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
    "id": "5wwyq9cy",
    "name": "priceCurve",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pshcvh8j",
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
    "id": "mupvovi1",
    "name": "description",
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
    "id": "yfql7vjl",
    "name": "flatParam",
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
    "id": "lrxbamx1",
    "name": "multiParam",
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
    "id": "0eeutvlg",
    "name": "priceCurce",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ivsqdem",
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
    "id": "oh2k1ypp",
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
    "id": "woychssl",
    "name": "supplyChange1H",
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
    "id": "rz3wrcd5",
    "name": "supplyChange1D",
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
    "id": "je6fv5wc",
    "name": "supplyChange1W",
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
    "id": "ym9eqdct",
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
    "id": "ck23v4x8",
    "name": "totalETHvolume",
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
    "id": "bdizkzi9",
    "name": "volumeETH1H",
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
    "id": "ieghaez9",
    "name": "volumeETH1D",
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
    "id": "m1a028zt",
    "name": "volumeETH1W",
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
    "id": "zdfz15qx",
    "name": "currentSupply",
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
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS name,\n  g.description AS description,\n  g.flatPriceParam AS flatParam,\n  g.multiPriceParam AS multiParam,\n  g.priceCurve AS priceCurce,\n  g.poolIndex AS poolIndex,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 hour') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 day') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1D,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-7 days') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgojroiq",
    "name": "sageID",
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
    "id": "py4gwpd0",
    "name": "priceCurve",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvvyqbhy",
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
    "id": "rg0kdq8m",
    "name": "description",
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
    "id": "vwcsqnyz",
    "name": "flatParam",
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
    "id": "qywa6skk",
    "name": "multiParam",
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
    "id": "jzr48ech",
    "name": "priceCurce",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gfzqhtoi",
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
    "id": "cipv3fg3",
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
    "id": "8nsav4p6",
    "name": "supplyChange1H",
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
    "id": "uwxwxafb",
    "name": "supplyChange1D",
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
    "id": "3eu2u7yt",
    "name": "supplyChange1W",
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
    "id": "rbjfl6i2",
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
    "id": "kxuuygey",
    "name": "totalETHvolume",
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
    "id": "oygk8uzg",
    "name": "volumeETH1H",
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
    "id": "rciyxti8",
    "name": "volumeETH1D",
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
    "id": "khudqgmy",
    "name": "volumeETH1W",
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
    "id": "g5fsbqqb",
    "name": "currentSupply",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("hkqfddoa")

  // remove
  collection.schema.removeField("5wwyq9cy")

  // remove
  collection.schema.removeField("pshcvh8j")

  // remove
  collection.schema.removeField("mupvovi1")

  // remove
  collection.schema.removeField("yfql7vjl")

  // remove
  collection.schema.removeField("lrxbamx1")

  // remove
  collection.schema.removeField("0eeutvlg")

  // remove
  collection.schema.removeField("0ivsqdem")

  // remove
  collection.schema.removeField("oh2k1ypp")

  // remove
  collection.schema.removeField("woychssl")

  // remove
  collection.schema.removeField("rz3wrcd5")

  // remove
  collection.schema.removeField("je6fv5wc")

  // remove
  collection.schema.removeField("ym9eqdct")

  // remove
  collection.schema.removeField("ck23v4x8")

  // remove
  collection.schema.removeField("bdizkzi9")

  // remove
  collection.schema.removeField("ieghaez9")

  // remove
  collection.schema.removeField("m1a028zt")

  // remove
  collection.schema.removeField("zdfz15qx")

  return dao.saveCollection(collection)
})
