google.load("visualization", "1", {packages: ["corechart"]});

//once the library is loaded--run a function
google.setOnLoadCallback(drawChart);

function drawChart(){
    //draw the chart
    //create a data table using an array
    var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
     ["Work", 8],
        ["Eat", 1],
        ["Commute", 0],
        ["Drink Frappes", 12],
        ["Sleep", 5]
    ]);

    var chart = new google.visualization.PieChart(document.getElementById("piechart"));

    //draw the chart
    chart.draw(data);
}