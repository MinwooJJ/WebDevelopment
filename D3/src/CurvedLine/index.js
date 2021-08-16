import { useRef, useEffect, useState } from 'react';
import './styles.css';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from 'd3';

// react & D3를 같이 사용하기 위하여 SVG dom에 접근해야 함
function CurvedLine() {
  const [data, setDate] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef(); // useRef hook을 사용하여 dom에 접근, 연결
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear() // visualable하게 하기 위해서 pixel에 따른 값을 확장시키는 부분
      .domain([0, data.length - 1]) // 전체 x축 domain 길이
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 75]).range([150, 0]); // y축 시작점을 top에서 bottom으로 변경

    const xAxis = axisBottom(xScale)
      .ticks(data.length) // tick 갯수 설정
      .tickFormat((index) => index + 1); // tick에 나타나는 숫자 설정
    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis); // x-axis 생성 후 표에 적용

    const yAxis = axisRight(yScale);
    svg.select('.y-axis').style('transform', 'translateX(300px)').call(yAxis); // x-axis 생성 후 표에 적용

    const myLine = line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(curveCardinal);
    svg
      .selectAll('.line') // ?
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);
  return (
    <>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <button onClick={() => setDate(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setDate(data.filter((value) => value < 35))}>
        Filter data
      </button>
    </>
  );
}

export default CurvedLine;
