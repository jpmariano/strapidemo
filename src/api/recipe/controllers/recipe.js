'use strict';

/**
 *  recipe controller
 */
//https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#adding-a-new-controller
//Do not forget to enable the controller on GUI
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recipe.recipe', ({ strapi }) =>  ({
  async hello(ctx) {
    ctx.send('Hello World!');
  },
  async globalpolicy(ctx) {
    //Strapi uses KOA https://koajs.com/#response
    //https://strapi.gitee.io/documentation/3.0.0-alpha.x/guides/responses.html#response
    //ctx.send(ctx);
    ctx.response.body="test";
    //ctx.body('Global Policy Test');
  },
  async apipolicy(ctx) {
    //Strapi uses KOA https://koajs.com/#response
    //https://strapi.gitee.io/documentation/3.0.0-alpha.x/guides/responses.html#response
    //ctx.send(ctx);
    ctx.response.body="test";
    //ctx.body('Global Policy Test');
  },
}));
