import { USERWHITESPACABLE_TYPES } from "@babel/types"

<Clipboard size={56} color="var(--Gray-400)"/>

<div className={styles.contentSize}>
    <p><strong>Você ainda não tem tarefas cadastradas</strong> </p>
    <p>Crie tarefas e organize seus itens a fazer</p>
</div>

# javascript - map 
# react hooks - useState, UseEffect

# controlled Components, Uncotrolled components
# components comunications
# Array, object destruturing
# condicional rendering
# condicional style

    if(createdTaskCount > 0)
                            {
                                tasks.map(task => {
                                  return(
                                     <Task key={task.id} taskText = {task.taskText} isComplete = {task.isComplete} handleCheckedChange = {() => handleCheckedChange(task.id)} handleDeleteTask={()=> handleDeleteTask(task.id)}/>
                                  )
                                }) 
                            }
                            