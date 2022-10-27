import "./Form.css"

const Form = () => {
  return (
    <div className="Form">
      <h4>Bill</h4>
      <input name="billInput" type="number"></input>
      <h4>selectTip</h4>
      <div
        className="selectTip"
        // style={{ display: "grid", gridTemplateColumns: "repeat (3, 1fr)" }}
      >
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="number"></input>
      </div>
      <h4>Number of people</h4>
      <input type="number"></input>
    </div>
  )
}

export default Form
