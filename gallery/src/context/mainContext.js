import React from "react";

const mainContext = React.createContext({
  state: [],
  dispatch: () => {},
});

export default mainContext;
