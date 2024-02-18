'use client';
import { useState } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';

import { WorkOrderStatus } from '../dashboard/types';

const COLORS = ['#22c55e', '#ea580c', '#dc2626'];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} fontSize='10' textAnchor='middle' fill='#999'>
        <tspan x={cx} dy='0em' alignmentBaseline='middle'>
          {payload.name}
        </tspan>
        <tspan
          x={cx}
          fill='#000'
          dy='1.5em'
          fontWeight='bold'
          alignmentBaseline='middle'
        >
          {payload.count}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className='grid w-[200px] divide-y'>
      {payload.map((item: any, index: number) => {
        return (
          <div key={index} className='flex items-center gap-2 py-1.5'>
            <div
              style={{ backgroundColor: item.color }}
              className='w-3 h-3 rounded-full'
            ></div>
            <div className='text-xs'>{item.value}</div>
            <div className='text-xs font-semibold ml-auto'>
              {item.payload.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PieInformation: React.FC<{ data: WorkOrderStatus[] }> = (props) => {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndexHandler = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={50}
          outerRadius={80}
          dataKey='count'
          onMouseEnter={activeIndexHandler}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          content={renderLegend}
          layout='vertical'
          verticalAlign='middle'
          align='right'
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieInformation;
