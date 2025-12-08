import {motion } from 'motion/react'
import { secData } from '../assets'

const Section = () => {
  return (
    <div className='container my-16 space-y-8 '>
      <div className='text-center max-w-lg mx-auto space-y-2'>

        <motion.h1 
        initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness:150, damping:10,delay:0.2}}
        className='text-3xl font-bold text-gray-500'>
          New and <span className='text-orange-300'> car</span>
        </motion.h1>

        <motion.p 
        initial={{opacity:0,scale:0.4}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          type:"spring",
          stiffness:150,
          damping:10,
          delay:0.3
        }}
        className='opacity-50 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt consectetur repellat, hic quia autem saepe tempora fugiat temporibus ab!
        </motion.p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ml-20'>
        {secData.map((item)=>(
          <div key={item.id} className='flex flex-col justify-center items-center'>
            <img src={item.image}></img>

            <div className='space-y-2 '>  
            <h2 className='text-2xl font-bold text-orange-400'>{item.title}</h2>
            <p className=''>{item.subtitle}</p>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Section