/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k001ututolpdf5w")

  collection.options = {
    "query": "SELECT\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.epochCreated,\n    t.supply,\n    t.poolIndex,\n    COALESCE(sc.maxSupply, 0) AS maxSupplyLastHour,\n    COALESCE(sc.minSupply, 0) AS minSupplyLastHour,\n    COALESCE(sc.maxSupply - sc.minSupply, 0) AS supplyChange1HCalculation\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nLEFT JOIN (\n    SELECT \n        subject AS walletAddress, \n        poolIndex,\n        MAX(supply) AS maxSupply, \n        MIN(supply) AS minSupply\n    FROM Trades \n    WHERE epochCreated BETWEEN DATETIME('now', '-1 hour') AND DATETIME('now')\n    GROUP BY subject, poolIndex\n) AS sc ON t.subject = sc.walletAddress AND t.poolIndex = sc.poolIndex\nWHERE g.poolIndex > -1\nAND t.epochCreated BETWEEN DATETIME('now', '-1 hour') AND DATETIME('now');\n"
  }

  // remove
  collection.schema.removeField("m31zgozp")

  // remove
  collection.schema.removeField("vyjhiihr")

  // remove
  collection.schema.removeField("cs2cqsxm")

  // remove
  collection.schema.removeField("3027o9oy")

  // remove
  collection.schema.removeField("e0ntep2n")

  // remove
  collection.schema.removeField("rcpuyapf")

  // remove
  collection.schema.removeField("6toxqv8m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehmnf3pl",
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
    "id": "76yjczkq",
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
    "id": "kjyl85sl",
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
    "id": "rl2oavg4",
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
    "id": "msb1ghdl",
    "name": "maxSupplyLastHour",
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
    "id": "xaf5meiy",
    "name": "minSupplyLastHour",
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
    "id": "pdyhhgbp",
    "name": "supplyChange1HCalculation",
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
    "query": "SELECT\n\n    g.id AS id,\n    u.walletAddress AS sageWalletAddress,\n    t.epochCreated,\n    t.supply,\n    t.poolIndex,\n    COALESCE(sc.maxSupply, 0) AS maxSupplyLastHour,\n    COALESCE(sc.minSupply, 0) AS minSupplyLastHour,\n    COALESCE(sc.maxSupply - sc.minSupply, 0) AS supplyChange1HCalculation\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nJOIN Trades t ON g.poolIndex = t.poolIndex AND t.subject = u.walletAddress\nLEFT JOIN (\n    SELECT \n        subject AS walletAddress, \n        poolIndex,\n        MAX(supply) AS maxSupply, \n        MIN(supply) AS minSupply\n    FROM Trades \n    WHERE epochCreated >= DATETIME('now', '-1 hour')\n    GROUP BY subject, poolIndex\n) AS sc ON t.subject = sc.walletAddress AND t.poolIndex = sc.poolIndex\nWHERE g.poolIndex > -1\nAND t.epochCreated >= DATETIME('now', '-1 hour');\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m31zgozp",
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
    "id": "vyjhiihr",
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
    "id": "cs2cqsxm",
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
    "id": "3027o9oy",
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
    "id": "e0ntep2n",
    "name": "maxSupplyLastHour",
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
    "id": "rcpuyapf",
    "name": "minSupplyLastHour",
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
    "id": "6toxqv8m",
    "name": "supplyChange1HCalculation",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("ehmnf3pl")

  // remove
  collection.schema.removeField("76yjczkq")

  // remove
  collection.schema.removeField("kjyl85sl")

  // remove
  collection.schema.removeField("rl2oavg4")

  // remove
  collection.schema.removeField("msb1ghdl")

  // remove
  collection.schema.removeField("xaf5meiy")

  // remove
  collection.schema.removeField("pdyhhgbp")

  return dao.saveCollection(collection)
})
