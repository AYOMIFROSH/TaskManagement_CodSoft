import React, {useEffect}from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Filter from './Filtering/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
        // {
        //     id: '001',
        //     name: 'Default Task',
        //     desc: 'Default Description',
        //     status: false,

        // }
    ]);

    const [filteredItems, setFilteredItems] = useState(items);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        setStartDate(new Date());
    }, []);

    const [selectedTask, setSelectedTask] = useState(null);
    

// Add a new function to handle task selection
    const handleSelectTask = (id) => {
        if (selectedTask === id) {
            setSelectedTask(null);  // If the task is already selected, deselect it
        } else {
            setSelectedTask(id);  // Otherwise, select the task
        }
    };
    

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
                startDate,
                endDate,
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
    
    //close add task
    const handleClose = () => {
        // Hide the form for adding a new task
        setshowform(false);
        setshowList(false);
        setshowNew(true);
    };

  return (
    <div >
        <Filter items={items} setFilteredItemsInParent={setFilteredItems}/>
        {showNew ? (
            <div className='container'>
                <div className='col-12 text-end'>
                    <button className='btn btn-primary' onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /> </button>
                </div>
            </div>
        ) : (
            ""
        )}

        {showForm ? (
            <>
            <div className='container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded' style={{width: '100%', margin: '45px', height: '100%'}}>
                <div className='row'>
                    <div className='text-center'>
                        <h3>{toggleSubmit ? 'Create Task' : 'Edit Task'}</h3>
                    </div>
                    <form className="col-12 p-2" onSubmit={handleSubmit} style={{}}>
                        <strong><label htmlFor="title" className='my-2'> Enter Title</label></strong>
                        <input type="text" name='title' id='put-style-2' placeholder='title' className='w-100 my-1 p-2' onChange={handleInput} value={inputTitle}/>
                        <strong><label htmlFor="description" className='my-2'> Enter </label></strong>
                        <textarea type='text'  name="description" id="put-style-2" placeholder="description" className="w-100 my-1 p-2" onChange={handleInputdesc} value={inputDesc} rows={5}  cols={30} />
                        <strong><label htmlFor="end-date" className='my-2'> End Date</label></strong>
                        <input type="date" name='end-date' className='w-100 my-1 p-2' onChange={(e) => setEndDate(new Date(e.target.value))} style={{border: 'none', borderBottom: '2px solid silver'}}/>

 
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
                {filteredItems.map ((elem, index) => {
                    return(
                        <div className='row border rounded shadow p-3 mb-3 bg-white rounded p-2' key={elem.id}>
                            <div className='col-12 d-flex justify-content-between align-items-center'>
                                <div onClick={() => handleSelectTask(elem.id)}>
                                    <h4>{elem.name}</h4>
                                    {selectedTask !== elem.id && <p><b>Time remaining:</b> {Math.ceil((new Date(elem.endDate) - new Date(new Date().setHours(0,0,0,0))) / (1000 * 60 * 60 *24))} days</p>}
                                    {selectedTask === elem.id && <>
                                    <p><b style={{fontFamily: 'cursive'}}>Created on:</b> {elem.startDate.toLocaleDateString()}</p>
                                    <p>{elem.desc}</p>
                                            </>}
                                </div>
                                <button className='btn btn-primary mx-2' onClick={() => handleEdit(elem.id)}  > <FontAwesomeIcon icon={faEdit} /> </button>
                                {showDelete ? (
                                    <button className='btn btn-danger mx-2' onClick={() => handleDelete(elem.id)}> <FontAwesomeIcon icon={faTrash} /> </button>
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
    </div>
  );
};

export default Todo;