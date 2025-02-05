/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h53cjsfd",
    "name": "keyAmount",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vqltwjsvtq2kmxg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h53cjsfd",
    "name": "shareAmount",
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
