'use client';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

import { DonutChartProps, CustomLabelProps } from '../dashboard/types';

const POSITIVE_COLORS = ['#6ee7b7', '#22c55e'];
const NEGATIVE_COLORS = ['#fdba74', '#ea580c'];

const CustomLabel: React.FC<CustomLabelProps> = (props) => {
  const { viewBox, value } = props;

  return (
    <svg
      className='recharts-text recharts-label'
      textAnchor='middle'
      dominantBaseline='central'
    >
      <text x={viewBox?.cx} y={viewBox?.cy} fill='#3d405c'>
        <tspan dy='0em' alignmentBaseline='middle' fontSize='10'>
          {value}
        </tspan>
      </text>
    </svg>
  );
};

const DonutChart: React.FC<DonutChartProps> = (props) => {
  const { count, total } = props;
  const remainder = total - count;
  const data = [{ value: remainder }, { value: count }];
  const isPositive = count > remainder;
  const currentPercent = ((count / total) * 100).toFixed(0);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={25}
          outerRadius={35}
          dataKey='value'
        >
          <Label
            width={30}
            position='center'
            content={<CustomLabel value={`${currentPercent}%`} />}
          />
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                isPositive
                  ? POSITIVE_COLORS[index % POSITIVE_COLORS.length]
                  : NEGATIVE_COLORS[index % NEGATIVE_COLORS.length]
              }
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
