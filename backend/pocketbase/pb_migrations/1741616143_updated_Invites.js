/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select4149945684",
    "maxSelect": 1,
    "name": "Role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "realisateur",
      "acteurs",
      "animateurs"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // remove field
  collection.fields.removeById("select4149945684")

  return app.save(collection)
})
