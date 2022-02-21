import React, { useState } from "react";
import './App.css';

function Todolist({ addTodo }) {

    const [value, setItem] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setItem("");
    };
    return (
        <div>
            <h1> My To Do List</h1>
            <div>
                Add a Item.....
                <br />
                <input
                    type="text"
                    placeholder="Type item here"
                    value={value}
                    onChange={e => setItem(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    type="submit">
                    submit
                </button>
            </div>
        </div>
    );
}
function App() {
    const [lista, setLista] = useState([
        {

        }
    ]);
    const addTodo = text => {
        const nuevalista = [...lista, { text }];
        setLista(nuevalista)
    };

    const removeTodo = index => {
        const nuevalista = [...lista];
        nuevalista.splice(index, 1);
        setLista(nuevalista);
    };

    return (
        <div className="app">
            <div className="container">
                <Todolist addTodo={addTodo} />
                <div>
                    {lista.map((lista, index) => (
                        <li >
                                {lista.text}
                                <button className="btn btn-floating"
                                    onClick={() => removeTodo(index)}>
                                    <i class="material-icons">X</i>
                                </button>
                          
                        </li>
                    ))}
                </div>
            </div>

        </div>

    )
};

export default App;




