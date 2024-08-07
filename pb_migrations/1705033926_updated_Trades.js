/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvpkqhah",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "processing.done",
        "error"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // remove
  collection.schema.removeField("gvpkqhah")

  return dao.saveCollection(collection)
})
