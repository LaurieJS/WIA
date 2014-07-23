var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;


$(document).ready(function(){
    var $chartArea = document.querySelector(".chart-area");

    window.chartHeight = Number($($chartArea).height());
    window.barWidth = $(".chart-area .chart-bar").width();
    window.highestYlabel = Number($('.chart-y-axis p').first().html());
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
    window.chartScale = chartHeightArea / window.highestYlabel;
    window.barSpacing = Number($($chartArea).attr('bar-spacing'));
    positionBars();


});//end of the .ready function

function positionBars(){
    $( ".chart-area .chart-bar").each(function(index){

        var barPosition = (window.barWidth * index) + (index * window.barSpacing) + window.barSpacing;
        $(this).css("left", barPosition + "px");
        $(this).html('<p>' + $(this).attr("bar-value") + '</p>');
        $(".chart-x-axis").append('<p style="left: '+(barPosition - (window.barWidth/2)) +'px;">' + $(this).attr('label') + '</p>');

        var barValue = Number($(this).attr("bar-value"));

        if(barValue > window.maxValue){
            window.maxValue = barValue;
            window.valueMultiplier = window.maxValue/window.highestYlabel;

        }//end of the if statement

    });//end of each function

    animateChart();
}//end of positionBars function

function animateChart(index){
    $(".chart-area .chart-bar").each(function(){

        var revisedValue = Number($(this).attr("bar-value") * window.chartScale);
        var newDelay = 125 * index;
        $(this).delay(newDelay).animate({height: revisedValue}, 1000, function(){
            $(this).children("p").delay(100).fadeIn(250);

        });//called a callback function...end of the this delay animate

    });//end of the each function
}//end of animateChart function