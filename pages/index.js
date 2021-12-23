import Head from 'next/head'
import { useState } from 'react';

export default function Home() {

  const [data, dataList] = useState([])
  const [location, locationList] = useState(['x']);
  const [minCustomers, minCustomersList] = useState(['x']);
  const [maxCustomers, maxCustomersList] = useState(['x']);
  const [avgCoockies, avgCoockiesList] = useState(['x']);

  const formHandler = (e) => {
    e.preventDefault();
    let newData = {
      location: e.target.location.value,
      minCustomers: e.target.minimum.value,
      maxCustomers: e.target.maximum.value,
      avgCoockies: e.target.average.value
    };
    dataList([...data, newData])
    locationList(newData.location)
    minCustomersList(newData.minCustomers)
    maxCustomersList(newData.maxCustomers)
    avgCoockiesList(newData.avgCoockies)
  }
  
  return (
    <>
      <head>
        <title>cookie stand admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <div className='flex justify-between bg-teal-600 py-6 items-center'>
            <h1 className='text-3xl font-bold mx-1'>Cookie Stand Admin</h1>
          </div>
        </header>
        <main>
          <div className='w-9/12 bg-teal-400 mx-auto my-5 p-2 rounded'>
            <div className='p-2'>
              <h2 className='flex justify-center text-1xl font-bold mx-1 my-3'>Create Cookie Stand</h2>
              <form onSubmit={formHandler}>
                <span className='flex justify-center'>
                  <label className='mx-6' htmlFor="location">Location:</label>
                  <input name='location' id='location' type="text" className=' justify-center w-4/5 mx-auto my-1/4 h-4' />
                </span>
                <div className='text-[0.8rem] flex justify-center flex-row space-x-4 space-x-reverse grid gap-4 grid-cols-4'>
                  <span >
                    <label className='text-[0.8rem] flex justify-center text-sm' htmlFor="Minimum">Minimum Customers per Hours</label>
                    <input name='minimum' id='Minimum' type="text" className='flex inline-flex justify-center mx-8' />
                  </span>
                  <span className='gap-x-px'>
                    <label className='text-[0.8rem] flex justify-center text-sm' htmlFor="Maximum"><h5>Maximum Customers per Hours</h5></label>
                    <input name='maximum' id='Maximum' type="text" className='flex inline-flex justify-center mx-8' />
                  </span>
                  <span >
                    <label name='' className='text-[0.8rem] flex justify-center text-sm' htmlFor="Average">Average Cookies Per Sale</label>
                    <input name='average' id='Average' type="text" className='flex inline-flex justify-center mx-8' />
                  </span>
                  <span>
                    <button className='h-18 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 bg-teal-900 p-3'>Create</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <h3 className='flex justify-center text-[0.8rem]'>Report Table Coming Soon...</h3>
          <div className='flex justify-center'>
            <p>&#123; "location":"{location}", "minCustomers":"{minCustomers}", "maxCustomers":"{maxCustomers}", "avgCookies":"{avgCoockies}",  &#125;</p>
          </div>
        </main>
        <footer>
          <div className='flex justify-between bg-teal-600 py-4 items-center'>
            <p className='text-1xl font-bold mx-1'>&copy; 2021</p>
          </div>
        </footer>
      </body>
    </>
  )
}
