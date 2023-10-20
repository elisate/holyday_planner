import React from "react";
import '../Dashboard/chat.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Cross,
} from "recharts";

const data = [
  {
    name: "BOOKED TOURS",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "NUMBER OF TOURS",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "AMOUNT",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "TOURS VISTED",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  
];

// using Customized gives you access to all relevant chart props
const CustomizedCross = (props) => {
  const { width, height, stroke, fill, formattedGraphicalItems } = props;
  console.log(props);
  // get first series in chart
  const firstSeries = formattedGraphicalItems[0];
  // get any point at any index in chart
  const secondPoint = firstSeries?.props?.points[1];

  // render custom content using points from the graph
  return (
    <Cross
      y={secondPoint?.y}
      x={secondPoint?.x}
      top={5}
      left={50}
      height={height}
      width={width}
      stroke={stroke ?? "#000"}
      fill={fill ?? "none"}
    />
  );
};

const Dashboardpage = () => {
  return (
    <div className="charts">
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Customized component={CustomizedCross} />
      </LineChart>
    </ResponsiveContainer></div>
  );
};
export default Dashboardpage;
