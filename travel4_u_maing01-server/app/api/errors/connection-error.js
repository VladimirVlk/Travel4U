"use strict";
const connectionUseCaseError = require("./connection-main-use-case-error.js");
const connection_ERROR_PREFIX = `${connectionUseCaseError.ERROR_PREFIX}connection/`;

const Init = {
  UC_CODE: `${connection_ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  CreateAwscFailed: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },
};

const Create = {
  UC_CODE: `${connection_ERROR_PREFIX}create/`,

  connectionCreateFailed: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}connectionCreateFailed`;
      this.message = "Creating connection by DAO method create failed.";
    }
  },
};

const Update = {
  UC_CODE: `${connection_ERROR_PREFIX}update/`,

  connectionDoesNotExist: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}connectionDoesNotExist`;
      this.message = "connection with given id does not exist.";
    }
  },
};

const Get = {
  UC_CODE: `${connection_ERROR_PREFIX}get/`,

  connectionDoesNotExist: class extends connectionsUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}connectionDoesNotExist`;
      this.message = "connection with given id does not exist.";
    }
  },
};

const Remove = {
  UC_CODE: `${connection_ERROR_PREFIX}remove/`,

  connectionDoesNotExist: class extends connectionUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Remove.UC_CODE}connectionDoesNotExist`;
      this.message = "connection with given id does not exist.";
    }
  },
};

module.exports = {
  Init,
  Create,
  Update,
  Get,
  Remove,
};
