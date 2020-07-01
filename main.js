var columnDefs = [
  {headerName: "#", field: "number"},
  {headerName: "Error Message", field: "errMsg"},
  {headerName: "Sal", field: "sal"},
  {headerName: "Edit", field: "edit"},
  {headerName: "On/Off", field: "activate"},
  {headerName: "Test", field: "test"},
  {headerName: "Status", field: "status"}
];
    
// specify the data
var rowData = [
  {number: "9966-0", errMsg: "Lock Transmit 1", sal: 223, edit: "Edit", activate: "Activate", test: "Test", status: ""},
  {number: "9977-0", errMsg: "Lock Transmit 2", sal: 2, edit: "Edit", activate: "Activate", test: "Test", status: ""},
  {number: "9988-0", errMsg: "Lock Transmit 3", sal: 3, edit: "Edit", activate: "Activate", test: "Test", status: "Publish"},
];
    
// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

