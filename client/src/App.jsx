import React, { useState } from 'react'
import AddTask from './components/AddTask'
import BrowseApp from './components/BrowseApp'
import styles from './styles'
import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:5000/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.flexCenter}`}>
      <div className={`xl:max-w-[675px] w-[375px] absolute top-10`}>
        {/* <AddTask /> */}
        <BrowseApp/>
        </div>
      </div>
    
    </div>
  )
}

export default App
