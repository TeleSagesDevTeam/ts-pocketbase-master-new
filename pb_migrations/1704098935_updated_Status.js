/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_PnC4DvU` ON `Status` (\n  `value`,\n  `type`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_PnC4DvU` ON `Status` (`value`)"
  ]

  return dao.saveCollection(collection)
})
