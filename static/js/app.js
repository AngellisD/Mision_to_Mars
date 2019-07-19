// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(table) {

    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach(val => {
            var cell = row.append("td");
            cell.text(val);

        })
    })
}

var button = d3.select("#filter-btn")

button.on("click", handleClick)

function handleClick() {

    d3.event.preventDefautl();
    
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    console.log(date);

    if (date) {

        var filterData = filterData.filter(row => row.datetime === date);

    }

    buildTable(filterData);

 }

 buildTable(tableData);