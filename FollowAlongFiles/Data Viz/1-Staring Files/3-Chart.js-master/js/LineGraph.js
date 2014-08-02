$(function() { 
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var lineChartData = {
        labels: ["PB n J", "Hot Dogs", "Top Ramen", "Grilled Cheese", "Hot Pockets", "Mac N Cheese", "Beans N Rice"],
        datasets:[
            {
                fillColor: "rgba(166, 209, 122, .5)",
                strokeColor: "rgab(166, 209, 122, 1)",
                pointColor: "black",
                pointStrokeColor: "#fff",
                data:[1, 20, 40, 20, 60, 75, 40]

            }//data
        ]//labels


    };//line chart data

    var myLine = new Chart(ctx).Line(lineChartData);


		
});

