import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-[100px] space-x-4">
      <h1>Redux Counter</h1>

      <button
        className="px-10 py-2 bg-red-400 rounded-lg text-white font-bold"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className="font-bold">{count}</span>
      <button
        className="px-10 py-2 bg-green-400 rounded-lg text-white font-bold"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="px-10 py-2 bg-gray-400 rounded-lg text-white font-bold"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
