const ActorControllers = require('../../controllers/actor.controllers');

module.exports = class ActorRoutes {
  constructor(router) {
    this.router = router;
    this.controllers = new ActorControllers();
    this.router.get('/ping', this.controllers.ping);
    this.router.get('/actorsWithMultipleCharacters', this.controllers.actorsWithMultipleCharacters);
  }

  init() {
    return this.router;
  }
}