import React from 'react'

export default function Navbar({logo}) {
  return (
    <nav className='bg-slate-400'>
    <div className='w-full flex flex-row justify-between p-4'>
     <div className='text-3xl font-extrabold text-white'>{logo} &copy;</div>
     <div className='flex flex-row justify-between gap-5 font-extrabold'>
         <button>Home</button>
         <button>Services</button>
         <button>Portfolio</button>
         <button>Testimonials</button>
    </div>
  <button className='mr-3 font-semibold bg-yellow-400 px-3 rounded-full' >Hire Me!</button>
</div>
</nav>
  )
}
