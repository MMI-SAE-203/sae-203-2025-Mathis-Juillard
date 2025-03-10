/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // remove field
  collection.fields.removeById("relation1017980606")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4164619532",
    "hidden": false,
    "id": "relation1017980606",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite_associe",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
