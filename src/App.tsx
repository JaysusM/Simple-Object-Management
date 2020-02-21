import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addObject, deleteObject, editObject, addRelationship, deleteRelationship } from "./actions/object/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(addObject({ name: "a", description: "b", type: "c", relationships: [] }))}>
        Boton
      </button>
      <button onClick={() => dispatch(deleteObject(0))}>
        Boton
      </button>
      <button onClick={() => dispatch(editObject({ id: 1, name: "aaa", description: "b", type: "c", relationships: [] }))}>
        Boton
      </button>
      <button onClick={() => dispatch(addRelationship(1,2))}>
        Boton
      </button>
      <button onClick={() => dispatch(deleteRelationship(1,2))}>
        Boton
      </button>
    </div>
  );
}

export default App;
