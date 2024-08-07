/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wtxtd3np96furdc");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wtxtd3np96furdc",
    "created": "2023-11-25 09:01:14.285Z",
    "updated": "2024-01-07 02:20:46.918Z",
    "name": "UserStats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qwrvhask",
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
        "id": "rx6uoyxn",
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
        "id": "x1na8hca",
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
        "id": "nl8btgeu",
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
        "id": "8gsjgjwl",
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
        "id": "grcilfvk",
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
        "id": "piwqafyc",
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
        "id": "kfxzs6yv",
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
        "id": "1hnhtpnu",
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
        "id": "qskbnims",
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
        "id": "e0inv9zm",
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
        "id": "r1zwxbx9",
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
        "id": "vbwz9ctw",
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
        "id": "58zexftu",
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
        "id": "lmgcgixa",
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
    "listRule": "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'",
    "viewRule": "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n u.id AS id,\n  telegramID,\n u.walletAddress AS walletAddress,\n COALESCE(\n   CASE\n     WHEN u.walletAddress != '' AND u.walletProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS isWalletLinked,\n COALESCE(\n   CASE\n     WHEN u.xProof != '' AND u.xUsername != '' THEN u.xUsername\n     ELSE FALSE\n   END, FALSE\n ) AS xUsername,\n   COALESCE(\n   CASE\n     WHEN u.ogGroupID != '' AND u.ogGroupName != '' AND u.ogGroupProof != '' THEN TRUE\n     ELSE FALSE\n   END, FALSE\n ) AS ogGroupVerified,\n COALESCE(\n   (\n     CASE\n       WHEN EXISTS (SELECT 1 FROM Gatherings g WHERE g.sage = u.id AND g.poolIndex > -1) THEN TRUE\n       ELSE FALSE\n     END\n   ), FALSE\n ) AS isSage,\n COALESCE(\n (\n  SELECT GROUP_CONCAT(g.gathering_id) \n  FROM UserGathering g \n  WHERE u.id = g.user_id\n ), ''\n ) AS memberships,\n COALESCE(\n   (\n     SELECT GROUP_CONCAT(g.id) FROM Gatherings g WHERE g.sage = u.id\n   ), ''\n ) AS gatherings,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) + SUM(t.protocolEthAmount) FROM Trades t WHERE t.trader = u.walletAddress\n   ), ''\n ) AS totalEthSpentOnTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.trader = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalEthSpentOnBuy,\n  COALESCE(\n   (\n     SELECT SUM(t.subjectEthAmount) FROM Trades t WHERE t.subject = u.walletAddress\n   ), ''\n ) AS totalEthGainedByTax,\n  COALESCE(\n   (\n     SELECT SUM(t.ethAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalEthGainedBySale,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = TRUE\n   ), ''\n ) AS totalKeysBought,\n  COALESCE(\n   (\n     SELECT SUM(t.keyAmount) FROM Trades t WHERE t.subject = u.walletAddress and t.isBuy = FALSE\n   ), ''\n ) AS totalKeysSold,\n  COALESCE(\n    (\n      SELECT sage, MAX(poolIndex) as maxPool FROM Gatherings g WHERE g.sage = u.id\n    ), ''\n  ) AS maxPoolIndex\nFROM Users u;"
    }
  });

  return Dao(db).saveCollection(collection);
})
