'use strict';

/**
 * recipe router.
 */
//https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html#configuring-core-routers
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recipe.recipe');
