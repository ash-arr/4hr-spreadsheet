# 4-Hour Spreadsheet

This project is a demonstration of my current frontend abilities. The goal is to develop a spreadsheet prototype within a four-hour timeframe.

## Status

### To-do

- [ ] Improve sheet performance

  - [ ] Single cell update should not trigger rerender of all cells
  - [ ] Convert global store to flat object

- [ ] Parse the inputs with Formula Parser and display calculated values

  - [ ] Render formula bar

- [ ] Implement resizing of columns and rows
- [ ] Persist the state locally using IndexedDB API

### Done ✓

- [x] Render cells

  - [x] Determined by defined number of columns and rows
  - [x] Cells should be editable and store their values in memory
  - [x] Columns and rows should render keyed headers

- [x] Initialize react app
