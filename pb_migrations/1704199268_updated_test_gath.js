/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  \n  COALESCE(\n    (SELECT COUNT(t.subject)\n     FROM Trades t\n     WHERE t.poolIndex = g.poolIndex\n     AND t.subject = u.walletAddress), 0) AS membership_count,\n     \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0) AS lastPrice,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND (strftime('%s', 'now') - strftime('%s', tt.created)) <= 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1hr,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND (strftime('%s', 'now') - strftime('%s', tt.created)) <= 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1D,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND (strftime('%s', 'now') - strftime('%s', tt.created)) <= 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1W,\n    \n  COALESCE(\n    (SELECT t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalSharesBought,\n    \n  COALESCE(\n    (SELECT t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalSharesSold,\n    \n  COALESCE(\n    (SELECT t.ethAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalEthBought,\n    \n  COALESCE(\n    (SELECT t.ethAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalEthSold,\n    \n  COALESCE(\n    (SELECT strftime('%s', 'now') - MAX(strftime('%s', tt.created))\n     FROM Trades tt\n     WHERE tt.subject = u.walletAddress\n     AND tt.poolIndex = g.poolIndex),\n    0\n  ) AS timeSinceLastTrade,\n  \n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0\n  ) AS totalMembers,\n  \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex),\n    0\n  ) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE EXISTS (\n  SELECT 1\n  FROM Trades t\n  WHERE t.poolIndex = g.poolIndex\n  AND t.subject = u.walletAddress\n);\n"
  }

  // remove
  collection.schema.removeField("vbalnlfa")

  // remove
  collection.schema.removeField("z4172nka")

  // remove
  collection.schema.removeField("vcsvn2mo")

  // remove
  collection.schema.removeField("yg9ouogs")

  // remove
  collection.schema.removeField("xn2e5mic")

  // remove
  collection.schema.removeField("mb8hflr2")

  // remove
  collection.schema.removeField("ohbbci8a")

  // remove
  collection.schema.removeField("sbvwlc2p")

  // remove
  collection.schema.removeField("gtayszft")

  // remove
  collection.schema.removeField("qoqsxvhz")

  // remove
  collection.schema.removeField("riojaqur")

  // remove
  collection.schema.removeField("lqtyxszv")

  // remove
  collection.schema.removeField("4xysiugu")

  // remove
  collection.schema.removeField("tejy5fgs")

  // remove
  collection.schema.removeField("ofhtnguc")

  // remove
  collection.schema.removeField("q5ciytuy")

  // remove
  collection.schema.removeField("oyghj4vb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmnejldg",
    "name": "sage",
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
    "id": "axkwa83x",
    "name": "priceCurve",
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
    "id": "lrtrwdpo",
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
    "id": "gtcftlek",
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
    "id": "0xqt6979",
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
    "id": "updli4rr",
    "name": "membership_count",
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
    "id": "i54nmpbg",
    "name": "lastPrice",
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
    "id": "kqylrbnv",
    "name": "priceChange1hr",
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
    "id": "k7rwx3uh",
    "name": "priceChange1D",
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
    "id": "tjgtfu1n",
    "name": "priceChange1W",
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
    "id": "sfrthepx",
    "name": "totalSharesBought",
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
    "id": "hasllebo",
    "name": "totalSharesSold",
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
    "id": "auwqz2sz",
    "name": "totalEthBought",
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
    "id": "0l13isw6",
    "name": "totalEthSold",
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
    "id": "opxneolz",
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
    "id": "tkbgmiyt",
    "name": "totalMembers",
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
    "id": "rllhkz46",
    "name": "totalVolumeTraded",
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
  const collection = dao.findCollectionByNameOrId("mvdvtleumzmfuyd")

  collection.options = {
    "query": "SELECT\n  g.id AS id,\n  g.created AS created,\n  g.sage,\n  g.priceCurve,\n  g.poolIndex,\n  g.name AS name,\n  u.walletAddress AS sageWalletAddress,\n  \n  COALESCE(\n    (SELECT COUNT(t.subject)\n     FROM Trades t\n     WHERE t.poolIndex = g.poolIndex\n     AND t.subject = u.walletAddress), 0) AS membership_count,\n     \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t \n     WHERE t.subject = u.walletAddress \n     AND t.poolIndex = g.poolIndex \n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress \n       AND tt.poolIndex = g.poolIndex)\n    ), 0) AS lastPrice,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 3600)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1hr,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 86400)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1D,\n    \n  COALESCE(\n    (SELECT t.ethAmount/t.keyAmount\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.created = (\n       SELECT MAX(tt.created)\n       FROM Trades tt\n       WHERE tt.subject = u.walletAddress\n       AND tt.poolIndex = g.poolIndex\n       AND strftime('%s', tt.created) <= strftime('%s', 'now', 'localtime') - 604800)\n    ) - (SELECT t.ethAmount/t.keyAmount\n         FROM Trades t\n         WHERE t.subject = u.walletAddress\n         AND t.poolIndex = g.poolIndex\n         AND t.created = (\n           SELECT MAX(tt.created)\n           FROM Trades tt\n           WHERE tt.subject = u.walletAddress\n           AND tt.poolIndex = g.poolIndex\n         )\n    ), 0) AS priceChange1W,\n    \n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalSharesBought,\n    \n  COALESCE(\n    (SELECT SUM(t.keyAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalSharesSold,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = TRUE\n    ), 0) AS totalEthBought,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress\n     AND t.poolIndex = g.poolIndex\n     AND t.isBuy = FALSE\n    ), 0) AS totalEthSold,\n    \n  COALESCE(\n    (SELECT strftime('%s', 'now', 'localtime') - MAX(strftime('%s', t.created, 'localtime'))\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0) AS timeSinceLastTrade,\n    \n  COALESCE(\n    (SELECT COUNT(DISTINCT ug.user_id)\n     FROM UserGathering ug\n     WHERE ug.gathering_id = g.id),\n    0) AS totalMembers,\n    \n  COALESCE(\n    (SELECT SUM(t.ethAmount)\n     FROM Trades t\n     WHERE t.subject = u.walletAddress AND t.poolIndex = g.poolIndex),\n    0) AS totalVolumeTraded\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id\nWHERE EXISTS (\n  SELECT 1\n  FROM Trades t\n  WHERE t.poolIndex = g.poolIndex\n  AND t.subject = u.walletAddress\n);\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbalnlfa",
    "name": "sage",
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
    "id": "z4172nka",
    "name": "priceCurve",
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
    "id": "vcsvn2mo",
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
    "id": "yg9ouogs",
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
    "id": "xn2e5mic",
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
    "id": "mb8hflr2",
    "name": "membership_count",
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
    "id": "ohbbci8a",
    "name": "lastPrice",
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
    "id": "sbvwlc2p",
    "name": "priceChange1hr",
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
    "id": "gtayszft",
    "name": "priceChange1D",
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
    "id": "qoqsxvhz",
    "name": "priceChange1W",
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
    "id": "riojaqur",
    "name": "totalSharesBought",
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
    "id": "lqtyxszv",
    "name": "totalSharesSold",
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
    "id": "4xysiugu",
    "name": "totalEthBought",
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
    "id": "tejy5fgs",
    "name": "totalEthSold",
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
    "id": "ofhtnguc",
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
    "id": "q5ciytuy",
    "name": "totalMembers",
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
    "id": "oyghj4vb",
    "name": "totalVolumeTraded",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("wmnejldg")

  // remove
  collection.schema.removeField("axkwa83x")

  // remove
  collection.schema.removeField("lrtrwdpo")

  // remove
  collection.schema.removeField("gtcftlek")

  // remove
  collection.schema.removeField("0xqt6979")

  // remove
  collection.schema.removeField("updli4rr")

  // remove
  collection.schema.removeField("i54nmpbg")

  // remove
  collection.schema.removeField("kqylrbnv")

  // remove
  collection.schema.removeField("k7rwx3uh")

  // remove
  collection.schema.removeField("tjgtfu1n")

  // remove
  collection.schema.removeField("sfrthepx")

  // remove
  collection.schema.removeField("hasllebo")

  // remove
  collection.schema.removeField("auwqz2sz")

  // remove
  collection.schema.removeField("0l13isw6")

  // remove
  collection.schema.removeField("opxneolz")

  // remove
  collection.schema.removeField("tkbgmiyt")

  // remove
  collection.schema.removeField("rllhkz46")

  return dao.saveCollection(collection)
})
