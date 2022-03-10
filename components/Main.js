import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'


function Main() {

const [searchInput, setSearchInput] = useState('');

const submitHandler = (e) =>{
    e.preventDefault()
    console.log(searchInput)
    setSearchInput('')
}
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col'>
                
               <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' alt='google'/>
           
            
            <div className='flex items-center my-3 justify-between'>
                <SearchIcon className="absolute h-10 bg-transparent text-white rounded-full p-2 cursor-pointer md:mx-2"/>
                
                <form className='w-full mr-2' onSubmit={submitHandler} action="submit">
                    <input value={searchInput} onChange = {(e) => setSearchInput(e.target.value)} className="mr-2 text-xl h-14 w-full outline-none pl-12 rounded-full ring-1 ring-slate-400 text-white bg-transparent hover:bg-zinc-700 hover:ring-transparent hover:shadow shadow-zinc-800" type="text"/>
                </form>

                <img className='cursor-pointer hover:scale-125 h-7 w-5' src="https://upload.wikimedia.org/wikipedia/commons/2/22/Google_microphone_logo.png?20160926181048" alt="micro" />
                
                  
            </div>

            <div className='inline-flex justify-center space-x-3 my-4 text-white'>
                
                <button className='px-10 py-4 bg-zinc-600 rounded-md hover:ring-1 ring-slate-200'>
                    Google Search
                </button>

                <button className='px-8 py-4 bg-zinc-600 rounded-md hover:ring-1 ring-slate-200'>
                    I'm Feeling Lucky
                </button>
                
            </div>
            
        
        </div>

        

        
    </div>
    
  )
}

export default Main