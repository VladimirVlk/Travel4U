/* eslint-disable */

const initDtoInType = shape({
  uuAppProfileAuthorities: uri().isRequired("uuBtLocationUri"),
  uuBtLocationUri: uri(),
  name: uu5String(512),
  sysState: oneOf(["active", "restricted", "readOnly"]),
  adviceNote: shape({
    message: uu5String().isRequired(),
    severity: oneOf(["debug", "info", "warning", "error", "fatal"]),
    estimatedEndTime: datetime(),
  }),
});

const connectionCreateDtoInType = shape({
  name: string(50).isRequired(),
  text: string(500).isRequired()
});

const connectionGetDtoInType = shape({
  id: id().isRequired(),
});

const connectionUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(50),
  text: string(500)
});

const connectionRemoveDtoInType = shape({
  id: id().isRequired(),
});
