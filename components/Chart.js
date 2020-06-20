import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 10;

    // Add data
chart.data = [{
  "category": "January",
  "value": 3.5
},{
  "category": "February",
  "value": 3.5
},{
  "category": "March",
  "value": 3.5
},{
  "category": "April",
  "value": 3.5
},{
  "category": "May",
  "value": 3.5
},{
  "category": "Jun",
  "value": 3.5
},{
  "category": "July",
  "value": 3.5
}, {
  "category": "August",
  "value": 6
},{
  "category": "September",
  "value": 3.5
},{
  "category": "October",
  "value": 3.5
},{
  "category": "November",
  "value": 3.5
}, {
  "category": "December",
  "value": 4.2
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "category";
series.name = "Sales";
series.columns.template.stroke = am4core.color("#ff0000");
series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ marginRight: 'auto', marginLeft: 'auto',title:'Hello', padding: '10px', width: "100%", height: '400px' }}></div>
    );
  }
}

export default App;