import { useReducer } from "react";
import ACTIONS from "./Action";
import DigitButton from "./DigetButton";
import OperationButton from "./OperationButton";
const intstate = { prev: "", current: "", opration: "" };

function reduce(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGET:
      // console.log(state);
      if (state.current == "0" && payload.digit == "0") return state;
      if (state.current.includes(".") && payload.digit == ".") return state;
      return { ...state, current: `${state.current}${payload.digit}` };
      break;
    case ACTIONS.OPRATION:
      break;
    case ACTIONS.CLEAR:
      return intstate;
      break;

    case ACTIONS.DELETE_DEGIT:
      let string = state.current;
      return { ...state, current: string.substr(0, string.length - 1) };
      break;
    default:
      return intstate;
  }
}
function App() {
  // const intstate = { prev: "", current: "", opration: "" };
  const [{ prev, current, opration }, dispatch] = useReducer(reduce, intstate);
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {prev} {opration}
        </div>
        <div className="current-operand">{current}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      {/* <button>Del</button> */}
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DEGIT })}>
        DEL
      </button>
      {/* <OperationButton digit="÷" dispatch={dispatch} /> */}
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      {/* <OperationButton digit="*" dispatch={dispatch} /> */}
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      {/* <OperationButton digit="+" dispatch={dispatch} /> */}
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton digit="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
}

export default App;
