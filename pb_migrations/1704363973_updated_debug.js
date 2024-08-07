/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(t.supply) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\n  AND t.epochCreated < DATETIME('now', '-1 hour')\nGROUP BY g.id, u.walletAddress, t.poolIndex;"
  }

  // remove
  collection.schema.removeField("xmyxwyjd")

  // remove
  collection.schema.removeField("pctwlsjn")

  // remove
  collection.schema.removeField("cgvounaz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dumaw3an",
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
    "id": "pia13t9r",
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
    "id": "n2ui1d7r",
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
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(t.supply) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\n  AND t.epochCreated >= DATETIME('now', '-1 hour')\nGROUP BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmyxwyjd",
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
    "id": "pctwlsjn",
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
    "id": "cgvounaz",
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
  collection.schema.removeField("dumaw3an")

  // remove
  collection.schema.removeField("pia13t9r")

  // remove
  collection.schema.removeField("n2ui1d7r")

  return dao.saveCollection(collection)
})
