/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT \n  g.id as id, \n  g.sage AS sageID, \n  g.priceCurve, \n  g.name AS name, \n  g.description AS description, \n  g.flatPriceParam AS flatParam, \n  g.multiPriceParam AS multiParam, \n  g.priceCurve AS priceCurce, \n  g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n        AND ethAmount > 0\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("zdthnvfn")

  // remove
  collection.schema.removeField("smb25dnz")

  // remove
  collection.schema.removeField("cegkkzuf")

  // remove
  collection.schema.removeField("ig89a3kt")

  // remove
  collection.schema.removeField("zbs5x5fl")

  // remove
  collection.schema.removeField("zfpz8ghw")

  // remove
  collection.schema.removeField("1evchzbr")

  // remove
  collection.schema.removeField("jg4oaa0e")

  // remove
  collection.schema.removeField("ryq0v5bh")

  // remove
  collection.schema.removeField("gjqbyb1j")

  // remove
  collection.schema.removeField("fveokvgp")

  // remove
  collection.schema.removeField("0g2zfl5d")

  // remove
  collection.schema.removeField("xzrh2asw")

  // remove
  collection.schema.removeField("njlogxka")

  // remove
  collection.schema.removeField("0uhonzn7")

  // remove
  collection.schema.removeField("7qyfym5p")

  // remove
  collection.schema.removeField("htpsj6x4")

  // remove
  collection.schema.removeField("3j41vu0u")

  // remove
  collection.schema.removeField("opiigctj")

  // remove
  collection.schema.removeField("woo577i3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgkdw9v1",
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
    "id": "qk6k61nc",
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
    "id": "sipezhxk",
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
    "id": "oappmbou",
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
    "id": "ejbeyvbf",
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
    "id": "vqhi0prm",
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
    "id": "x54azb8j",
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
    "id": "lc6ds5he",
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
    "id": "sy3rilrp",
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
    "id": "km7gzcc9",
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
    "id": "yiq6kcrz",
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
    "id": "03zlzaep",
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
    "id": "1joyjgvz",
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
    "id": "iueiqpoh",
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
    "id": "xupv3pou",
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
    "id": "kpin28zj",
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
    "id": "lupuu2o5",
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
    "id": "kpvkynij",
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
    "id": "yb6uxonf",
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
    "id": "9hnlahw8",
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
    "query": "SELECT \n  g.id as id, \n  g.sage AS sageID, \n  g.priceCurve, \n  g.name AS name, \n  g.description AS description, \n  g.flatPriceParam AS flatParam, \n  g.multiPriceParam AS multiParam, \n  g.priceCurve AS priceCurce, \n  g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdthnvfn",
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
    "id": "smb25dnz",
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
    "id": "cegkkzuf",
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
    "id": "ig89a3kt",
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
    "id": "zbs5x5fl",
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
    "id": "zfpz8ghw",
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
    "id": "1evchzbr",
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
    "id": "jg4oaa0e",
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
    "id": "ryq0v5bh",
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
    "id": "gjqbyb1j",
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
    "id": "fveokvgp",
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
    "id": "0g2zfl5d",
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
    "id": "xzrh2asw",
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
    "id": "njlogxka",
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
    "id": "0uhonzn7",
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
    "id": "7qyfym5p",
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
    "id": "htpsj6x4",
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
    "id": "3j41vu0u",
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
    "id": "opiigctj",
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
    "id": "woo577i3",
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
  collection.schema.removeField("mgkdw9v1")

  // remove
  collection.schema.removeField("qk6k61nc")

  // remove
  collection.schema.removeField("sipezhxk")

  // remove
  collection.schema.removeField("oappmbou")

  // remove
  collection.schema.removeField("ejbeyvbf")

  // remove
  collection.schema.removeField("vqhi0prm")

  // remove
  collection.schema.removeField("x54azb8j")

  // remove
  collection.schema.removeField("lc6ds5he")

  // remove
  collection.schema.removeField("sy3rilrp")

  // remove
  collection.schema.removeField("km7gzcc9")

  // remove
  collection.schema.removeField("yiq6kcrz")

  // remove
  collection.schema.removeField("03zlzaep")

  // remove
  collection.schema.removeField("1joyjgvz")

  // remove
  collection.schema.removeField("iueiqpoh")

  // remove
  collection.schema.removeField("xupv3pou")

  // remove
  collection.schema.removeField("kpin28zj")

  // remove
  collection.schema.removeField("lupuu2o5")

  // remove
  collection.schema.removeField("kpvkynij")

  // remove
  collection.schema.removeField("yb6uxonf")

  // remove
  collection.schema.removeField("9hnlahw8")

  return dao.saveCollection(collection)
})
