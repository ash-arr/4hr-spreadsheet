const CAPITAL_LETTER_CHAR_CODE_OFFSET = 64;

const getColKey = (c) => {
  return String.fromCharCode(c + CAPITAL_LETTER_CHAR_CODE_OFFSET);
};

/**
 * Returns object directing how cells within a sheet will be rendered
 * If object contains "header", then render it as text
 * Else object will contain "row" and "col" and will be rendered as an editable cell
 */
export const getListOfKeys = (totalColumns, totalRows) => {
  const list = [{ header: "" }];

  for (let c = 1; c <= totalColumns; c++) {
    // Build column headers
    list.push({ header: getColKey(c) });
  }
  for (let r = 1; r <= totalRows; r++) {
    for (let c = 1; c <= totalColumns; c++) {
      if (c === 1) {
        // Build row headers
        list.push({ header: r });
      }
      const col = getColKey(c);
      list.push({ col: col, row: r });
    }
  }
  return list;
};

// Single-key representation of a cell
export const getColRowKey = ({ col, row }) => col + row;
