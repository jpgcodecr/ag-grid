const columnDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" }
  ];
  
  // specify the data
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Chevrolet", model: "Boxster", price: 72000 },
    { make: "Hyunday", model: "Boxster", price: 72000 },
    { make: "Masseratti", model: "Boxster", price: 72000 },
    { make: "Ferrari", model: "Boxster", price: 72000 },
    { make: "Nissan", model: "Boxster", price: 72000 }
  ];
  
  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    //rowHeight: 80
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', () => {
      const gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  });