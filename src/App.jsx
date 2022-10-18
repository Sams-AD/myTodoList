import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'


import { Clipboard } from 'phosphor-react'
import { Task } from './components/Task'
import { useState } from 'react'
import {nanoid} from "nanoid"


export function App(){

    const [tasks, setTasks ] = useState([])
    const [newTask, setNewTask] = useState("")
    const[createdTaskCount, setCreatedTaskCount] = useState(0)
    let completeTaskCount = 0


   
    function handleCreateNewTask(event){
        event.preventDefault()

        setTasks([...tasks,{
            id:nanoid(),
            taskText: newTask,
            isComplete: false
        }])

        setNewTask('')
        setCreatedTaskCount(createdTaskCount+1)
        
    }

    function handleNewTextChange(event)
    {
        setNewTask(event.target.value)       
    }

    function handleCheckedChange(id)
    {
        setTasks(tasks.map(task => { return(id === task.id ? {...task, isComplete: !task.isComplete}:task)
            })
            )
    }

    for(const task of tasks)
    {
        if(task.isComplete)
        {
            completeTaskCount++
        }
    }

    function handleDeleteTask(id)
    {
        const taskWithoutDeleted = tasks.filter(task => task.id != id)

        setTasks(taskWithoutDeleted)
        setCreatedTaskCount(createdTaskCount-1)
    }



    return(
        <>
            <Header/>
            <div className={styles.taskContainer}>
                <form className={styles.form} onSubmit={handleCreateNewTask}>
                    <input type="text" name='txt_task' value = {newTask} onChange={handleNewTextChange}/>
                    <button type='submit'>Criar <strong><span>+</span></strong></button>
                </form>

                <div className={styles.taskWrapper}>
                    <header>
                        <p>Tarefas criadas <span>{createdTaskCount}</span></p>
                        <p>Tarefas Concluidas <span>{completeTaskCount} de {createdTaskCount}</span></p>
                    </header>

                    <div className={styles.taskList}>
                       {
                           tasks.map(task => {
                             return(
                                <Task key={task.id} taskText = {task.taskText} isComplete = {task.isComplete} handleCheckedChange = {() => handleCheckedChange(task.id)} handleDeleteTask={()=> handleDeleteTask(task.id)}/>
                             )
                           }) 
                       }
                    </div>
                </div>
            </div>
        </>
    )
}