import React from 'react'
import { Button } from '../components/Inputs/Button'
import { UserPageBar } from '../components/UserPageBar'

const UserPage7 = () => {
  return (
  <div className="container">
    <div className="flex gap-1-6 text-4-0 font-fB uppercase">
      <h2>მომხმარებლის ID:</h2>
      <span className="text-orange">71228</span>
    </div>
    <div className="flex mt-4-0 mb-14-0 gap-2-0 h-90-8">
      <UserPageBar />
      <div className="w-full p-3-0 bg-white rounded-1-0">
        <div className='flex mt-12-7 justify-center items-center'>
          <h3 className='font-fB uppercase text-3-2'>ბალანსის შევსება</h3>
        </div>
        <div className='flex justify-center items-center mt-4-0'>
          <p className='font-fR text-2-0'>ბალანსის შევსება შესაძლებელია VISA და MasterCard ბარათებით.</p>
        </div>
        <div className='flex justify-center items-center mt-6-0 gap-2-0'>
          <button><img src='/public/images/static/MasterCard.jpg' className='w-8-4'/></button>
          <button><img src='/public/images/static/Visa.jpg' className='w-8-4'/></button>
        </div>
        <div className='flex justify-center items-center mt-6-0'>
          <div className='flex-row w-52-0 justify-center items-center font-fB'>
            <label className='text-2-0 uppercase'>შეიყვანეთ თანხა</label>
            <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
              <input type='text' placeholder='0.00' className='bg-grey-05 outline-none'/>
            </div>
            <div className='flex mt-2-0 justify-end '>
              <Button size='medium'>შევსება</Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-6-0 font-fR text-2-0'>
          <p className=''>ასევე შეგიძლიათ TBCPAY აპარატებიდან შეავსოთ ბალანსი. 
             შაწერეთ თქვენი <br/> 
             <span className='ml-20-0 font-fB text-2-4 text-orange'>ID:71227</span> და მიყევით ინსტრუქციას
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserPage7