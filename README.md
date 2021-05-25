# 4-Hour Spreadsheet

This project is a demonstration of my current frontend abilities. The goal is to develop a spreadsheet prototype within a four-hour timeframe.

## Status

### To-do

- [ ] Improve sheet performance

  - [ ] Single cell update should not trigger rerender of all cells
  - [ ] Convert global store to flat object

- [ ] Parse the inputs with Formula Parser and display calculated values
  - [ ] Fix character column logic to fit with A1 notation
  - [ ] Update cells to be keyed by col-row combination, rather than separate columns and rows
  - [ ] Render formula bar

- [ ] Implement resizing of columns and rows
- [ ] Persist the state locally using IndexedDB API

- [ ] Improve sheet stability
  - [ ] Enforce max number of columns and rows

### Done ✓

- [x] Render cells

  - [x] Determined by defined number of columns and rows
  - [x] Cells should be editable and store their values in memory
  - [x] Columns and rows should render keyed headers

- [x] Initialize react app
