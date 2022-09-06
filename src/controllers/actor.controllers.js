const ActorServices = require('../services/actor.services');

module.exports = class ActorControllers{
  constructor() {
    this.service = new ActorServices();
  }

  ping = (req, res) => res.status(200).json(this.service.ping());

  actorsWithMultipleCharacters = async (req, res) => {
    // return the response from actor Service´s actorsWithMultipleCharacters method
   }
}