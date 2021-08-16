import { useRef, useEffect, useState } from 'react';
import './styles.css';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';

// react & D3를 같이 사용하기 위하여 SVG dom에 접근해야 함
function BarChart() {
  const [data, setDate] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef(); // useRef hook을 사용하여 dom에 접근, 연결
  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(data.map((value, index) => index)) // scaleBand가 5개의 같은 너비를 갖는 축을 만든다, arbitray value( 정확한 값을 넣어야 함)
      .range([0, 300])
      .padding(0.5); // bar에 padding 적용

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]); // y축 시작점을 top에서 bottom으로 변경

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(['green', 'orange', 'red'])
      .clamp(true); // weight에 따른 color 변경, 0~75 그린 / 75~150 레드

    const xAxis = axisBottom(xScale).ticks(data.length); // tick 갯수 설정
    svg.select('.x-axis').style('transform', 'translateY(150px)').call(xAxis); // x-axis 생성 후 표에 적용

    const yAxis = axisRight(yScale);
    svg.select('.y-axis').style('transform', 'translateX(300px)').call(yAxis); // x-axis 생성 후 표에 적용

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('transform', 'scale(1,-1)') // transform은 svg의 origin의 relative하게 적용되어 바가 위로 올라감, 위아래를 flip하는 것
      .attr('x', (value, index) => xScale(index))
      .attr('y', -150) // y 좌표 값을 -150으로 해줘야 y의 위치가 맞음
      .attr('width', xScale.bandwidth()) // bar의 크기를 전체적으로 같도록 나눠주는 부분
      .transition()
      .attr('fill', colorScale) // transition 효과를 적용하기 위해 아래로 이동
      .attr('height', (value) => 150 - yScale(value)); // Animation을 적용하고 싶은 부분은 transition 아래에 정의
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

export default BarChart;
