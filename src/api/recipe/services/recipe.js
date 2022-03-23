'use strict';

/**
 * recipe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe.recipe', ({ strapi }) =>  ({
  //https://docs.strapi.io/developer-docs/latest/development/backend-customization/services.html#adding-a-new-service
  //yarn strapi services:list
  //strapi generate:service <servicename> --api recipe
  //yarn strapi generate service email
}));
