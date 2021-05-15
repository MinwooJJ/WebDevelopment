const React = require("react");
const { useEffect, useRef, memo } = React;
const Td = require("./Td");

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      // first checking
      rowData === ref.current[0],
      rowIndex === ref.current[1],
      dispatch === ref.current[2]
    );

    // console.log(cellData, ref.current[3]); // second checking

    ref.current = [rowData, rowIndex, dispatch];
  }, [rowData, rowIndex, dispatch]);

  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            key={i}
            cellIndex={i}
            rowIndex={rowIndex}
            dispatch={dispatch}
            cellData={rowData[i]}
          >
            {""}
          </Td>
        ))}
    </tr>
  );
});

module.exports = Tr;
