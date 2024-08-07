/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  collection.updateRule = "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("drq9nnq4c0jql9q")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
