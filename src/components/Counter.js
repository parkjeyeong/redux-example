import { useCallback } from "react";
import Value from "./Value";
import Control from "./Control";

import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions';

function Counter() {
  const dispatch = useDispatch();
  const storeNumber = useSelector(state => state.counter.number);
  const storeColor = useSelector(state => state.ui.color);

  const onPlus = useCallback(() => {
    dispatch(actions.increment());
  }, [dispatch]);

  const onSubtract = useCallback(() => {
    dispatch(actions.decrement());
  }, [dispatch]);

  function setRandomColor() {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    dispatch(actions.setColor(color));
  }

  const color = storeColor;
  const style = {
    background: `rgb(${ color[0] }, ${ color[1] }, ${ color[2] })`
  }

  return (
    <div style={ style }>
      <Value number={ storeNumber } />
      <Control onPlus={ onPlus }
               onSubtract={ onSubtract }
               onRandomizeColor={ setRandomColor } />
    </div>
  )
}

export default Counter;