import ACTIONS from "./Action";

export default function OperationButton({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.OPRATION, payload: { opration: digit } })
      }
    >
      {digit}
    </button>
  );
}
