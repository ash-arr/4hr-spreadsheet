import React, { useState } from "react";

import SheetDataContext from "../app/sheet-data-context.js";
const Cell = ({ col, row }) => {
  const { sheetDataState, sheetDataActions } =
    React.useContext(SheetDataContext);

  const handleOnChange = (e) => {
    sheetDataActions.updateCell({
      row: row,
      col: col,
      data: e.target.value,
    });
  };
  const data = sheetDataState.data[col]?.[row] || "";
  return <input type="text" value={data} onChange={handleOnChange} />;
};

export default React.memo(Cell);
