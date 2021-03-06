export const getSheetContainer = numColumns => {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns + 1}, 100px)`,
        gap: "0px",
        gridAutoRows: "auto"
    }
}