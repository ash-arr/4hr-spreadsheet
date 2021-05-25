import React, { useReducer } from "react";
import Context from "./sheet-data-context.js";

const initialState = {
  data: {},
};

const CELL_DATA_UPDATE = "CELL_DATA_UPDATE";

const reducer = (state, action) => {
  switch (action.type) {
    case CELL_DATA_UPDATE:
      const { row, col, data } = action.payload;
      // TODO -- convert to flat object
      return {
        ...state,
        data: {
          ...state.data,
          [col]: {
            ...state.data[col],
            [row]: data,
          },
        },
      };
  }
  return state;
};

const SheetDataProvider = ({ children }) => {
  const [sheetDataState, dispatch] = useReducer(reducer, initialState);

  const actions = {
    updateCell: ({ row, col, data }) => {
      dispatch({ type: CELL_DATA_UPDATE, payload: { row, col, data } });
    },
  };

  return (
    <Context.Provider
      value={{
        sheetDataState: sheetDataState,
        sheetDataActions: actions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SheetDataProvider;
