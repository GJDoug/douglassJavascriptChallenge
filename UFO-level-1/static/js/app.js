// from data.js
var tableData = data;

// YOUR CODE HERE!
 
var tbody = d3.select("tbody");

//Populate and display UFO-Data
var filterData = 0;
ufos = data
console.log(data);

data.forEach((ufoSighting) => {var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {var cell = tbody.append("td");
    cell.text(value);
    });
});

//Provide access & enable filter button
var submit = d3.select("#filter-btn");

submit.on("click", function () 
{d3.event.preventDefault();
	var addDate = d3.select("#datetime");
	var sightDate = addDate.property("value");
	var filteredData = ufos.filter(ufo => ufo.datetime === sightDate);
	buildTable(filteredData);
});

//Filter Table-Data on "datetime" & format
function buildTable(filterData) 
{tbody.html("");
    filterData.forEach((ufoSighting) => {var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {var cell = tbody.append("td");
    cell.text(value);
        });
    });
}