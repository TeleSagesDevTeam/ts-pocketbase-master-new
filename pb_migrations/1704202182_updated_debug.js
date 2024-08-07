/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n        0\n    ) AS membershipCount,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.id AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.id AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1H,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.id AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.id AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.id AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.id AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.id AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.id AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.id AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.id AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.id AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.id AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
  }

  // remove
  collection.schema.removeField("xk33recz")

  // remove
  collection.schema.removeField("pds2ycsq")

  // remove
  collection.schema.removeField("wi3rzae4")

  // remove
  collection.schema.removeField("ydemofkm")

  // remove
  collection.schema.removeField("ev9ywelw")

  // remove
  collection.schema.removeField("gfqm7b4s")

  // remove
  collection.schema.removeField("c4vscssz")

  // remove
  collection.schema.removeField("8phqhg9u")

  // remove
  collection.schema.removeField("uzbsugb0")

  // remove
  collection.schema.removeField("ezcjrwvv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eqpq7nea",
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
    "id": "j39dcg9s",
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
    "id": "lmutu1lk",
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
    "id": "4xnauywq",
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
    "id": "za39ijks",
    "name": "membershipCount",
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
    "id": "qms9aavo",
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
    "id": "o7nwvyub",
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
    "id": "rcwxwv0m",
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
    "id": "rlwtfbbo",
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
    "id": "fdeg6j6n",
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
    "id": "fmslstwm",
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
    "id": "qeiamimc",
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
    "id": "ns7lpbwg",
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
    "id": "ckllldy4",
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
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n        0\n    ) AS membershipCount,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS maxSupply,\n    COALESCE(\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS minSupply1H,\n    COALESCE(\n        (SELECT MAX(created) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS latestTradeTime,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xk33recz",
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
    "id": "pds2ycsq",
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
    "id": "wi3rzae4",
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
    "id": "ydemofkm",
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
    "id": "ev9ywelw",
    "name": "membershipCount",
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
    "id": "gfqm7b4s",
    "name": "maxSupply",
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
    "id": "c4vscssz",
    "name": "minSupply1H",
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
    "id": "8phqhg9u",
    "name": "latestTradeTime",
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
    "id": "uzbsugb0",
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
    "id": "ezcjrwvv",
    "name": "volumeETH1H",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("eqpq7nea")

  // remove
  collection.schema.removeField("j39dcg9s")

  // remove
  collection.schema.removeField("lmutu1lk")

  // remove
  collection.schema.removeField("4xnauywq")

  // remove
  collection.schema.removeField("za39ijks")

  // remove
  collection.schema.removeField("qms9aavo")

  // remove
  collection.schema.removeField("o7nwvyub")

  // remove
  collection.schema.removeField("rcwxwv0m")

  // remove
  collection.schema.removeField("rlwtfbbo")

  // remove
  collection.schema.removeField("fdeg6j6n")

  // remove
  collection.schema.removeField("fmslstwm")

  // remove
  collection.schema.removeField("qeiamimc")

  // remove
  collection.schema.removeField("ns7lpbwg")

  // remove
  collection.schema.removeField("ckllldy4")

  return dao.saveCollection(collection)
})
