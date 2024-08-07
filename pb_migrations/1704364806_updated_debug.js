/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        1\n    ) AS currentSupply,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        0\n    ) AS lastKnownSupplyBefore1H,\n    (\n        COALESCE(\n            MAX(CASE \n                WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n                ELSE NULL \n            END),\n            1\n        ) - COALESCE(\n            MAX(CASE \n                WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n                ELSE NULL \n            END),\n            0\n        )\n    ) AS supplyChange1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nLEFT JOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // remove
  collection.schema.removeField("xa8p3fne")

  // remove
  collection.schema.removeField("jo2l00jv")

  // remove
  collection.schema.removeField("esphskjv")

  // remove
  collection.schema.removeField("dqbqxhhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nejos1yl",
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
    "id": "3gy4tf3q",
    "name": "poolIndex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cu3mm8us",
    "name": "currentSupply",
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
    "id": "t9xqltpw",
    "name": "lastKnownSupplyBefore1H",
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
    "id": "loip7ad4",
    "name": "supplyChange1H",
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
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        1\n    ) AS currentSupply,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        0\n    ) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nLEFT JOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xa8p3fne",
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
    "id": "jo2l00jv",
    "name": "poolIndex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "esphskjv",
    "name": "currentSupply",
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
    "id": "dqbqxhhx",
    "name": "lastKnownSupplyBefore1H",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("nejos1yl")

  // remove
  collection.schema.removeField("3gy4tf3q")

  // remove
  collection.schema.removeField("cu3mm8us")

  // remove
  collection.schema.removeField("t9xqltpw")

  // remove
  collection.schema.removeField("loip7ad4")

  return dao.saveCollection(collection)
})
