/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  collection.indexes = [
    "CREATE INDEX `idx_E1o88q3` ON `InvitationLinks` (\n  `userID`,\n  `gatheringID`,\n  `link`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  collection.indexes = [
    "CREATE INDEX `idx_E1o88q3` ON `InvitationLinks` (\n  `userID`,\n  `gatheringID`\n)"
  ]

  return dao.saveCollection(collection)
})
