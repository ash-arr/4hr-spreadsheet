const CAPITAL_LETTER_CHAR_CODE_OFFSET = 64;
const NUM_OF_CHARACTERS = 26;

/**
 * Returns character representation of column number, from 'A' to 'ZZ'
 */
const getColKey = (columnNumber) => {
  if (columnNumber > NUM_OF_CHARACTERS * (NUM_OF_CHARACTERS + 1)) {
    // TODO - enforce limitations (e.g. Google Sheets does not exceed 'ZZZ')
    return null;
  }
  const charNum = columnNumber % NUM_OF_CHARACTERS || NUM_OF_CHARACTERS;
  let extraCharNum = Math.floor(columnNumber / NUM_OF_CHARACTERS);
  // Handle 'Z' case
  if (columnNumber % NUM_OF_CHARACTERS === 0) extraCharNum--;
  const char = String.fromCharCode(charNum + CAPITAL_LETTER_CHAR_CODE_OFFSET);
  const extraChar = extraCharNum
    ? String.fromCharCode(extraCharNum + CAPITAL_LETTER_CHAR_CODE_OFFSET)
    : "";

  return extraChar + char;
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
