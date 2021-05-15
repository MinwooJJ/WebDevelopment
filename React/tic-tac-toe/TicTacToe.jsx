const React = require("react");
const { useEffect, useState, useCallback, useReducer } = React;
const Table = require("./Table");

// initialize state values
const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

const SET_WINNER = "SET_WINNER";
const CLICK_CELL = "CLICK_CELL";
const CHANGE_TURN = "CHANGE_TURN";
const RESET_GAME = "RESET_GAME";

// Define how you want to change states
const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };

    case CLICK_CELL: {
      // immutability
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }

    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }

    case RESET_GAME: {
      return {
        ...state,
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
    }

    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("O");
  // const [tableData, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  useEffect(() => {
    const [row, cell] = recentCell;

    if (row < 0) {
      return;
    }

    let win = false;
    if (
      tableData[row][0] === turn &&
      tableData[row][1] === turn &&
      tableData[row][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][cell] === turn &&
      tableData[1][cell] === turn &&
      tableData[2][cell] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][0] === turn &&
      tableData[1][1] === turn &&
      tableData[2][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][2] === turn &&
      tableData[1][1] === turn &&
      tableData[2][0] === turn
    ) {
      win = true;
    }

    if (win) {
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      // 무승부 검사
      let all = true;
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });

      if (all) {
        dispatch({ type: RESET_GAME });
      } else {
        // Td에 넣었으나 비동기 문제로 useEffect문으로 이동
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table tableData={tableData} dispatch={dispatch} />
      {winner && <div>{winner} win!</div>}
    </>
  );
};

module.exports = TicTacToe;
