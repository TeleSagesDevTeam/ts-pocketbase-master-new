/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jy5nbnyq3i2kpuy",
    "created": "2024-01-07 02:22:02.377Z",
    "updated": "2024-01-07 02:22:02.377Z",
    "name": "UserStats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "prgekocj",
        "name": "telegramID",
        "type": "text",
        "required": true,
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
        "id": "mr4yh9od",
        "name": "walletAddress",
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
        "id": "6izixmnn",
        "name": "isWalletLinked",
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
        "id": "tks8tg79",
        "name": "xUsername",
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
        "id": "toemidc5",
        "name": "ogGroupVerified",
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
        "id": "2mx5l4xj",
        "name": "isSage",
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
        "id": "40jxtwle",
        "name": "memberships",
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
        "id": "rm0ofick",
        "name": "gatherings",
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
        "id": "jthsluhd",
        "name": "totalEthSpentOnTax",
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
        "id": "f9eardjk",
        "name": "totalEthSpentOnBuy",
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
        "id": "egxp0mwh",
        "name": "totalEthGainedByTax",
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
        "id": "ir5wqkl4",
        "name": "totalEthGainedBySale",
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
        "id": "aeques1r",
        "name": "totalKeysBought",
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
        "id": "gfpw3jl2",
        "name": "totalKeysSold",
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
        "id": "iqyhngo2",
        "name": "maxPoolIndex",
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
      "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalKeysBought,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalKeysSold,\n  COALESCE(\n    (\n      SELECT sage, MAX(poolIndex) as maxPool FROM Gatherings g WHERE g.sage = u.id\n    ), ''\n  ) AS maxPoolIndex\nFROM Users u;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jy5nbnyq3i2kpuy");

  return dao.deleteCollection(collection);
})
