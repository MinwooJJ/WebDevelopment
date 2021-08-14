import { useRef, useEffect, useState } from 'react';
import './App.css';
import { select, line, curveCardinal } from 'd3';

// react & D3를 같이 사용하기 위하여 SVG dom에 접근해야 함
function App() {
  const [data, setDate] = useState([25, 30, 45, 60, 20, 65, 75]);
  // useRef hook을 사용하여 dom에 접근, 연결
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(curveCardinal);
    // svg
    //   .selectAll('circle')
    //   .data(data)
    //   .join('circle')
    //   .attr('r', (value) => value)
    //   .attr('cx', (value) => value * 2)
    //   .attr('cy', (value) => value * 2)
    //   .attr('stroke', 'red');
    svg
      .selectAll('path')
      .data([data])
      .join('path')
      .attr('d', (value) => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);
  return (
    <>
      <svg ref={svgRef}></svg>
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

export default App;
