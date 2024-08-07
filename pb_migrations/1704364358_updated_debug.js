/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    COALESCE(\n        MAX(CASE WHEN t.epochCreated >= DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END),\n        MAX(CASE WHEN t.epochCreated < DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END)\n    ) AS currentSupply,\n    MAX(CASE WHEN t.epochCreated < DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;"
  }

  // remove
  collection.schema.removeField("etxpstha")

  // remove
  collection.schema.removeField("kzumbuxt")

  // remove
  collection.schema.removeField("mtttyth4")

  // remove
  collection.schema.removeField("ha64etqr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1nlfisyo",
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
    "id": "lzdtw31e",
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
    "id": "hx6syfhu",
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
    "id": "nbjchyyj",
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
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(CASE WHEN t.epochCreated >= DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END) AS currentSupply,\n    MAX(CASE WHEN t.epochCreated < DATETIME('now', '-1 hour') THEN t.supply ELSE NULL END) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etxpstha",
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
    "id": "kzumbuxt",
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
    "id": "mtttyth4",
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
    "id": "ha64etqr",
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
  collection.schema.removeField("1nlfisyo")

  // remove
  collection.schema.removeField("lzdtw31e")

  // remove
  collection.schema.removeField("hx6syfhu")

  // remove
  collection.schema.removeField("nbjchyyj")

  return dao.saveCollection(collection)
})
