import ACTIONS from "./Action";

export default function OperationButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.OPRATION, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
