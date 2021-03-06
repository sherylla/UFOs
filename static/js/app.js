// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

function updateFilters() {
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  //Grab filter value from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  
  
  if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
      filters.datetime = date;
  };
  
  if (city) {
      filteredData = filteredData.filter(row => row.city === city);
      filters.city = city;
   };
    
  if (state) {
      filteredData = filteredData.filter(row => row.state === state);
      filters.state = state;
     
  };
    
  if (country) {
        filteredData = filteredData.filter(row => row.country === country);
        filters.country = country;
   };
    
  if (shape) {
        
      filteredData = filteredData.filter(row => row.shape === shape);
      filters.shape = shape;
   };

   filterTable();
  }
function filterTable() {

  //Set the filtered data to the table

  //Loop through all of the filters and keep any data that matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    row.append("td").text(value); 
})
  //Rebuild the table by calling the buildTable(); function created earlier.
  buildTable(filteredData);
};
//attach an event listener to pick up changes that are made to each filter.
d3.selectAll("#filter-btn").on("click", filterTable);

// Build the table when the page loads
buildTable(tableData);