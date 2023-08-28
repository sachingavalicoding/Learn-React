import { useState } from "react"

const InputBox = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const addTodo = () => {
        if(!input){

        }
        else{

            setTodoList([...todoList, input]);
            setInput('');
        }
    }
    return (
        <>

            <div className="input__container">
                <input type="text" name="input" value={input} id="input" placeholder=' New Todo ....' onChange={(e) => setInput(e.target.value)} />
                <button className='btn btn-add' onClick={addTodo}> + </button>
            </div>

            <div>
                <ul className="todo__container">
                   {
                    todoList.map((todo) =>{
                        return <div className="todo-item">
                            
                         <li >
                            {todo}
                           
                        </li>
                        <button > - </button>
                        </div>
                    })
                   }
                </ul>
            </div>
        </>

    )
}

export default InputBox