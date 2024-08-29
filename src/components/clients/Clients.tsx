import React from 'react'

export const Clients = () => {
  return (
    <section id='Clientes' className='bg-zinc-100'>    
      <div className='flex flex-col justify-center items-center py-12 '>
        <div>
          <h2 className='block antialiased tracking-normal  text-4xl font-semibold leading-[1.3] text-black-100 mb-4'> Nuestos  Clientes</h2>
        </div>

        <div className='flex flex-col w-11/12 h-fit  sm:flex-row sm:w-10/12 sm:justify-center sm:items-center gap-8 p-9'>          
            <div className="flex justify-center items-center h-36 w-full rounded-2xl bg-slate-500 p-1">
              <div className="flex justify-center items-center h-full w-full rounded-xl bg-zinc-100">CLiente 1</div>
            </div>
            <div className="flex justify-center items-center h-36 w-full rounded-2xl bg-slate-500 p-1">
              <div className="flex justify-center items-center h-full w-full rounded-xl bg-zinc-100">CLiente 2</div>
            </div>
            <div className="flex justify-center items-center h-36 w-full rounded-2xl bg-slate-500 p-1">
              <div className="flex justify-center items-center h-full w-full rounded-xl bg-zinc-100">CLiente 3</div>
            </div>
        </div>
      </div> 
    </section>
  ) 
}

export default Clients
