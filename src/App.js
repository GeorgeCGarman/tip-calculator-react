import Form from "./components/Form"
import Display from "./components/Display"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container" style={{ display: "flex" }}>
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App
