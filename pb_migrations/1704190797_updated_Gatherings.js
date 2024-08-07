/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hpwvqipwiphbrbl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsykdlol",
    "name": "sageWallet",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^0x[0-9a-fA-F]{40}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hpwvqipwiphbrbl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gsykdlol",
    "name": "sageWallet",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 40,
      "max": 40,
      "pattern": "^0x[0-9a-fA-F]{40}$"
    }
  }))

  return dao.saveCollection(collection)
})
