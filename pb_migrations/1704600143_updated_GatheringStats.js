/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS name,\n  g.description AS description,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 hour') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 day') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1D,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-7 days') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("f22btzx4")

  // remove
  collection.schema.removeField("n6yvuxc1")

  // remove
  collection.schema.removeField("hb8lvekb")

  // remove
  collection.schema.removeField("jtwhweea")

  // remove
  collection.schema.removeField("usotxouj")

  // remove
  collection.schema.removeField("cuhjypgm")

  // remove
  collection.schema.removeField("cv4f9v9l")

  // remove
  collection.schema.removeField("xyfw8dmj")

  // remove
  collection.schema.removeField("xaptfqbj")

  // remove
  collection.schema.removeField("ix5ctc14")

  // remove
  collection.schema.removeField("o61udtfa")

  // remove
  collection.schema.removeField("ieqebn51")

  // remove
  collection.schema.removeField("wpevuxvk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rdfazeje",
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
    "id": "e4vjewot",
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
    "id": "ag19h5s8",
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
    "id": "zkgc8f7s",
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
    "id": "keqdaipz",
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
    "id": "okl1oxhe",
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
    "id": "bdzpgm8x",
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
    "id": "j9fr3h3c",
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
    "id": "ir2repmy",
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
    "id": "bmphqdjh",
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
    "id": "mnghbykd",
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
    "id": "m3hdbiqq",
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
    "id": "mexhofql",
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
    "id": "jaxuzyuc",
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
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 hour') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 day') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1D,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-7 days') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f22btzx4",
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
    "id": "n6yvuxc1",
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
    "id": "hb8lvekb",
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
    "id": "jtwhweea",
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
    "id": "usotxouj",
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
    "id": "cuhjypgm",
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
    "id": "cv4f9v9l",
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
    "id": "xyfw8dmj",
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
    "id": "xaptfqbj",
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
    "id": "ix5ctc14",
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
    "id": "o61udtfa",
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
    "id": "ieqebn51",
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
    "id": "wpevuxvk",
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
  collection.schema.removeField("rdfazeje")

  // remove
  collection.schema.removeField("e4vjewot")

  // remove
  collection.schema.removeField("ag19h5s8")

  // remove
  collection.schema.removeField("zkgc8f7s")

  // remove
  collection.schema.removeField("keqdaipz")

  // remove
  collection.schema.removeField("okl1oxhe")

  // remove
  collection.schema.removeField("bdzpgm8x")

  // remove
  collection.schema.removeField("j9fr3h3c")

  // remove
  collection.schema.removeField("ir2repmy")

  // remove
  collection.schema.removeField("bmphqdjh")

  // remove
  collection.schema.removeField("mnghbykd")

  // remove
  collection.schema.removeField("m3hdbiqq")

  // remove
  collection.schema.removeField("mexhofql")

  // remove
  collection.schema.removeField("jaxuzyuc")

  return dao.saveCollection(collection)
})
