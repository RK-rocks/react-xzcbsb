import React from 'react';
import {Bar} from 'react-chartjs-2';



export default class ColumnChart extends React.Component {
  state = {
  labels: [],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: '#947e1b',
      data: []
    }
  ]
}

getFormatedDateArray = (data) => {
  data.map((value,index)=>{
    this.state.labels.push(value.date)
    this.state.datasets[0].data.push(value.link_earned)
  })
  
}
  constructor(props){
    super(props)
    console.log("in chart")
    this.getFormatedDateArray(props.data.monthly_reports)
    console.log(props)
  }
  render() {
    return (
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Gas Espense of FY 2019-2020',
              fontSize:13,
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      
    );
  }
}