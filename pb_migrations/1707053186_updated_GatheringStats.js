/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n  g.id as id,\n  g.id as gatheringID,\n  g.sage AS sageID,\n  g.priceCurve,\n  g.name AS name,\n  -- g.description AS description,\n  -- g.flatPriceParam AS flatParam,\n  -- g.multiPriceParam AS multiParam,\n  -- g.priceCurve AS priceCurce,\n  -- g.poolIndex AS poolIndex,\n  u.walletAddress AS sageWalletAddress,\n  g.created,\n  COALESCE(\n    (\n      SELECT\n        MAX(supply)\n      FROM\n        Trades\n      WHERE\n        poolIndex = g.poolIndex\n        AND subject = u.walletAddress\n        AND epochCreated >= DATETIME('now', '-1 hour')\n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT\n          supply\n        FROM\n          Trades\n        WHERE\n          poolIndex = g.poolIndex\n          AND subject = u.walletAddress\n          AND epochCreated < DATETIME('now', '-1 hour')\n        ORDER BY\n          epochCreated DESC\n        LIMIT\n          1\n      ), 1\n    ),\n    0\n  ) AS supplyChange1H,\n  COALESCE(\n    (\n      SELECT\n        MAX(supply)\n      FROM\n        Trades\n      WHERE\n        poolIndex = g.poolIndex\n        AND subject = u.walletAddress\n        AND epochCreated >= DATETIME('now', '-1 day')\n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT\n          supply\n        FROM\n          Trades\n        WHERE\n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("3nj7zpxn")

  // remove
  collection.schema.removeField("x5bspeow")

  // remove
  collection.schema.removeField("wo8g6jb6")

  // remove
  collection.schema.removeField("qjlr8qwy")

  // remove
  collection.schema.removeField("o7bjirwh")

  // remove
  collection.schema.removeField("3hdoetge")

  // remove
  collection.schema.removeField("fjik2f7j")

  // remove
  collection.schema.removeField("0zthober")

  // remove
  collection.schema.removeField("odbyirxh")

  // remove
  collection.schema.removeField("lpjvezyz")

  // remove
  collection.schema.removeField("z9ko1hq0")

  // remove
  collection.schema.removeField("ph5sp8kr")

  // remove
  collection.schema.removeField("vtpsdltk")

  // remove
  collection.schema.removeField("3qi3kpxc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cbwu1kac",
    "name": "gatheringID",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hpwvqipwiphbrbl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyxfhcwu",
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
    "id": "09f0tyg9",
    "name": "priceCurve",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 2,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5edbl90w",
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
    "id": "ln3mgkmi",
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
    "id": "vbshg196",
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
    "id": "utr8ymii",
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
    "id": "kllyod5e",
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
    "id": "rfznuk0s",
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
    "id": "u6220jxx",
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
    "id": "43ryvyzw",
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
    "id": "ckqdqu2x",
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
    "id": "80azf0r8",
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
    "id": "6f6ege7e",
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
    "id": "a2pyrjce",
    "name": "totalBuys",
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
    "id": "adp8xdlu",
    "name": "totalSells",
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
    "query": "SELECT\n  g.id as id,\n  g.id as gatheringID, \n  g.sage AS sageID, \n  -- g.priceCurve, \n  -- g.name AS name, \n  -- g.description AS description, \n  -- g.flatPriceParam AS flatParam, \n  -- g.multiPriceParam AS multiParam, \n  -- g.priceCurve AS priceCurce, \n  -- g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3nj7zpxn",
    "name": "gatheringID",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hpwvqipwiphbrbl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5bspeow",
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
    "id": "wo8g6jb6",
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
    "id": "qjlr8qwy",
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
    "id": "o7bjirwh",
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
    "id": "3hdoetge",
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
    "id": "fjik2f7j",
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
    "id": "0zthober",
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
    "id": "odbyirxh",
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
    "id": "lpjvezyz",
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
    "id": "z9ko1hq0",
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
    "id": "ph5sp8kr",
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
    "id": "vtpsdltk",
    "name": "totalBuys",
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
    "id": "3qi3kpxc",
    "name": "totalSells",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("cbwu1kac")

  // remove
  collection.schema.removeField("iyxfhcwu")

  // remove
  collection.schema.removeField("09f0tyg9")

  // remove
  collection.schema.removeField("5edbl90w")

  // remove
  collection.schema.removeField("ln3mgkmi")

  // remove
  collection.schema.removeField("vbshg196")

  // remove
  collection.schema.removeField("utr8ymii")

  // remove
  collection.schema.removeField("kllyod5e")

  // remove
  collection.schema.removeField("rfznuk0s")

  // remove
  collection.schema.removeField("u6220jxx")

  // remove
  collection.schema.removeField("43ryvyzw")

  // remove
  collection.schema.removeField("ckqdqu2x")

  // remove
  collection.schema.removeField("80azf0r8")

  // remove
  collection.schema.removeField("6f6ege7e")

  // remove
  collection.schema.removeField("a2pyrjce")

  // remove
  collection.schema.removeField("adp8xdlu")

  return dao.saveCollection(collection)
})
