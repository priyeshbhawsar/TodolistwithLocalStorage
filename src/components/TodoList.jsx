import React from 'react'

const TodoList = (props) => {
    const { itemList, deleteItem, editItem } = props;
    return (
        <>
            {itemList?.length !== 0 ?
                itemList.map((val) => {
                    return (
                        <div>
                            <div key={val.id}>
                                <span>{val.itemName}</span>
                            </div>
                            <div>
                                <button style={{ cursor: "pointer" }} onClick={() => deleteItem(val.id)}>x</button>
                            </div>
                            <div onClick={() => editItem(val.id)}>
                                <button style={{ cursor: "pointer" }}>edit</button>
                            </div>
                        </div>
                    )
                }) : "No item to display"}
        </>
    )
}

export default TodoList