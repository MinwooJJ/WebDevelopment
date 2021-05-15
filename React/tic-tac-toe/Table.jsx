const React = require("react");
const { memo } = React;
const Tr = require("./Tr");

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
};
module.exports = Table;
