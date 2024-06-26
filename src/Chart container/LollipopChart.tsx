import React from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_more from 'highcharts/highcharts-more';
import highchartsDumbbell from 'highcharts/modules/dumbbell';
import highchartsLollipop from 'highcharts/modules/lollipop';

// init the module
HC_more(Highcharts);
highchartsDumbbell(Highcharts);

highchartsLollipop(Highcharts);

export const LollipopChart: React.FC = () => {
  const config = {
    chart: {
      type: 'lollipop'
    },

    subtitle: {
      text: '2018'
    },

    title: {
      text: 'Top 10 Countries by Population'
    },

    xAxis: {
      type: 'category'
    },

    yAxis: {
      title: {
        text: 'Population'
      }
    },

    series: [
      {
        name: 'Population',
        data: [
          {
            name: 'China',
            low: 1427647786
          },
          {
            name: 'India',
            low: 1352642280
          },
          {
            name: 'United States',
            low: 327096265
          },
          {
            name: 'Indonesia',
            low: 267670543
          },
          {
            name: 'Pakistan',
            low: 212228286
          },
          {
            name: 'Brazil',
            low: 209469323
          },
          {
            name: 'Nigeria',
            low: 195874683
          },
          {
            name: 'Bangladesh',
            low: 161376708
          },
          {
            name: 'Russia',
            low: 145734038
          },
          {
            name: 'Mexico',
            low: 126190788
          }
        ]
      }
    ]
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={config} />
    </>
  );
};
