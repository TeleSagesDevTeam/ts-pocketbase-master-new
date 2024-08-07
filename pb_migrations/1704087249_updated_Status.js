/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.listRule = "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'"
  collection.createRule = "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sspidcds42jvlhx")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
