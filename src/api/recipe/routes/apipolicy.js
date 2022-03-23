'use strict';
module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/recipe/apipolicy",
      "handler": "recipe.apipolicy",
      "config": {
        "policies": ["demoapi"]
      }
    }
  ]
};
