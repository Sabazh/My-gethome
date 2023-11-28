import React from 'react'
import { Button } from '../components/Inputs/Button'
import { UserPageBar } from '../components/UserPageBar'
import { SMUserPageBar } from '../components/SM-UserPageBar'

function UserPage5() {
  return (
    <div>
      <div className='sm:hidden px-2-0 mt-2-3'>
        <SMUserPageBar title={'პაროლის შეცვლა'}/>
        <div className='flex-row p-2-0 mt-2-0 bg-white rounded-1-0'>
          <div className='flex-row font-fB'>
            <label className='text-1-8 uppercase'>სახელი</label>
            <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
              <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
            </div>
          </div>
          <div className='flex-row mt-1-5 font-fB'>
            <label className='text-1-8 uppercase'>გვარი</label>
            <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
              <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
            </div>
          </div>
          <div className='flex items-center justify-center mt-3-0 w-full h-5-0 rounded-10-0 bg-orange text-white'>
            <button className='font-fB text-1-6 uppercase'>განახლება</button>
          </div>
        </div>
      </div>

      <div className="hidden sm:block container">
        <div className="flex gap-1-6 text-4-0 font-fB uppercase">
          <h2>მომხმარებლის ID:</h2>
          <span className="text-orange">71228</span>
        </div>
        <div className="flex mt-4-0 mb-14-0 gap-2-0 h-90-8">
          <UserPageBar />
          <div className="w-full px-3-0 py-5-0 bg-white rounded-1-0">
            <div className='flex-row'>
              <div className='flex-row'>
                <label className='text-2-0 uppercase font-fB'>ახალი პაროლი</label>
                <div className='w-full h-6-4 bg-grey-05 rounded-1-0 mt-2-0 p-2-2'>
                  <input type='password' placeholder='*********' className='bg-grey-05 outline-none'/>
                </div>
              </div>
              <div className='flex-row mt-5-0'>
                <label className='text-2-0 uppercase font-fB'>გაიმეორეთ ახალი პაროლი</label>
                <div className='w-full h-6-4 bg-grey-05 rounded-1-0 mt-2-0 p-2-2'>
                  <input type='password' placeholder='*********' className='bg-grey-05 outline-none'/>
                </div>
              </div>
              <div className='flex mt-3-0 justify-end '>
                <Button size='medium'>შეცვლა</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage5