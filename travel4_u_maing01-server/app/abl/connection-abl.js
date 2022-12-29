"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/connection-error.js");

const WARNINGS = {
  unsupportedKeys: {
    CODE: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
};

class connectionAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("connection");
  }

  async create(awid, dtoIn, uuAppErrorMap = {}) {
    // validation of dtoIn - input of cmd
    let validationResult = this.validator.validate("connectionCreateDtoInType", dtoIn);

    // write to uuAppErrorMap result of validation
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.CODE,
      Errors.Get.InvalidDtoIn
    );

    let connectionDtoOut;
    try {
      // call dao method create to insert your joke into database
      connectionDtoOut = await this.dao.create({ ...dtoIn, awid });
    } catch (e) {
      // throw an error if something goes wrong during inserting joke into database
      throw new Errors.Create.connectionCreateFailed({ uuAppErrorMap }, e);
    }

    // return created joke
    return {
      ...connectionDtoOut,
      uuAppErrorMap,
    };
  }

  async update(awid, dtoIn, uuAppErrorMap = {}) {
    // validation of dtoIn - input of cmd
    let validationResult = this.validator.validate("connectionUpdateDtoInType", dtoIn);

    // write to uuAppErrorMap result of validation
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.CODE,
      Errors.Get.InvalidDtoIn
    );

    // load joke from database by id from dtoIn
    let connection = await this.dao.get(awid, dtoIn.id);

    // if joke does not exist (was not found in database)
    if (!connection) {
      throw new Errors.Update.connectionDoesNotExist({ uuAppErrorMap }, { connectionId: dtoIn.id });
    }

    let connectionDtoOut;
    try {
      // call dao method update to edit your joke in database
      connectionDtoOut = await this.dao.update({ ...dtoIn, awid });
    } catch (e) {
      // throw an error if something goes wrong during editing joke in database
      throw new Errors.Create.connectionCreateFailed({ uuAppErrorMap }, e);
    }

    // return updated joke
    return {
      ...connectionDtoOut,
      uuAppErrorMap,
    };
  }

  async get(awid, dtoIn, uuAppErrorMap = {}) {
    // validation of dtoIn - input of cmd
    let validationResult = this.validator.validate("connectionGetDtoInType", dtoIn);

    // write to uuAppErrorMap result of validation
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.CODE,
      Errors.Get.InvalidDtoIn
    );

    // load joke from database by id from dtoIn
    let connection = await this.dao.get(awid, dtoIn.id);

    // if joke does not exist (was not found in database)
    if (!connection) {
      throw new Errors.Get.connectionDoesNotExist({ uuAppErrorMap }, { connectionId: dtoIn.id });
    }

    // return found joke
    return {
      ...connection,
      uuAppErrorMap,
    };
  }

  async remove(awid, dtoIn, uuAppErrorMap = {}) {
    // validation of dtoIn - input of cmd
    let validationResult = this.validator.validate("connectionRemoveDtoInType", dtoIn);

    // write to uuAppErrorMap result of validation
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.CODE,
      Errors.Get.InvalidDtoIn
    );

    // load joke from database by id from dtoIn
    let connection = await this.dao.get(awid, dtoIn.id);

    // if joke does not exist (was not found in database)
    if (!connection) {
      throw new Errors.Remove.connectionDoesNotExist({ uuAppErrorMap }, { connectionId: dtoIn.id });
    }

    try {
      // call dao method remove to delete your joke from database
      await this.dao.remove({ ...dtoIn, awid });
    } catch (e) {
      // throw an error if something goes wrong during removing joke from database
      throw new Errors.Create.connectionCreateFailed({ uuAppErrorMap }, e);
    }

    return {
      uuAppErrorMap,
    };
  }
}

module.exports = new connectionsAbl();
