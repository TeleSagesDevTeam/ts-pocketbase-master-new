/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qn2lhassjgkedr0",
    "created": "2024-01-02 13:10:47.784Z",
    "updated": "2024-01-02 13:10:47.784Z",
    "name": "NewGatheringStats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wykp4adn",
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
      },
      {
        "system": false,
        "id": "urptswgf",
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
      },
      {
        "system": false,
        "id": "7vhub6z4",
        "name": "gatheringName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "maz3xmcj",
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
      },
      {
        "system": false,
        "id": "pegxdgs3",
        "name": "membershipCount",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "wtwn6cio",
        "name": "supplyChange1H",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "djizp0vk",
        "name": "supplyChange1D",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "4mayhfp9",
        "name": "supplyChange1W",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "11r34sp3",
        "name": "timeSinceLastTrade",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "txabqsiy",
        "name": "totalETHvolume",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "ijmlss1g",
        "name": "volumeETH1H",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "o7bn9m8q",
        "name": "volumeETH1D",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "tfaijqwt",
        "name": "volumeETH1W",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\ng.id as id,\n    g.sage AS sageID,\n    g.priceCurve,\n    g.name AS gatheringName,\n    u.walletAddress AS sageWalletAddress,\n    COALESCE(\n        (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id),\n        0\n    ) AS membershipCount,\n    COALESCE(\n        (SELECT (SELECT supply FROM Trades WHERE poolIndex = g.poolIndex ORDER BY created DESC LIMIT 1) - (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour'))),\n        0\n    ) AS supplyChange1H,\n    COALESCE(\n        (SELECT (SELECT supply FROM Trades WHERE poolIndex = g.poolIndex ORDER BY created DESC LIMIT 1) - (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day'))),\n        0\n    ) AS supplyChange1D,\n    COALESCE(\n        (SELECT (SELECT supply FROM Trades WHERE poolIndex = g.poolIndex ORDER BY created DESC LIMIT 1) - (SELECT MIN(supply) FROM Trades WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days'))),\n        0\n    ) AS supplyChange1W,\n    COALESCE(\n        (SELECT strftime('%s', 'now') - MAX(strftime('%s', created))\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND subject = u.walletAddress),\n        0\n    ) AS timeSinceLastTrade,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex),\n        0\n    ) AS totalETHvolume,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 hour')),\n        0\n    ) AS volumeETH1H,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-1 day')),\n        0\n    ) AS volumeETH1D,\n    COALESCE(\n        (SELECT SUM(ethAmount)\n         FROM Trades\n         WHERE poolIndex = g.poolIndex AND created >= DATETIME('now', '-7 days')),\n        0\n    ) AS volumeETH1W\nFROM Gatherings g\nJOIN Users u ON g.sage = u.id;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qn2lhassjgkedr0");

  return dao.deleteCollection(collection);
})
