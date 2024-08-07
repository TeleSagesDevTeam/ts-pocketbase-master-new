/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.poolIndex,\n    MAX(t.supply) AS currentSupply,\n    (SELECT supply FROM Trades \n     WHERE subject = t.subject AND poolIndex = t.poolIndex AND epochCreated < DATETIME('now', '-1 hour')\n     ORDER BY epochCreated DESC\n     LIMIT 1) AS lastKnownSupplyBefore1H\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nGROUP BY g.id, u.walletAddress, t.poolIndex\nORDER BY t.poolIndex, u.walletAddress;\n"
  }

  // remove
  collection.schema.removeField("j9mnepyj")

  // remove
  collection.schema.removeField("ff7y4gv9")

  // remove
  collection.schema.removeField("e9hixg3s")

  // remove
  collection.schema.removeField("04dijbzx")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.epochCreated,\n    t.supply,\n    t.poolIndex\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nWHERE g.poolIndex > -1\nAND t.epochCreated >= DATETIME('now', '-10 hour')\nORDER BY t.poolIndex, t.subject, t.epochCreated;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j9mnepyj",
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
    "id": "ff7y4gv9",
    "name": "epochCreated",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e9hixg3s",
    "name": "supply",
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
    "id": "04dijbzx",
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

  // remove
  collection.schema.removeField("iclapnth")

  // remove
  collection.schema.removeField("hxpyc8px")

  // remove
  collection.schema.removeField("wh4jecpc")

  // remove
  collection.schema.removeField("ei8wryhx")

  return dao.saveCollection(collection)
})
