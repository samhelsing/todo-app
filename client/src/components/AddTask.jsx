import React from 'react'
import {Logo} from '../assets'
import styles from '../styles'

export default function AddTask() {
  return (
    <div className='w-full'>
        <div className='pl-4 py-6'>
            <h1 className=' text-[#1AB8DB] xs:text-[18px] text-[14px] font-bold uppercase'>add task</h1>
        </div>
        <div className={`${styles.flexCenter}`}>
                <img src={Logo} className='w-[100px] h-[100px] my-[58px]' />
            </div>
        <div>
            <form>
                <label for="title" className='text-[20px] font-semibold' >Title</label><br/>
                <input type='text' id='title' placeholder='Enter task title'
                    className='border border-[#1AB8DB] px-3 py-4 w-full rounded-xl
                    focus:outline-none mt-2 mb-8'/>
                <div className='flex flex-row justify-between w-full'>
                    <button className={` border-none bg-[#1AB8DB]  px-3 py-4 rounded-xl
                    w-[106px] h-[40px] text-white ${styles.flexCenter}`}>Add</button>
                    <button className={` border-none bg-[#FF0000]  px-3 py-4 rounded-xl
                    w-[106px] h-[40px] text-white ${styles.flexCenter}`}>Cancle</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

