import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addition,
  subtraction,
  division,
  multiplication,
} from "../slice/calSlice";
import { RootState } from "../store/store";

const Cal = () => {
  const dispatch = useDispatch();
  const calResult = useSelector((store: RootState) => store.calSlice.calculate);

  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const setnumber = Number(event.target.value);
    if (event.target.name === "a") {
      setA(setnumber);
      console.log(a);
    } else if (event.target.name === "b") {
      setB(setnumber);
      console.log(b);
    }
  };
  return (
    <>
      <h1>Increment-Decrement Counter</h1>
      <div>
        <input
          type="number"
          name="a"
          value={a}
          onChange={handleInputChange}
        ></input>
        <input
          type="number"
          name="b"
          value={b}
          onChange={handleInputChange}
        ></input>
      </div>

      <div>
        <button onClick={() => dispatch(addition({ a: a, b: b }))}>Add</button>
        <button onClick={() => dispatch(subtraction({ a: a, b: b }))}>
          Sub
        </button>
        <button onClick={() => dispatch(division({ a: a, b: b }))}>Div</button>
        <button onClick={() => dispatch(multiplication({ a: a, b: b }))}>
          Mul
        </button>
      </div>

      <p>{calResult}</p>
    </>
  );
};

export default Cal;
