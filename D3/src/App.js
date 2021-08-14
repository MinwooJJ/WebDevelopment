import { useRef, useEffect, useState } from 'react';
import './App.css';
import { select } from 'd3';

// react & D3를 같이 사용하기 위하여 SVG dom에 접근해야 함
function App() {
  const [data, setDate] = useState([25, 30, 45, 60, 20]);
  // useRef hook을 사용하여 dom에 접근, 연결
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter.append('circle').attr('class', 'new'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove()
      )
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'red');
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
