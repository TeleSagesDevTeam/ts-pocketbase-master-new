/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour')) - \n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour')),\n        0\n    ) AS supplyChange1H,\n\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day')) -\n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n    0\n) AS supplyChange1D,\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days')) -\n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n    0\n) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("ucprfzrs")

  // remove
  collection.schema.removeField("p7bchoy8")

  // remove
  collection.schema.removeField("iln0lipn")

  // remove
  collection.schema.removeField("f3zkufju")

  // remove
  collection.schema.removeField("j2ldbivm")

  // remove
  collection.schema.removeField("mnhb7c7s")

  // remove
  collection.schema.removeField("ai2rqi30")

  // remove
  collection.schema.removeField("uyukmicq")

  // remove
  collection.schema.removeField("ubg7bf7n")

  // remove
  collection.schema.removeField("crtqhzno")

  // remove
  collection.schema.removeField("2a3mrpdd")

  // remove
  collection.schema.removeField("n53unbkx")

  // remove
  collection.schema.removeField("gldhfi6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wy7yiadl",
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
    "id": "8onkdwph",
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
    "id": "kzxdcmcy",
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
    "id": "yi2ataue",
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
    "id": "2fyznblq",
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
    "id": "y77pju7q",
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
    "id": "5eqw2mvl",
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
    "id": "qd28cf3i",
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
    "id": "knzsq5yr",
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
    "id": "1xaspmoq",
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
    "id": "o8u7qgkj",
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
    "id": "3o4ygjzu",
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
    "id": "0eseiypn",
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
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-1 hour')) - \n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-1 hour')),\n        0\n    ) AS supplyChange1H,\n\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-1 day')) -\n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n    0\n) AS supplyChange1D,\nCOALESCE(\n    (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND created >= DATETIME('now', '-7 days')) -\n    (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n    0\n) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ucprfzrs",
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
    "id": "p7bchoy8",
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
    "id": "iln0lipn",
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
    "id": "f3zkufju",
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
    "id": "j2ldbivm",
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
    "id": "mnhb7c7s",
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
    "id": "ai2rqi30",
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
    "id": "uyukmicq",
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
    "id": "ubg7bf7n",
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
    "id": "crtqhzno",
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
    "id": "2a3mrpdd",
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
    "id": "n53unbkx",
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
    "id": "gldhfi6l",
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
  collection.schema.removeField("wy7yiadl")

  // remove
  collection.schema.removeField("8onkdwph")

  // remove
  collection.schema.removeField("kzxdcmcy")

  // remove
  collection.schema.removeField("yi2ataue")

  // remove
  collection.schema.removeField("2fyznblq")

  // remove
  collection.schema.removeField("y77pju7q")

  // remove
  collection.schema.removeField("5eqw2mvl")

  // remove
  collection.schema.removeField("qd28cf3i")

  // remove
  collection.schema.removeField("knzsq5yr")

  // remove
  collection.schema.removeField("1xaspmoq")

  // remove
  collection.schema.removeField("o8u7qgkj")

  // remove
  collection.schema.removeField("3o4ygjzu")

  // remove
  collection.schema.removeField("0eseiypn")

  return dao.saveCollection(collection)
})
