/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf7vtlmd",
    "name": "eventIndex",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9lcqd8ai",
    "name": "epochCreated",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // remove
  collection.schema.removeField("qf7vtlmd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9lcqd8ai",
    "name": "created_epoch",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
