const CAPITAL_LETTER_CHAR_CODE_OFFSET = 64;

const getColKey = c => {
    return String.fromCharCode(c + CAPITAL_LETTER_CHAR_CODE_OFFSET);
}

export const getListOfKeys = (totalColumns, totalRows) => {
    const list = [];
    for (let c = 1; c <= totalColumns; c++) {
        const col = getColKey(c);
        for (let r = 1; r <= totalRows; r++) {
            list.push({col: col, row:r})
        }
    }
    return list;
}

export const getColRowKey = ({col, row}) => col + row;