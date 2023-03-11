import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Logo } from '../assets'
import styles from '../styles'
import ShowTasks from './ShowTasks'

export default function BrowseApp() {

    const [task, setTask] = useState(null)
    const [text, setText] = useState('')

    const [editData, setEditData] = useState('')
    const [updateFormId, setUpdateFormId] = useState()
 

    //get all tasks

 async function showTasks() { 
   
          await  axios.get("/items").then((res)=>{
         
         setTask(res.data)
     })
 
}
 useEffect(()=>{
    showTasks()
 },[])
 

 // add new task
 async function handleAdd(event){
    event.preventDefault()
   
    try {
         await axios.post('/item',{text})
         showTasks()

    } catch (error) {
        console.log(error)
    }
 }


///delete task
 async function handleRemove(id){
    try {
         await axios.delete(`/item/${id}`)
         showTasks()
    } catch (error) {
        console.log(error)
    }
 }


 //edit existing task
 async function handleEdit(event){
 event.preventDefault()
    try {
         await axios.patch(`item/${updateFormId}`, {text:editData})
            setEditData(" ")
            showTasks()
            setUpdateFormId('')
    } catch (error) {
        console.log(error)
    }
 }

 async function handleCancel(event){
    event.preventDefault()
       try {
        setUpdateFormId('')
               setEditData(" ")
               showTasks()
               
       } catch (error) {
           console.log(error)
       }
    }

// update input form
function updateForm(){
   return <div className={`${styles.flexCenter}`}> 
         <form className="flex flex-row items-center py-4">
                
            <input type='text' placeholder='Enter task title'
                
                onChange={(event)=>{setEditData(event.target.value)}}
                value={editData}
                className='border border-[#1AB8DB] px-3 w-full rounded-xl
                focus:outline-none ' />
                
                <button  type='submit' onClick={handleEdit} className={` border-none bg-[#1AB8DB]  px-1 py-1 rounded-xl
                    w-[80px] h-[30px] text-white ${styles.flexCenter}`}>Done</button>
                <button type='submit' onClick={handleCancel} className={` border-none bg-red-500  px-1 py-1 rounded-xl
                    w-[80px] h-[30px] text-white ${styles.flexCenter}`}>cancel</button>
                    
                
                
            </form>
    </div>
}




  return (
    <div className='w-full'>
    <div className='flex flex-col items-center justify-center'>
        <h1 className=' text-[#1AB8DB] xs:text-[20px] text-[16px]
        font-bold uppercase'>tasks</h1>

        <div className={`${styles.flexCenter}`}>
            <img src={Logo} className='w-[100px] h-[100px] my-[38px]' />
        </div>
    </div>

    <div className='mb-8'>
        <form onSubmit={handleAdd}className={`${styles.flexCenter} flex-row`} >
            <input type='text' id='title' placeholder='Enter task title'
                value={text}
                onChange={event=>{setText(event.target.value)}}
                className='border border-[#1AB8DB] px-3 py-4 w-full rounded-xl
                    focus:outline-none' />
                
            <button className={` border-none bg-[#1AB8DB]  px-3 py-4 rounded-xl
                w-[106px] h-[40px] text-white ${styles.flexCenter}`}>Add</button>
            </form>
    </div>
        

    <div className='w-full my-4'>

        {!!task && ( task.map((item)=>{
            return <ShowTasks key={item._id} task={item.text} id={item._id} 
                handleRemove={handleRemove}  updateFormId={updateFormId} 
                setUpdateFormId={setUpdateFormId} updateForm={updateForm}
            />
        }) 
        )}   
       
    </div>
    
   
   
   
</div>
  )
}
