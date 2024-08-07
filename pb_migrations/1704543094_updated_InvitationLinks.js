/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ouscerfq",
    "name": "link",
    "type": "url",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjtfzezm",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "unused",
        "used",
        "expired"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ouscerfq",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjtfzezm",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "unused",
        "used",
        "expired"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
