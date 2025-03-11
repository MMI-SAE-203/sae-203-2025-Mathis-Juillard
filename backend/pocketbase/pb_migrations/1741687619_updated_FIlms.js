/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // update collection data
  unmarshal({
    "name": "Films"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1683616896")

  // update collection data
  unmarshal({
    "name": "FIlms"
  }, collection)

  return app.save(collection)
})
