export const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "dark" ? "white" : "dark";
      return { ...state, theme };
  }
};

export const initialState = {
  theme: "dark",
  colorText: "white",
};
