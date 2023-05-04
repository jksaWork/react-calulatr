import { useReducer } from "react";
import ACTIONS from "./Action";
import DigitButton from "./DigetButton";
import OperationButton from "./OperationButton";
import CalcState from "./ClacState";
// CalcState;
const intstate = { prev: null, current: "", opration: "" };

function reduce(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGET:
      // console.log(state);
      if (state.current == "0" && payload.digit == "0") return state;
      if (state.current.includes(".") && payload.digit == ".") return state;
      return { ...state, current: `${state.current}${payload.digit}` };
      break;
    case ACTIONS.OPRATION:
      // console.log(state);
      if (state.current == null && state.prev == null) {
        console.log("hello", state, state.current);
        return state;
      }
      if (state.prev == null) {
        // console.log("Hello");
        return {
          ...state,
          opration: payload.opration,
          prev: state.current,
          current: "",
        };
      }
      return {
        ...state,
        opration: payload.opration,
        prev: CalcState(state),
        current: "",
      };
      break;
    case ACTIONS.CLEAR:
      return intstate;
      break;

    case ACTIONS.DELETE_DEGIT:
      let string = state.current;
      return { ...state, current: string.substr(0, string.length - 1) };
      break;
    case ACTIONS.EVALUATE:
      if (state.current == null || state.prev == null) {
        return state;
      }
      return {
        ...state,
        opration: "",
        prev: "",
        current: CalcState(state),
      };
      break;

    default:
      return intstate;
  }
}

const NUMBER_FORMATE = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function PreOration(number) {
  return NUMBER_FORMATE.format(number);
}
// console.log(usFormat);

function App() {
  // const intstate = { prev: "", current: "", opration: "" };
  const [{ prev, current, opration }, dispatch] = useReducer(reduce, intstate);
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {PreOration(prev)} {opration ? `(${opration})` : ""}
        </div>
        <div className="current-operand">{PreOration(current)}</div>
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
      <OperationButton digit="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton digit="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton digit="+" dispatch={dispatch} />
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
