/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n  g.id as id,\n  g.id as gatheringID, \n  g.sage AS sageID, \n  -- g.priceCurve, \n  -- g.name AS name, \n  -- g.description AS description, \n  -- g.flatPriceParam AS flatParam, \n  -- g.multiPriceParam AS multiParam, \n  -- g.priceCurve AS priceCurce, \n  -- g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("6hx9gbz0")

  // remove
  collection.schema.removeField("zf2kxtfz")

  // remove
  collection.schema.removeField("rrlnv6mw")

  // remove
  collection.schema.removeField("zywb8z36")

  // remove
  collection.schema.removeField("3kburuiu")

  // remove
  collection.schema.removeField("nqbcnqzr")

  // remove
  collection.schema.removeField("zp4zwlbx")

  // remove
  collection.schema.removeField("2nxqy501")

  // remove
  collection.schema.removeField("xtgfjacs")

  // remove
  collection.schema.removeField("ezn5dzsl")

  // remove
  collection.schema.removeField("q82klzan")

  // remove
  collection.schema.removeField("djxcf6yf")

  // remove
  collection.schema.removeField("h7txcw19")

  // remove
  collection.schema.removeField("lz7iir2m")

  // remove
  collection.schema.removeField("z1dwigue")

  // remove
  collection.schema.removeField("dollpsxv")

  // remove
  collection.schema.removeField("a4f74ore")

  // remove
  collection.schema.removeField("goig3rqg")

  // remove
  collection.schema.removeField("qhp8ttba")

  // remove
  collection.schema.removeField("r25cdyhl")

  // remove
  collection.schema.removeField("kqyahd44")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n  g.id as id,\n  g.id as gatheringID, \n  g.sage AS sageID, \n  g.priceCurve, \n  g.name AS name, \n  g.description AS description, \n  g.flatPriceParam AS flatParam, \n  g.multiPriceParam AS multiParam, \n  g.priceCurve AS priceCurce, \n  g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6hx9gbz0",
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
    "id": "zf2kxtfz",
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
    "id": "rrlnv6mw",
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
    "id": "zywb8z36",
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
    "id": "3kburuiu",
    "name": "description",
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
    "id": "nqbcnqzr",
    "name": "flatParam",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zp4zwlbx",
    "name": "multiParam",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nxqy501",
    "name": "priceCurce",
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
    "id": "xtgfjacs",
    "name": "poolIndex",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezn5dzsl",
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
    "id": "q82klzan",
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
    "id": "djxcf6yf",
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
    "id": "h7txcw19",
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
    "id": "lz7iir2m",
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
    "id": "z1dwigue",
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
    "id": "dollpsxv",
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
    "id": "a4f74ore",
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
    "id": "goig3rqg",
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
    "id": "qhp8ttba",
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
    "id": "r25cdyhl",
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
    "id": "kqyahd44",
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

  return dao.saveCollection(collection)
})
