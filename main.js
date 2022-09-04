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
    { make: "Chevrolet this is an example of row with a lot of text, it will grow dinamically", model: "Boxster", price: 72000 },
    { make: "Hyunday", model: "Boxster", price: 72000 },
    { make: "Masseratti", model: "Boxster this is an example with lots of text on it too but instead this one have much more lines", price: 72000 },
    { make: "Ferrari", model: "Boxster", price: 72000 },
    { make: "Nissan", model: "Boxster", price: 72000 }
];

// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
        flex: 1,
        cellClass: 'cell-wrap-text',
        autoHeight: true
    },
    getRowHeight: function(params) {
        const valuesArr = Object.values(params.data);
        const longestValue = longest_string(valuesArr.filter(el => typeof el === 'string'))[0];
        const maxLength = longestValue.length;
        // Reduce height only to the items with small text
        if (maxLength < 50) {
            return 25;
        }
    }
};

// Method to find the longest element in array
function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});



