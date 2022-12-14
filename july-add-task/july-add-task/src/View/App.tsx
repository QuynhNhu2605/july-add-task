import React, { useEffect, useState } from 'react'
// @ts-ignore
import ListItems from './ListItem.tsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { click } from '@testing-library/user-event/dist/click';
library.add(faTrash)

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('tasks');

        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);

    function Add() {
       
        const form = document.querySelector('#to-do-form');
        const inputName = (form.querySelector('[name="name"]')as HTMLInputElement).value;
        
        const inputDescription = (form.querySelector('[name="desctiption"]')as HTMLInputElement).value;

        if (inputName === '' || inputDescription === '') return;

        const task = [
            ...tasks,
            {
                key: Date.now(),
                name: inputName,
                description: inputDescription
            }]

        localStorage.setItem('tasks', JSON.stringify(task));
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }

    function Delete(key: any) {
        var newTasks = tasks.filter((task) => task.key !== key);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks)
    }

    function Update(text: any, key: any) {
        const newTasks = tasks.map(task => {
            if (key === task.key) {
                return {
                    key: key,
                    name: text,
                    description: task.description
                }
            }
            return task;
        })

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <header>
                <form id="to-do-form" >
                    <div>
                        <h1>Add Task</h1>
                        <label >Name : </label>
                        <input name='name' id='name' type="text" placeholder="Enter task" ></input>
                        <label >Description : </label>
                        <textarea id='desctiption' name='desctiption' placeholder='Enter description'></textarea>
                    </div>
                    <button type="submit" onClick={Add}>Add</button>
                </form>
                <p></p>
                <ListItems items={tasks} Update={Update} Delete={Delete} />
            </header>
        </div>
    );
}
export default App;