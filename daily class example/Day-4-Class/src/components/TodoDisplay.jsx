import React from 'react';

const TodoDisplay = ({item, index, deleteTodoItem}) => {
    return (
        <div>
            <div key={index}>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <button>Edit</button>
            <button onClick={() => {deleteTodoItem(item.id)}}>Delete</button>
          </div>
        </div>
    );
};

export default TodoDisplay;