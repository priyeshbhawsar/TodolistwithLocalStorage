import { useState } from "react"
import React from 'react'

const Form = () => {
    const [textdata, settextdata] = useState("");
    const [editTtem, seteditItem] = useState(null);
    const [data, setdata] = useState([]);
    const adddata = () => {
        const newdata = {
            textdata,
        }
        setdata([...data, newdata])
    }
    const deleteitem = (index) => {
        const Alldata = [...data];
        const deletetext = Alldata.filter((item, id) => {
            return index !== id
        });
        setdata(deletetext)

    };
    const edititem = (obj, id) => {
        seteditItem(id)
        settextdata(obj.textdata);
    }
    const UpadteData = () => {
        let TempData = [...data]
        TempData[editTtem].textdata = textdata;
        setdata(TempData);
    }
    return (
        <>
            <div style={{ width: '50%', margin: '10px auto' }}>


                <input type='text' onChange={(e) => settextdata(e.target.value)} placeholder='write list' style={{ width: '200px', height: '20px' }} />
                <button onClick={adddata} style={{ padding: '10px 20px', margin: '10px' }}>Add-Data</button>
                <button onClick={UpadteData} style={{ padding: '10px 20px', margin: '10px' }}>Update</button>
                {
                    data?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div style={{ display: 'flex' }}>
                                    <h2 style={{ margin: '20px' }} onClick={() => deleteitem(index)}>x</h2>
                                    <h2>
                                        {item.textdata}
                                    </h2>
                                    <h2 style={{ margin: '20px' }} onClick={() => edititem(item, index)}>Edit</h2>
                                </div>


                            </div>
                        )

                    })
                }
            </div>
        </>

    )
}

export default Form