function CalcState({ prev, current, opration }) {
  let prevValue = parseFloat(prev);
  let CurrentValue = parseFloat(current);
  if (prevValue == null || CurrentValue == null) {
    return { prevValue, CurrentValue, opration };
  }
  if (isNaN(CurrentValue) || isNaN(prevValue)) return "";

  switch (opration) {
    case "+":
      return prevValue + CurrentValue;

    case "-":
      return prevValue - CurrentValue;
      break;

    case "/":
      return prevValue / CurrentValue;

    case "*":
      return prevValue / CurrentValue;
    default:
      return prevValue;
      break;
  }
}
export default CalcState;
