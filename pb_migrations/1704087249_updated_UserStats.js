/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wtxtd3np96furdc")

  // remove
  collection.schema.removeField("8bchi7sc")

  // remove
  collection.schema.removeField("ze2ouont")

  // remove
  collection.schema.removeField("hkx0g3li")

  // remove
  collection.schema.removeField("8lst6yzr")

  // remove
  collection.schema.removeField("o71cpi8y")

  // remove
  collection.schema.removeField("lwaqmoav")

  // remove
  collection.schema.removeField("n5k3udev")

  // remove
  collection.schema.removeField("4bo6gfcs")

  // remove
  collection.schema.removeField("rqgfxc3w")

  // remove
  collection.schema.removeField("21q536qh")

  // remove
  collection.schema.removeField("ykthm4co")

  // remove
  collection.schema.removeField("ffusgxrj")

  // remove
  collection.schema.removeField("zyhdf1um")

  // remove
  collection.schema.removeField("dn9rxhqj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5czz7qaa",
    "name": "telegramID",
    "type": "text",
    "required": true,
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
    "id": "t0ufscwe",
    "name": "walletAddress",
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
    "id": "o59qhbxq",
    "name": "isWalletLinked",
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
    "id": "lc4b8hba",
    "name": "xUsername",
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
    "id": "rvp7sotd",
    "name": "ogGroupVerified",
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
    "id": "ytnkgapf",
    "name": "isSage",
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
    "id": "sdra86of",
    "name": "memberships",
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
    "id": "wba9jvbr",
    "name": "gatherings",
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
    "id": "bqwg0ada",
    "name": "totalEthSpentOnTax",
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
    "id": "jbwvosgs",
    "name": "totalEthSpentOnBuy",
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
    "id": "wuzkadb7",
    "name": "totalEthGainedByTax",
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
    "id": "1iwy3rob",
    "name": "totalEthGainedBySale",
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
    "id": "jqoo8vqw",
    "name": "totalSharesBought",
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
    "id": "vakqrles",
    "name": "totalSharesSold",
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
  const collection = dao.findCollectionByNameOrId("wtxtd3np96furdc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8bchi7sc",
    "name": "telegramID",
    "type": "text",
    "required": true,
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
    "id": "ze2ouont",
    "name": "walletAddress",
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
    "id": "hkx0g3li",
    "name": "isWalletLinked",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8lst6yzr",
    "name": "xUsername",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o71cpi8y",
    "name": "ogGroupVerified",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwaqmoav",
    "name": "isSage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5k3udev",
    "name": "memberships",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4bo6gfcs",
    "name": "gatherings",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rqgfxc3w",
    "name": "totalEthSpentOnTax",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "21q536qh",
    "name": "totalEthSpentOnBuy",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykthm4co",
    "name": "totalEthGainedByTax",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffusgxrj",
    "name": "totalEthGainedBySale",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zyhdf1um",
    "name": "totalSharesBought",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn9rxhqj",
    "name": "totalSharesSold",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("5czz7qaa")

  // remove
  collection.schema.removeField("t0ufscwe")

  // remove
  collection.schema.removeField("o59qhbxq")

  // remove
  collection.schema.removeField("lc4b8hba")

  // remove
  collection.schema.removeField("rvp7sotd")

  // remove
  collection.schema.removeField("ytnkgapf")

  // remove
  collection.schema.removeField("sdra86of")

  // remove
  collection.schema.removeField("wba9jvbr")

  // remove
  collection.schema.removeField("bqwg0ada")

  // remove
  collection.schema.removeField("jbwvosgs")

  // remove
  collection.schema.removeField("wuzkadb7")

  // remove
  collection.schema.removeField("1iwy3rob")

  // remove
  collection.schema.removeField("jqoo8vqw")

  // remove
  collection.schema.removeField("vakqrles")

  return dao.saveCollection(collection)
})
