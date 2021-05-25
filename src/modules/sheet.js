import React from "react";
import SheetDataContext from "../app/sheet-data-context.js";
import Cell from "./cell.js";
import { getListOfKeys, getColRowKey } from "../utils/key-utils.js";
import { getSheetContainer } from "../utils/style-utils.js";

const DEFAULT_COLUMNS_NUM = 10;
const DEFAULT_ROWS_NUM = 20;

const Sheet = () => {
  const { sheetDataState, sheetDataActions } =
    React.useContext(SheetDataContext);
  const keys = getListOfKeys(DEFAULT_COLUMNS_NUM, DEFAULT_ROWS_NUM);
  return (
    <div style={getSheetContainer(DEFAULT_COLUMNS_NUM)}>
      {keys.map(({ col, row, header }) => {
        return typeof header !== "undefined" ? (
          <div>{header}</div>
        ) : (
          <Cell key={getColRowKey({ col, row })} row={row} col={col} />
        );
      })}
    </div>
  );
};

export default Sheet;
