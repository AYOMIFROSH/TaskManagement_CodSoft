import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

export const Todo = () => {
    const [showForm, setshowform] = useState(true);
    const [showNew, setshowNew] = useState(true);
    const [showDelete, setshowDelete] = useState(true);
    const [toggleSubmit, settoggleSubmit] = useState(true);
    const [isEditItem, setisEditItem] = useState(null);
    const [showList, setshowList] = useState(true);
    const [editMessage, seteditMessage] = useState(false);
    const [deleteMessage, setdeleteMessage] = useState(false);
    const [deleteMessageSuccess, setdeleteMessageSuccess] = useState(false);
    const [inputTitle, setinputTitle] = useState("");
    const [inputDesc, setinputDesc] = useState("");
    const [items, setitems] = useState([
        {
            id: '001',
            name: 'Default Task',
            desc: 'Default Description',
            status: false,

        }
    ]);

    //Handling input fields
    const handleInput = (event) => {
        setinputTitle(event.target.value);
    };
    const handleInputdesc = (event) => {
        setinputDesc(event.target.value)
    };
    
    //Submiting form
    const handleSubmit = (event) => {
        setshowList(true);
        setshowNew(true);

        event.preventDefault();
        if(!inputTitle || !inputDesc) {
            alert('fill data');
            showList(false);
        } else if (inputTitle && !toggleSubmit) {
            setitems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return{...elem, name: inputTitle, desc: inputDesc};
                    }
                    return elem;
                })
            );

            setinputTitle('');
            setinputDesc('');
            settoggleSubmit(true);
            setshowDelete(true);
            setshowform(false);
        } else{
            const allInputTitle = {
                id: new Date().getTime().toString(),
                name: inputTitle,
                desc: inputDesc,
            };
            setitems([allInputTitle, ...items]);
            setinputTitle('');
            setinputDesc('');
            setshowform(false);
        }
    };

    //Delete
    const handleDelete = (index) => {
        console.log(index);
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setdeleteMessage(true);

        setTimeout(() => {
            setitems(updatedItems);
            setdeleteMessage(false);
        }, 2000);
        setdeleteMessageSuccess(false);
    };

    //Edit
    const handleEdit = (id) => {
        setshowList(false);
        setshowDelete(false);
        setshowNew(false);
        setshowform(true);

        settoggleSubmit(false);
        let newEditItem = items.find((elem) => {
            return elem.id === id;
        });
        setinputTitle(newEditItem.name);
        setinputDesc(newEditItem.desc);
        // setshowDelete(true)

        setisEditItem(id);
        console.log(newEditItem);
    };

    //Add New Task
    const handleAdd = () => {
        // alert('hello')
        setshowform(true);
        setshowList(true);
        setshowNew(false);
    };

  return (
    <React.Fragment>
        {showNew ? (
            <div className='container'>
                <div className='col-12 text-end'>
                    <button className='btn btn-primary' onClick={handleAdd}> Add Task </button>
                </div>
            </div>
        ) : (
            ""
        )}

        {showForm ? (
            <>
            <div className='container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded'>
                <div className='row'>
                    <div className='text-center'>
                        <h3>{toggleSubmit ? 'Create Task' : 'Edit Task'}</h3>
                    </div>
                    <form className="col-12 p-2" onSubmit={handleSubmit} id='wrapper'>
                        <strong><label htmlFor="title" className='my-2'> Enter Title</label></strong>
                        <input type="text" name='title' id='put-style-2' placeholder='title' className='w-100 my-1 p-2' onChange={handleInput} value={inputTitle}/>
                        <strong><label htmlFor="description" className='my-2'> Enter </label></strong>
                        <input type="text" name='description' id='put-style-2' placeholder='description' className='w-100 my-1 p-2' onChange={handleInputdesc} value={inputDesc} />
                        {/* <div className='text-center'> */}
                        {toggleSubmit ? (
                            <button className='btn btn-primary my-2' id='check'> Save </button>
                        ) : (
                            <button className='btn btn-primary my-2'> Update </button>
                        )}
                        {/* <div> */}
                    </form>
                </div>
            </div>
            </>
        ) : (
            ""
        )}

        {showList ? (
            <div className='container py-2'>
                {deleteMessage ? (
                    <p className='text-center text-danger'> Item Deleted Successfully</p>
                ) : (
                    ""
                )}
                {items.map ((elem, index) => {
                    return(
                        <div className='row border rounded shadow p-3 mb-3 bg-white rounded p-2' key={elem.id}>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4>{elem.name}</h4>
                                    <p>{elem.desc}</p>
                                </div>
                                <button className='btn btn-primary mx-2' onClick={() => handleEdit(elem.id)}> Edit </button>
                                {showDelete ? (
                                    <button className='btn btn-danger mx-2' onClick={() => handleDelete(elem.id)}> Delete </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            ""
        )}
    </React.Fragment>
  );
};

export default Todo;
