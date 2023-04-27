import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const Historychart = ({ options }) => 
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
export default Historychart