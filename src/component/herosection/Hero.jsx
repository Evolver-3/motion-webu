import {assets} from '../../assets'

const Hero = () => {
  return (
    <main className='bg-gray-500 h-screen '>
      <section className='min-h-[750px] w-full'>
        <div className='items-center px-[1rem] sm-[2rem]'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>

          
          <div className='mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='text-7xl font-bold leading-tight ml-14'>
              Hero Section
            </h1>

            <div className='relative'>
              <div className='relative z-10 space-y-4'>
                <h1 className='text-2xl'>
                  To Greater Goods
                </h1 >
                <p className='text-sm opacity-60 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi aperiam quas dignissimos eveniet dolor? Pariatur nesciunt incidunt unde! Quasi inventore eaque.</p>
              </div>

              <div className='absolute -top-6 -left-3 w-[250px] h-[180px] bg-gray-700/25'>

              </div>

            </div>
          </div>
          
          <div className='relative'>
            <img src={assets.car}></img>
          </div>
          <div></div>

        </div>
        </div>

      </section>
    </main>
  )
}

export default Hero