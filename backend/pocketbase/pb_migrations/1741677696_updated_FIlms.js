/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "date2420462245",
    "max": "",
    "min": "",
    "name": "date_heure_publication",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "date2420462245",
    "max": "",
    "min": "",
    "name": "date_publication",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
