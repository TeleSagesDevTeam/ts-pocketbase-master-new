/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bisuhl8e",
    "name": "tx",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^0x[a-fA-F0-9]{64}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  // remove
  collection.schema.removeField("bisuhl8e")

  return dao.saveCollection(collection)
})
