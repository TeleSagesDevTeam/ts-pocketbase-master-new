/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(t.supply) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\n  AND t.epochCreated >= DATETIME('now', '-1 hour')\nGROUP BY g.id, u.walletAddress, t.poolIndex;\n"
  }

  // remove
  collection.schema.removeField("iclapnth")

  // remove
  collection.schema.removeField("hxpyc8px")

  // remove
  collection.schema.removeField("wh4jecpc")

  // remove
  collection.schema.removeField("ei8wryhx")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(t.supply) AS currentSupply,\n    (SELECT supply FROM Trades \n     WHERE subject = t.subject AND poolIndex = t.poolIndex AND epochCreated < DATETIME('now', '-1 hour')\n     ORDER BY epochCreated DESC\n     LIMIT 1) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY t.poolIndex, u.walletAddress;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iclapnth",
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
    "id": "hxpyc8px",
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
    "id": "wh4jecpc",
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
    "id": "ei8wryhx",
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
  collection.schema.removeField("xmyxwyjd")

  // remove
  collection.schema.removeField("pctwlsjn")

  // remove
  collection.schema.removeField("cgvounaz")

  return dao.saveCollection(collection)
})
