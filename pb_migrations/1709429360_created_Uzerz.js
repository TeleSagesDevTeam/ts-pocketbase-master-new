/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pv6vrghyqhqnkyk",
    "created": "2024-03-03 01:29:20.772Z",
    "updated": "2024-03-03 01:29:20.772Z",
    "name": "Uzerz",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0u7wujrv",
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_8boiL59` ON `Uzerz` (`walletAddress`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": false,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": true,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 16,
      "onlyEmailDomains": [],
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pv6vrghyqhqnkyk");

  return dao.deleteCollection(collection);
})
