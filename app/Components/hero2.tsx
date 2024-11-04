import Image from 'next/image'
import React from 'react'
import img from "../../public/assests/hero.png"

const Hero = () => {
  return (
    <div className='mt-[25px]'>
        <div>
        <section className="text-gray-600 body-font -mt-11">
  <div
    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    
  >
    <div
      className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      
    >
      <h1 className="title-font sm:text-4xl text-3xl mb-7 text-gray-900 leading-[69.24px] font-bold font-[Libre Bodoni] font-[700px] text-[37.84px] tracking-[2.5%]">
      IMPECCABLE 
        <br className="hidden lg:inline-block" />
        CRAFTSMANSHIP AND
        <br />
        FINESSE
      </h1>
      <p className="mb-8 leading-[30.35px] tracking-[2.5%] font-[500] text-[#736b4d]">
      An example of intricate workmanship and detail, elegant <br />
      necklaces and long and short chains form a part of our <br />
      desirable collection.
      </p>

      <div className="flex justify-center" >

        <button className="inline-flex text-white bg-[#A29875] border-0 py-2 px-7  focus:outline-none hover:bg-black  rounded-[10px] text-lg ">
          Explore Now
        </button>
       
      </div>
    </div>
    <div className="w-[380.1px] h-[525.43px] mr-16" >
      <Image
        className=""
        alt="hero"
        src={img}
      />
    </div>
  </div>
</section>

        </div>
    </div>
  )
}

export default Hero