import './App.css';
import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Form from './components/Form'
const getLocalItems = () => {
  let list = localStorage.getItem('item')

  if (list) {
    return (list = JSON.parse(localStorage.getItem('item')));
  } else {
    return [];
  }
}
function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState(getLocalItems());
  const [toggleBtn, setToggleBtn] = useState(false);
  const [itemId, setItemId] = useState();
  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(itemList));
  }, [itemList])
  const handleChange = (e) => {
    setItem(e.target.value)
  }
  const addItem = () => {
    if (toggleBtn) {
      const newList = itemList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, itemName: item }
        }
        return todo;
      })
      setItemList(newList);
      setToggleBtn(false);
      setItem("");
      setItemId();
      toast.info("Item Updated Successfully")
    } else {
      const itemObj = {

        id: uuid(), itemName: item
      }
      setItemList((prevItem) => [...prevItem, itemObj]);
      setItem("");
      toast.success("Item Added Successfully")
    }

  }
  const deleteItem = (id) => {
    const filterItem = itemList.filter((value) => {
      return value.id !== id

    })
    setItemList(filterItem);
    toast.error("Item Deleted Successfully")
  }
  const editItem = (id) => {
    const editTodo = itemList.find((todo) => {
      return todo.id === id;
    })
    setItem(editTodo.itemName);
    setToggleBtn(true);
    setItemId(id);
  }

  return (
    <div className="App">
      <h1>Add Todo List</h1>
      <input type='search' placeholder='To-Do...' value={item} onChange={handleChange}></input>
      <div>
        <button onClick={addItem} disabled={item.length <= 2 ? true : false}>
          {toggleBtn ? "Update Item" : "Add Item"}
        </button>
        <button>Delete</button>
      </div>
      <div>
        <TodoList itemList={itemList} deleteItem={deleteItem} editItem={editItem} />
        <ToastContainer theme='colored' />
      </div>
    </div>
  );
}

export default App;
