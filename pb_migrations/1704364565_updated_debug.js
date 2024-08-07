/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated >= DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        1\n    ) AS currentSupply,\n    COALESCE(\n        MAX(CASE \n            WHEN t.epochCreated < DATETIME('now', '-1 hour') AND t.ethAmount > 0 THEN t.supply \n            ELSE NULL \n        END),\n        0\n    ) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nLEFT JOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // remove
  collection.schema.removeField("rnmrvajx")

  // remove
  collection.schema.removeField("75h5hrxe")

  // remove
  collection.schema.removeField("gshm87t7")

  // remove
  collection.schema.removeField("qtupu31e")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    COALESCE(\n        MAX(CASE WHEN t.epochCreated >= DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END),\n        1\n    ) AS currentSupply,\n    COALESCE(\n        MAX(CASE WHEN t.epochCreated < DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END),\n        0\n    ) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nLEFT JOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rnmrvajx",
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
    "id": "75h5hrxe",
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
    "id": "gshm87t7",
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
    "id": "qtupu31e",
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
  collection.schema.removeField("xa8p3fne")

  // remove
  collection.schema.removeField("jo2l00jv")

  // remove
  collection.schema.removeField("esphskjv")

  // remove
  collection.schema.removeField("dqbqxhhx")

  return dao.saveCollection(collection)
})
