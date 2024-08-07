/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w425enaohxx9gb3")

  collection.options = {
    "query": "SELECT\n g.id AS id,\n g.created as created,\n g.sage,\n g.priceCurve,\n g.poolIndex,\n g.name as name,\n COALESCE(\n   (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id), 0\n ) AS membership_count,\n COALESCE(\n   (SELECT t.ethAmount/t.keyAmount \n    FROM Trades t\n    INNER JOIN Users u ON t.subject = u.walletAddress\n    WHERE u.id = g.sage \n      AND t.poolIndex = g.poolIndex \n      AND t.created = (SELECT MAX(tt.created) FROM Trades tt INNER JOIN Users uu ON tt.subject = uu.walletAddress WHERE uu.id = g.sage AND tt.poolIndex = g.poolIndex)\n   ), 0\n ) AS lastPrice\n-- Make sure to remove the comma at the end of the last selected column before the FROM keyword\nFROM Gatherings g\nWHERE g.poolIndex > -1;\n"
  }

  // remove
  collection.schema.removeField("cx6bbkgd")

  // remove
  collection.schema.removeField("yp8su3vw")

  // remove
  collection.schema.removeField("cldhwivc")

  // remove
  collection.schema.removeField("seuk8kyb")

  // remove
  collection.schema.removeField("5qpxtpry")

  // remove
  collection.schema.removeField("yksmjktb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mglloshe",
    "name": "sage",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yedljbwp2myzbmg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "84vy7h4d",
    "name": "priceCurve",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wonhkl3q",
    "name": "poolIndex",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5yye9msk",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qmozgvg",
    "name": "membership_count",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i7n8w7ng",
    "name": "lastPrice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w425enaohxx9gb3")

  collection.options = {
    "query": "SELECT\n g.id AS id,\n g.created as created,\n g.sage,\n g.priceCurve,\n g.poolIndex,\n g.name as name,\n COALESCE(\n   (SELECT COUNT(ug.id) FROM UserGathering ug WHERE ug.gathering_id = g.id), ''\n ) AS membership_count,\n COALESCE(\n   (SELECT t.ethAmount/t.keyAmount \n    FROM Trades t \n    WHERE t.subject=(SELECT walletAddress FROM Users WHERE id=g.sage) \n      AND t.poolIndex=g.rowid \n      AND t.created=(SELECT MAX(tt.created) FROM Trades tt WHERE tt.subject=(SELECT walletAddress FROM Users WHERE id=g.sage) AND tt.poolIndex=g.rowid)\n   ), ''\n ) AS lastPrice\n-- ... [Continue with other columns as in your original query]\nFROM Gatherings g;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cx6bbkgd",
    "name": "sage",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yedljbwp2myzbmg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yp8su3vw",
    "name": "priceCurve",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cldhwivc",
    "name": "poolIndex",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "seuk8kyb",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qpxtpry",
    "name": "membership_count",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yksmjktb",
    "name": "lastPrice",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("mglloshe")

  // remove
  collection.schema.removeField("84vy7h4d")

  // remove
  collection.schema.removeField("wonhkl3q")

  // remove
  collection.schema.removeField("5yye9msk")

  // remove
  collection.schema.removeField("4qmozgvg")

  // remove
  collection.schema.removeField("i7n8w7ng")

  return dao.saveCollection(collection)
})
