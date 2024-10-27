import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    const {data, options} = props;
    if (Object.keys(data).length <= 0) return <></>;
  return (
    <div>
        <Line data={data} options={options} />
    </div>
  )
}

export default LineChart