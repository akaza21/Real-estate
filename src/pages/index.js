import Bubble from '@/components/bubble'
import Card from '@/components/Card'
import MapBox from '@/components/MapBox'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
import fetchProperties from '@/utils/fetchProperties'
import { useEffect } from 'react'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({properties}) {
  
  return (
    <>
    <Navbar/>
    <div className='flex justify-start items-center mt-6 px-8'>
      <SearchBox/>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
      <Bubble>
        <h1 className='mx-4'>Hello</h1>
      </Bubble>
   

    </div>

    <div className='flex justify-center  w-full px-4 py-8   '>


      <div className='grid grid-cols-2 gap-4  w-full px-2 py-6'>
        {properties.map((item, index)=>{
          return <div key={index}>
            <Card item={item} index={index}/>
          </div>
        })}
        

      </div>
      <div className=' w-full'>

        <MapBox properties={properties} />
       

      </div>

    </div>
     
    </>
  )
}


export const getServerSideProps =async ()=>{
  const resp = await fetchProperties();
  let properties = resp
  // console.log({resp});
  return {
    props:{

      properties

    }
  }
}