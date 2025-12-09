import {motion} from 'motion/react'
import { assets } from '../assets'

const ContactPage = () => {
  return (
    <div className='container my-30'>
      <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>

        <div className='space-y-8'>

          <motion.h1 initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.2,
            type:"spring",
            stiffness:100,
            damping:10
          }}
           
           className='text-4xl font-bold text-gray-600 font-mono'>Contact Us to buy our products from anywhere
          </motion.h1>

          <motion.div 
          initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.4,
          }}
           className='flex items-center gap-5'>

            <input className='w-full lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder="Name"/>

            <input className='w-full lg:w-[280px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="email" placeholder='Email'/>

          </motion.div>

          <motion.div 
          initial={{opacity:0, y:-100 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            delay:0.8,
          }}
          className='flex items-center gap-5'>

            <input className='w-full lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder="Country"/>

            <input className='w-full lg:w-[280px] px-4 py-2 border-[1px] border-gray-400 rounded-md' type="text" placeholder='Zipcode'/>

          </motion.div>
          <button className='px-2 py-2 text-lg font-bold bg-gray-600 text-white w-[450px] rounded-lg hover:bg-gray-700 hover:text-orange-400'>Contact</button>
        </div>

        <div className=''>

          <motion.img initial={{opacity:0,scale:0.5}} 
          whileInView={{opacity:1,scale:1}}
          transition={{type:'spring',stiffness:100,damping:10,delay:1}}
           className="w-full sm:w-[500px] mx-auto shadow-xl/60 rounded-md" src={assets.upback}></motion.img>

        </div>
      </div>
    </div>
  )
}

export default ContactPage