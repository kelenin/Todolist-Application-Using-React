import React from "react";
import Checkbox from "./checkbox.jsx";

const TaskList = props => {

    const {list, setList} = props;

    const onChangeStatus = e => {

        const {name, checked } = e.target;

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const OnclickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    
	return (<div className="todo-list">
        {/*(A-1)*/}
        {list.lenght ? chk : "No tasks"}
        {/*(B)*/}
        {list.lenght ? ( <p> <button className="button blue" onClick={OnclickRemoveItem}> Delete all done </button></p>) : null}
    </div>);
};

export default TaskList;