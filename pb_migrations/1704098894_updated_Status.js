/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_PnC4DvU` ON `Status` (`value`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvwj7whr",
    "name": "value",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.indexes = []

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvwj7whr",
    "name": "value",
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

  return dao.saveCollection(collection)
})
