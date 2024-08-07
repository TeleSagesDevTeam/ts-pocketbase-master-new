/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT \n  g.id as id, \n  g.sage AS sageID, \n  g.priceCurve, \n  g.name AS name, \n  g.description AS description, \n  g.flatPriceParam AS flatParam, \n  g.multiPriceParam AS multiParam, \n  g.priceCurve AS priceCurce, \n  g.poolIndex AS poolIndex, \n  u.walletAddress AS sageWalletAddress, \n  g.created, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 hour') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1H, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-1 day') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1D, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND ethAmount > 0\n    ) - COALESCE(\n      (\n        SELECT \n          supply \n        FROM \n          Trades \n        WHERE \n          poolIndex = g.poolIndex \n          AND subject = u.walletAddress \n          AND epochCreated < DATETIME('now', '-7 days') \n        ORDER BY \n          epochCreated DESC \n        LIMIT \n          1\n      ), 1\n    ), \n    0\n  ) AS supplyChange1W, \n  COALESCE(\n    (\n      SELECT \n        strftime('%s', 'now') - MAX(\n          strftime('%s', epochCreated)\n        ) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS timeSinceLastTrade, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS totalETHvolume, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 hour') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1H, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-1 day') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1D, \n  COALESCE(\n    (\n      SELECT \n        SUM(ethAmount) / 1e18 \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND epochCreated >= DATETIME('now', '-7 days') \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS volumeETH1W, \n  COALESCE(\n    (\n      SELECT \n        MAX(supply) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress\n    ), \n    0\n  ) AS currentSupply, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = true\n    ), \n    0\n  ) AS totalBuys, \n  COALESCE(\n    (\n      SELECT \n        COUNT(1) \n      FROM \n        Trades \n      WHERE \n        poolIndex = g.poolIndex \n        AND subject = u.walletAddress \n        AND isBuy = false\n    ), \n    0\n  ) AS totalSells \nFROM \n  Gatherings g \n  JOIN Users u ON g.sage = u.id \nWHERE \n  g.poolIndex > -1;"
  }

  // remove
  collection.schema.removeField("hkqfddoa")

  // remove
  collection.schema.removeField("5wwyq9cy")

  // remove
  collection.schema.removeField("pshcvh8j")

  // remove
  collection.schema.removeField("mupvovi1")

  // remove
  collection.schema.removeField("yfql7vjl")

  // remove
  collection.schema.removeField("lrxbamx1")

  // remove
  collection.schema.removeField("0eeutvlg")

  // remove
  collection.schema.removeField("0ivsqdem")

  // remove
  collection.schema.removeField("oh2k1ypp")

  // remove
  collection.schema.removeField("woychssl")

  // remove
  collection.schema.removeField("rz3wrcd5")

  // remove
  collection.schema.removeField("je6fv5wc")

  // remove
  collection.schema.removeField("ym9eqdct")

  // remove
  collection.schema.removeField("ck23v4x8")

  // remove
  collection.schema.removeField("bdizkzi9")

  // remove
  collection.schema.removeField("ieghaez9")

  // remove
  collection.schema.removeField("m1a028zt")

  // remove
  collection.schema.removeField("zdfz15qx")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0")

  collection.options = {
    "query": "SELECT\n    g.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS name,\n  g.description AS description,\n  g.flatPriceParam AS flatParam,\n  g.multiPriceParam AS multiParam,\n  g.priceCurve AS priceCurce,\n  g.poolIndex AS poolIndex,\n    u.walletAddress AS sageWalletAddress,\n  g.created,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 hour') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 hour') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1H,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-1 day') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-1 day') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1D,\n\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated >= DATETIME('now', '-7 days') AND ethAmount > 0) - \n        COALESCE((SELECT supply FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress AND epochCreated < DATETIME('now', '-7 days') ORDER BY epochCreated DESC LIMIT 1), 1),\n        0\n    ) AS supplyChange1W,\n\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', epochCreated))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 hour') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-1 day') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount) / 1e18\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND epochCreated >= DATETIME('now', '-7 days') AND subject = u.walletAddress),\n        0\n    ) AS volumeETH1W,\n    COALESCE(\n        (SELECT MAX(supply) FROM Trades WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS currentSupply\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE g.poolIndex > -1;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkqfddoa",
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
    "id": "5wwyq9cy",
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
    "id": "pshcvh8j",
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
    "id": "mupvovi1",
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
    "id": "yfql7vjl",
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
    "id": "lrxbamx1",
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
    "id": "0eeutvlg",
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
    "id": "0ivsqdem",
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
    "id": "oh2k1ypp",
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
    "id": "woychssl",
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
    "id": "rz3wrcd5",
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
    "id": "je6fv5wc",
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
    "id": "ym9eqdct",
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
    "id": "ck23v4x8",
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
    "id": "bdizkzi9",
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
    "id": "ieghaez9",
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
    "id": "m1a028zt",
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
    "id": "zdfz15qx",
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

  return dao.saveCollection(collection)
})
