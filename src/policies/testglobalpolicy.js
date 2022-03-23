module.exports =  (ctx, config, { strapi }) => {
  if (ctx.state.user) { // if a session is open
    // go to next policy or reach the controller's action
    return true;
  }

  //Strapi uses KOA https://koajs.com/#response
  //ctx.response.type='text/plain; charset=utf-8';
  ctx.response.append('test', '<http://127.0.0.1/>');
 // return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
};
