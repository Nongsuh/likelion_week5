import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import App from '../App';
import plus from '../assets/img/plus.png'
import minus from '../assets/img/delete.png'

const Todo = () => {
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleAdd = () => {
    setList([...list, {content,completed:false}]);
    setContent('');
  };

  const handleSub = (removeIndex) => {
    const newList = list.filter((_, index) => index !== removeIndex);
    setList(newList);
  };

  const handleCheck = (index) => {
    setList(
      list.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };



return (
  <div id='wrap'>
    <h1>TO-DO-LIST</h1>
    <div className="write">
      <input value={content} onChange={handleChange} type="text" placeholder='오늘 할 일을 입력해주세요!' />
      <button onClick={handleAdd}><img src={plus} alt="" /></button>
    </div>
    <div className="list">
      {list.map((item, index) => (
        <div key={index} className="item">
          <input type="checkbox" id='checkbox' onChange={()=>handleCheck(index)} />
          <span style={{textDecoration:item.completed?'line-through':'none'}}>{item.content}</span>
          <button id='remove' onClick={() => handleSub(index)}><img src={minus} alt="" /></button>
        </div>
      ))}
    </div>
  </div>
);
};

export default Todo
