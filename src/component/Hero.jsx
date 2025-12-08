import {assets} from '../assets'
import Navbar from './Navbar'
import {motion} from "motion/react"
import { useState } from 'react'

const Hero = () => {

  const [open,setIsOpen]=useState(false);
 
  const varient={
    initial:{width:'50%',height:'100%',opacity:0},
    expanded:{width:'100%', height:'100%',opacity:1, transition:{delay:.4,duration:1}},
    
  }

  return (
    <main className='bg-[linear-gradient(to_right,_#6b7280_50%,_#9ca3af_50%)] '>
      <section className='relative min-h-[750px] w-full'>
        <div className='items-center px-[1rem] sm-[2rem]'>

          <Navbar open={open} setIsOpen={setIsOpen}/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>

          
          <div className='mt-[100px] md:mt-0 p-4 space-y-28'>
            <motion.h1 initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            transition={{type:"spring", stiffness:100,damping:10,delay:1}}
            className='text-6xl font-bold leading-tight ml-14'>
              Hero Section
            </motion.h1>

            <motion.div initial={{opacity:0, y:100}}
            animate={{opacity:1,y:0 }} transition={{type:"spring",
              stiffness:100,
              damping:10,
              delay:1.3
            }} className='relative'>
              <div className='relative z-10 space-y-4 text-orange-200 '>
                <h1 className='text-2xl'>
                  To Greater Goods
                </h1 >
                <p className='text-sm opacity-60 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi aperiam quas dig</p>
              </div>

              <div className='absolute -top-6 -left-3 w-[250px] h-[180px] bg-gray-700/25'>

              </div>

            </motion.div>
          </div>
          
          <div className='relative '>
            <motion.img src={assets.car} 
            variants={varient} initial="initial" 
            animate={'expanded'}
           


            
            className='relative top-28 z-40 h-[300px] md:[700px]'></motion.img>

            <div className='absolute -top-40 left-[200px] z-[1]'>
              <motion.h1 initial={{opacity:0,y:-600}}
              animate={{opacity:0.3,y:0}} transition={{delay:1.4,stiffness:100,damping:10}}
              className='text-[120px] scale-150 font-bold text-gray-600 leading-none z-10'>
              Hero Section
              </motion.h1>
            </div>
          </div>

          <div className='mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>
              Hero Section
            </h1>

            <motion.div initial={{opacity:0, y:100}}
            animate={{opacity:1,y:0 }} transition={{type:"spring",
              stiffness:100,
              damping:10,
              delay:1.3
            }} className='relative'>
              <div className='relative z-10 space-y-4 text-orange-200 '>
                <h1 className='text-2xl'>
                  Werenithigo
                </h1 >
                <p className='text-sm opacity-60 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi</p>
              </div>

              <div className='absolute -top-6 right-10 w-[250px] h-[180px] bg-gray-700/25'>

              </div>

            </motion.div>
          </div>
          
          <div></div>

        </div>
        </div>

        {open && 
        <div className='absolute top-0 right-0 w-[120px] h-full bg-gray-600 backdrop-blur-sm z-10'>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <div className='w-1 h-18 bg-white'></div>
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
              <img className='w-10' src={assets.facebook}></img>
              </div>
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
              <img className='w-10' src={assets.insta}></img>
              </div>
              <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
              <img className='w-10' src={assets.twitter}></img>
              </div>
              <div className='w-1 h-18 bg-white'></div>
            </div>
          </div>
        </div>
        }

      </section>
    </main>
  )
}

export default Hero