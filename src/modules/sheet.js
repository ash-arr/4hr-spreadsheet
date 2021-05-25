import React from "react";
import SheetDataContext from "../app/sheet-data-context.js";
import Cell from "./cell.js";
import { getListOfKeys, getColRowKey } from "../utils/key-utils.js";
import "./sheet.css";

// TODO - decouple from sheet.css
const DEFAULT_COLUMNS_NUM = 10;
const DEFAULT_ROWS_NUM = 2;

const Sheet = () => {
  const { sheetDataState, sheetDataActions } =
    React.useContext(SheetDataContext);
  const keys = getListOfKeys(DEFAULT_COLUMNS_NUM, DEFAULT_ROWS_NUM);
  return (
    <div className="sheet-container">
      {keys.map(({ col, row }) => {
        return <Cell key={getColRowKey({ col, row })} row={row} col={col} />;
      })}
    </div>
  );
};

export default Sheet;
