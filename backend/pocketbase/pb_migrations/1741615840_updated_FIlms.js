/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // add field
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

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2471982478",
    "max": 0,
    "min": 0,
    "name": "langue",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // remove field
  collection.fields.removeById("date2420462245")

  // remove field
  collection.fields.removeById("text2471982478")

  return app.save(collection)
})
