
import React, { useEffect, useState } from 'react'
import styles from '../styles'
import {del, edit} from '../assets'

export default function ShowTasks({task, id, handleRemove,updateFormId,updateForm, setUpdateFormId}) {


  return (
    <div className={`${styles.flexCenter} w-full`}>
      
        <div className={`${styles.flexBetween} flex-row w-full rounded-lg
         bg-[#D9D9D9] px-4 my-2`}>
          {
          updateFormId === id ? updateForm() : 
          <>
           <p className='text-[18px] font-semibold py-4  text-black'>  {task}</p>
        <div className={`${styles.flexStart}`}>
          
            <img src={del} onClick={()=>handleRemove(id)} className='w-[25px] h-[20px] pr-2' />
            <img src={edit} onClick={()=>{setUpdateFormId(id)}} className='w-[20px] h-[20px]'
            />
            
        </div>
          </>
          }  
           
            

        </div>
    </div>
  )
}

