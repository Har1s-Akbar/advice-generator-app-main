import React from 'react'
import divid from '../images/pattern-divider-desktop.svg'
import dice from '../images/icon-dice.svg'
import {useState, useEffect} from 'react'

function Header() {

  const [advice, setAdvice] = useState([])

  const fetchdata = async() => {
    try{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, []);

  if(advice.length <= 0){
    return(
      <section>
        <h1>
          loading.....
        </h1>
      </section>
    )
  }

  return (
    <section className='bg-dark-blue h-screen flex justify-center items-center'>
      <section className='w-full'>
      <div className='lg:w-1/3 w-11/12 indent-2 bg-dark-gblue relative m-auto rounded-lg p-3'>
        <h1 className='text-neon py-5 tracking-widest text-sm text-center font-semibold lg:font-bold'>ADVICE #{advice?.slip.id}</h1>
        <div className='text-cyan my-3 w-10/12 m-auto subpixel-antialiased leading-relaxed text-center font-bold lg:text-xl text-base'>
          {advice?.slip.advice}
        </div>
        <img className='m-auto my-16' src={divid} alt="" />
      </div>
      <div className='rounded-[100%] p-5 flex justify-center bg-neon m-auto w-16' style={{position: 'relative', bottom: '30px'}}>
      <button className='w-5 m-auto bg-neon' onClick={fetchdata}><img src={dice} alt="" /></button>
      </div>
      </section>
    </section>
  )
}

export default Header