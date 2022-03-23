'use strict';
module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/recipe/globalpolicy",
      "handler": "recipe.globalpolicy",
      "config": {
        "policies": ["global::testglobalpolicy"]
      }
    }
  ]
};
