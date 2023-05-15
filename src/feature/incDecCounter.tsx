import { increment, decrement } from "../slice/incDecSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

const incDec = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store: RootState) => store.incDecSlice.value);
  return (
    <>
      <h1>Increment-Decrement Counter</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>

        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <p>{counter}</p>
    </>
  );
};

export default incDec;
