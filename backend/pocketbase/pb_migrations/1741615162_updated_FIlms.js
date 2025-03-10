/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4269769678",
    "max": 0,
    "min": 0,
    "name": "titre_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file4215143340",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "affiche_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3339803974",
    "maxSize": 0,
    "name": "synopis_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url894536767",
    "name": "trailer_film",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4147320964",
    "max": 0,
    "min": 0,
    "name": "duree_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // remove field
  collection.fields.removeById("text4269769678")

  // remove field
  collection.fields.removeById("file4215143340")

  // remove field
  collection.fields.removeById("editor3339803974")

  // remove field
  collection.fields.removeById("url894536767")

  // remove field
  collection.fields.removeById("text4147320964")

  // remove field
  collection.fields.removeById("relation1017980606")

  return app.save(collection)
})
