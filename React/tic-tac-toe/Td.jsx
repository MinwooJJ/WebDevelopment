const React = require("react");
const { useCallback, useEffect, useRef, memo } = React;
// const { CLICK_CELL, CHANGE_TURN } = require("./TicTacToe");

const CLICK_CELL = "CLICK_CELL";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  // 불필요한 render를 막기위한 test 작업
  // Ref는 계속해서 바뀌지만 props중에 바뀌지 않는 경우가 있는 것을 파악하기 위함
  // 바뀌는것이 있다면 그것 때문에 re-reder가 발생하는 것
  // 문제가 없다는 것을 발견 후 부모로 가서 확인
  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(
  //     // first checking
  //     rowIndex === ref.current[0],
  //     cellIndex === ref.current[1],
  //     dispatch === ref.current[2],
  //     cellData === ref.current[3]
  //   );

  //   console.log(cellData, ref.current[3]); // second checking

  //   ref.current = [rowIndex, cellIndex, dispatch, cellData];
  // }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

module.exports = Td;
