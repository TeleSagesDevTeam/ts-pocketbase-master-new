/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yedljbwp2myzbmg")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_D5felmn` ON `Users` (\n  `telegramID`,\n  `walletAddress`,\n  `xUsername`\n)",
    "CREATE UNIQUE INDEX `idx_MLQrKgX` ON `Users` (`telegramID`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yedljbwp2myzbmg")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_D5felmn` ON `Users` (\n  `telegramID`,\n  `walletAddress`,\n  `xUsername`\n)"
  ]

  return dao.saveCollection(collection)
})
