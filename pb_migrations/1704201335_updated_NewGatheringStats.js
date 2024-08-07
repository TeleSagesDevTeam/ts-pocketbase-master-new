/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n        0\n    ) AS membershipCount,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1H,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
  }

  // remove
  collection.schema.removeField("jsfebrdq")

  // remove
  collection.schema.removeField("pylcxggr")

  // remove
  collection.schema.removeField("opvlikbn")

  // remove
  collection.schema.removeField("yr29urnm")

  // remove
  collection.schema.removeField("1q35kmsr")

  // remove
  collection.schema.removeField("pzfntkly")

  // remove
  collection.schema.removeField("atbwpi3a")

  // remove
  collection.schema.removeField("iuk3tdxz")

  // remove
  collection.schema.removeField("yggui0zo")

  // remove
  collection.schema.removeField("sautpbru")

  // remove
  collection.schema.removeField("e0nznzah")

  // remove
  collection.schema.removeField("reop7vhh")

  // remove
  collection.schema.removeField("fmmlqvpw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9qpvgwfz",
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
    "id": "n2ffuamf",
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
    "id": "im5qcosc",
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
    "id": "koi5mpqa",
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
    "id": "ggaiqiu9",
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
    "id": "thnm1nbz",
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
    "id": "jw3qa5pa",
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
    "id": "k4yplbj4",
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
    "id": "tectg21n",
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
    "id": "eo5crxh9",
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
    "id": "pkvswfpn",
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
    "id": "rrr5ctp7",
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
    "id": "anangm7a",
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
    "id": "yblsefzr",
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
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour')),\n        0\n    ) AS supplyChange1H,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day')),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex) -\n        (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days')),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour')),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day')),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days')),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsfebrdq",
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
    "id": "pylcxggr",
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
    "id": "opvlikbn",
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
    "id": "yr29urnm",
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
    "id": "1q35kmsr",
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
    "id": "pzfntkly",
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
    "id": "atbwpi3a",
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
    "id": "iuk3tdxz",
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
    "id": "yggui0zo",
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
    "id": "sautpbru",
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
    "id": "e0nznzah",
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
    "id": "reop7vhh",
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
    "id": "fmmlqvpw",
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
  collection.schema.removeField("9qpvgwfz")

  // remove
  collection.schema.removeField("n2ffuamf")

  // remove
  collection.schema.removeField("im5qcosc")

  // remove
  collection.schema.removeField("koi5mpqa")

  // remove
  collection.schema.removeField("ggaiqiu9")

  // remove
  collection.schema.removeField("thnm1nbz")

  // remove
  collection.schema.removeField("jw3qa5pa")

  // remove
  collection.schema.removeField("k4yplbj4")

  // remove
  collection.schema.removeField("tectg21n")

  // remove
  collection.schema.removeField("eo5crxh9")

  // remove
  collection.schema.removeField("pkvswfpn")

  // remove
  collection.schema.removeField("rrr5ctp7")

  // remove
  collection.schema.removeField("anangm7a")

  // remove
  collection.schema.removeField("yblsefzr")

  return dao.saveCollection(collection)
})
