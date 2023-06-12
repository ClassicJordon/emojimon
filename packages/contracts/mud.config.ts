import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    // TODO
  },
  tables: {
    Moveable: "bool",
    Player: "bool",
    Position: {
      dataStruct: false,
      schema: {
        x: "uint32",
        y: "uint32",
      },
    },
  },
});
