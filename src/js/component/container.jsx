import React, { useState } from 'react'
import FormTodo from './formTodo.jsx'
import TaskList from './taskList.jsx'

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
  return (
    <div className='text-center'>
        {/*(A-1)*/}
        <FormTodo handleAddItem={handleAddItem} />
        {/*(C)*/}
        <TaskList list={list} setList={setList} />
    </div>
  )
}

export default Container