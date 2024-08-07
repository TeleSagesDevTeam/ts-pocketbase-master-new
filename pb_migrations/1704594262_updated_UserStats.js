/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jy5nbnyq3i2kpuy")

  collection.viewRule = "@request.headers.bakend_token = 'VshesYwmA2Sv76smw8AP4hmyZW6jG8heqroiKuqZrHLkbjxziTumpajazKeBHHPbMS23a'"

  // remove
  collection.schema.removeField("7nxbvsqr")

  // remove
  collection.schema.removeField("vtxfik66")

  // remove
  collection.schema.removeField("iv2xbhkz")

  // remove
  collection.schema.removeField("anzajcsw")

  // remove
  collection.schema.removeField("ilrcuagt")

  // remove
  collection.schema.removeField("roqc5bmb")

  // remove
  collection.schema.removeField("621okiu4")

  // remove
  collection.schema.removeField("9nccqkrw")

  // remove
  collection.schema.removeField("icpryldi")

  // remove
  collection.schema.removeField("1ahuu1dx")

  // remove
  collection.schema.removeField("giltbddd")

  // remove
  collection.schema.removeField("biumz91c")

  // remove
  collection.schema.removeField("udn4ezyq")

  // remove
  collection.schema.removeField("4pw0aywe")

  // remove
  collection.schema.removeField("m7hvhmop")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqtqzamm",
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
    "id": "kwahoudl",
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
    "id": "7jmnd8nm",
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
    "id": "lspvp2bw",
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
    "id": "tftqcvfb",
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
    "id": "o5dxh0lf",
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
    "id": "ar7pgy0h",
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
    "id": "acwxyrd8",
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
    "id": "swbdh8o6",
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
    "id": "11gnkop9",
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
    "id": "zwaen8uz",
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
    "id": "rxfouqjf",
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
    "id": "5ybr0vfz",
    "name": "totalKeysBought",
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
    "id": "l2mfcaa3",
    "name": "totalKeysSold",
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
    "id": "evyq4oaa",
    "name": "maxPoolIndex",
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
  const collection = dao.findCollectionByNameOrId("jy5nbnyq3i2kpuy")

  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nxbvsqr",
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
    "id": "vtxfik66",
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
    "id": "iv2xbhkz",
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
    "id": "anzajcsw",
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
    "id": "ilrcuagt",
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
    "id": "roqc5bmb",
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
    "id": "621okiu4",
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
    "id": "9nccqkrw",
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
    "id": "icpryldi",
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
    "id": "1ahuu1dx",
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
    "id": "giltbddd",
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
    "id": "biumz91c",
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
    "id": "udn4ezyq",
    "name": "totalKeysBought",
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
    "id": "4pw0aywe",
    "name": "totalKeysSold",
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
    "id": "m7hvhmop",
    "name": "maxPoolIndex",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("aqtqzamm")

  // remove
  collection.schema.removeField("kwahoudl")

  // remove
  collection.schema.removeField("7jmnd8nm")

  // remove
  collection.schema.removeField("lspvp2bw")

  // remove
  collection.schema.removeField("tftqcvfb")

  // remove
  collection.schema.removeField("o5dxh0lf")

  // remove
  collection.schema.removeField("ar7pgy0h")

  // remove
  collection.schema.removeField("acwxyrd8")

  // remove
  collection.schema.removeField("swbdh8o6")

  // remove
  collection.schema.removeField("11gnkop9")

  // remove
  collection.schema.removeField("zwaen8uz")

  // remove
  collection.schema.removeField("rxfouqjf")

  // remove
  collection.schema.removeField("5ybr0vfz")

  // remove
  collection.schema.removeField("l2mfcaa3")

  // remove
  collection.schema.removeField("evyq4oaa")

  return dao.saveCollection(collection)
})
