
import { useState } from "react"
import "./post.css"


const Post = () => {
    const [tasks, setTask] = useState('')
    const [addtask, setAddtask] = useState([])



    const Add = () => {
        if (tasks.length > 3) {
            setAddtask([...addtask, tasks]);
            setTask('')

        } else {


        }

        ;
    }
    const del = (id) => {

        const updatedTask = addtask.filter((elem, ind) => {
            return ind !== id;
        });
        setAddtask(updatedTask)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="AddTask">
                        <div className="Title">
                            <h1>Task List</h1>
                        </div>
                        <input type="text" placeholder="Addtask" value={tasks}
                            onChange={(e) => setTask(e.target.value)}>

                        </input>
                        <button className="btn btn-warning" onClick={Add}> AddTask</button>
                        <div className="Tasks">
                            {
                                addtask.map((elem, ind) => {
                                    return (
                                        <div className="Created_Task" key={ind}>
                                            <div className="check">
                                                <input type="checkbox" aria-label="Checkbox for following text input" />
                                            </div>
                                            <div className="addedTask">
                                                <p>{elem}</p>
                                            </div>

                                            <button className="btn btn-danger" onClick={() => del(ind)}>DEL</button>

                                        </div>
                                    )
                                })

                            }


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Post