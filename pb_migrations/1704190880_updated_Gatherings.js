/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hpwvqipwiphbrbl")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_3O8IpuH` ON `Gatherings` (`telegramID`)"
  ]

  // remove
  collection.schema.removeField("gsykdlol")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hpwvqipwiphbrbl")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_3O8IpuH` ON `Gatherings` (`telegramID`)",
    "CREATE UNIQUE INDEX `idx_LBP0af5` ON `Gatherings` (\n  `sageWallet`,\n  `poolIndex`\n)"
  ]

  // add
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
})
