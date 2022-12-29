"use strict";
const InitAbl = require("../../abl/init-abl.js");
const connectionAbl = require("../../abl/connection-abl.js");

class connectionController {
  init(ucEnv) {
    return InitAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  create(ucEnv) {
    return connectionAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  update(ucEnv) {
    return connectionAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  get(ucEnv) {
    return connectionAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  remove(ucEnv) {
    return connectionAbl.remove(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new connectionController();
