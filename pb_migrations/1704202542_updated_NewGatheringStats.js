/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-1 hour')) - \n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-1 hour')),\n    0\n) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;"
  }

  // remove
  collection.schema.removeField("vq7ohkky")

  // remove
  collection.schema.removeField("hq3qe25t")

  // remove
  collection.schema.removeField("enshq1ml")

  // remove
  collection.schema.removeField("2kopmfnv")

  // remove
  collection.schema.removeField("psfuynkv")

  // remove
  collection.schema.removeField("uppllgz8")

  // remove
  collection.schema.removeField("zzc1cm0f")

  // remove
  collection.schema.removeField("wukeg5pe")

  // remove
  collection.schema.removeField("fjladf8f")

  // remove
  collection.schema.removeField("sbg7ezlv")

  // remove
  collection.schema.removeField("cq9hoco6")

  // remove
  collection.schema.removeField("gi3gsoux")

  // remove
  collection.schema.removeField("gbxku54m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yi2qtu7a",
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
    "id": "klkbfl5x",
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
    "id": "ur27kvhm",
    "name": "gatheringName",
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
    "id": "zy85egwv",
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
    "id": "ycn56inv",
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
    "id": "qrakuzxf",
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
    "id": "4eck851s",
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
    "id": "znbulspj",
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
    "id": "nfyhbqq8",
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
    "id": "5rdrre5u",
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
    "id": "zwusygit",
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
    "id": "uveqhcgv",
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
    "id": "zwdlq7ze",
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
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n    0\n) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vq7ohkky",
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
    "id": "hq3qe25t",
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
    "id": "enshq1ml",
    "name": "gatheringName",
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
    "id": "2kopmfnv",
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
    "id": "psfuynkv",
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
    "id": "uppllgz8",
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
    "id": "zzc1cm0f",
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
    "id": "wukeg5pe",
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
    "id": "fjladf8f",
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
    "id": "sbg7ezlv",
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
    "id": "cq9hoco6",
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
    "id": "gi3gsoux",
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
    "id": "gbxku54m",
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
  collection.schema.removeField("yi2qtu7a")

  // remove
  collection.schema.removeField("klkbfl5x")

  // remove
  collection.schema.removeField("ur27kvhm")

  // remove
  collection.schema.removeField("zy85egwv")

  // remove
  collection.schema.removeField("ycn56inv")

  // remove
  collection.schema.removeField("qrakuzxf")

  // remove
  collection.schema.removeField("4eck851s")

  // remove
  collection.schema.removeField("znbulspj")

  // remove
  collection.schema.removeField("nfyhbqq8")

  // remove
  collection.schema.removeField("5rdrre5u")

  // remove
  collection.schema.removeField("zwusygit")

  // remove
  collection.schema.removeField("uveqhcgv")

  // remove
  collection.schema.removeField("zwdlq7ze")

  return dao.saveCollection(collection)
})
