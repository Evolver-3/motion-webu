import {assets} from '../assets'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <main className='bg-[linear-gradient(to_right,_#6b7280_50%,_#9ca3af_50%)] '>
      <section className='min-h-[750px] w-full'>
        <div className='items-center px-[1rem] sm-[2rem]'>

          <Navbar/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>

          
          <div className='mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='text-6xl font-bold leading-tight ml-14'>
              Hero Section
            </h1>

            <div className='relative'>
              <div className='relative z-10 space-y-4 text-orange-200 '>
                <h1 className='text-2xl'>
                  To Greater Goods
                </h1 >
                <p className='text-sm opacity-60 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi aperiam quas dig</p>
              </div>

              <div className='absolute -top-6 -left-3 w-[250px] h-[180px] bg-gray-700/25'>

              </div>

            </div>
          </div>
          
          <div className='relative '>
            <img src={assets.car} className='relative top-28 z-40 h-[300px] md:[700px]'></img>

          {/*  <div className='h-[400px] w-[500px] absolute -top-10 -right-14 bg-transparent border-[40px] border-purple-400 rounded-full z-10'>

            </div>*/}
            <div className='absolute -top-40 left-[200px] z-[1]'>
              <h1 className='text-[140px] scale-150 font-bold text-gray-600 leading-none opacity-40 '>
              Hero Section
              </h1>
            </div>
          </div>

          <div className='mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>
              Hero Section
            </h1>

            <div className='relative'>
              <div className='relative z-10 space-y-4 text-orange-200 '>
                <h1 className='text-2xl'>
                  Werenithigo
                </h1 >
                <p className='text-sm opacity-60 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi</p>
              </div>

              <div className='absolute -top-6 right-10 w-[250px] h-[180px] bg-gray-700/25'>

              </div>

            </div>
          </div>
          
          <div></div>

        </div>
        </div>

      </section>
    </main>
  )
}

export default Hero