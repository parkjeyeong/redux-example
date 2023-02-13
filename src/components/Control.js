function Control(props) {

  return (
    <div>
      <button onClick={ props.onPlus }>+</button>
      <button onClick={ props.onSubtract }>-</button>
      <button onClick={ props.onRandomizeColor }>Randomize Color</button>
    </div>
  )
}

export default Control;