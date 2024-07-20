import React from 'react'


const Speaker = () => {
    const speakers=[{name:"ANU",date:"15 sept 2023", desc:"on the AI management"}]
  return (
    <div className='bg-black h-full w-full m-0 '>
      <div className='text-5xl text-pink-500'>SPEAKER</div>
      <div className=''>
        {speakers.map(item=>{
            <div className="bg-gradient-to-r from-purple-500 to-pink-500   w-96 rounded-lg text-white flex-col">
               <div className="text-left p-5">{item.date}</div>
               <div>
                 <div className="circles flex px-5">
                   <div className="circle1 h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-orange-400 relative z-10"></div>
                   <div className="circle2 h-12 w-12 rounded-full bg-gradient-to-r from-purple-700 via-purple-700 to-pink-500 relative right-2 "></div>
                 </div>
                 <div>
                   <img src="" />
                 </div>
               </div>
               <div className="text-left px-5 py-2 font-bold text-xl">{item.name}</div>
               <div>{item.desc}</div>
               <div className="buttons flex p-5 justify-between">
                 <div className="flex gap-4 ">
                   <button className="bg-white rounded-full text-pink-500 px-3 font-semibold">
                     join now
                   </button>
                 </div>
                 <div>
                   <a>
                     <img className="w-7 h-7 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDIXdFPKo6--nzoAw6HzmB4WIYoWOHFPERA&s" />
                   </a>
                 </div>
               </div>
             </div>
        })}
      </div>
      
    </div>
  )
}

export default Speaker
