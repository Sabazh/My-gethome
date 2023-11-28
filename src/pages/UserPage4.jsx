import React from 'react'
import { Button } from '../components/Inputs/Button'
import { UserPageBar } from '../components/UserPageBar'
import { SMUserPageBar } from '../components/SM-UserPageBar'

function UserPage4() {
  return (
    <div>
      <div className='sm:hidden px-2-0 mt-2-3'>
        <SMUserPageBar title={'ანგარიშის რედაქტირება'}/>
        <div className='flex-row p-2-0 mt-2-0 bg-white rounded-1-0'>
          <div className='flex items-center gap-6-4'>
            <img src='/public/images/static/Avatar.png' className='w-7-0'/>
            <div className="flex items-center justify-center h-4-4 w-17-5 uppercase font-fB text-1-2 rounded-4-6 border-solid border-0-1 border-orange text-orange hover:bg-orange hover:text-white">
              <button>ფოტოს ატვირთვა</button>
            </div>
          </div>
          <div className='mt-2-3'>
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
            <div className='flex-row mt-1-5 font-fB'>
              <label className='text-1-8 uppercase'>მობილური</label>
              <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
              </div>
            </div>
            <div className='flex-row mt-1-5 font-fB'>
              <label className='text-1-8 uppercase'>ელ-ფოსტა</label>
              <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
              </div>
            </div>
            <div className='flex items-center justify-center mt-3-0 w-full h-5-0 rounded-10-0 bg-orange text-white'>
              <button className='font-fB text-1-6 uppercase'>განახლება</button>
            </div>
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
              <div className='flex gap-5-0'>
                <img src='/public/images/static/Avatar.png' className='w-13-0'/>
                <div className='flex-row font-fB uppercase'>
                  <h4 className='mt-2-5 text-2-0'>სურათის შეცვლა</h4>
                  <div className="h-4-4 mt-2-0 pt-0-7 rounded-4-6 border-solid border-0-1 border-orange text-orange hover:bg-orange hover:text-white">
                    <button className="w-full text-1-2">ფოტოს ატვირთვა</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-1-0 mt-5-0'>
                <div className='flex-row w-54-5 font-fB text-1-6'>
                  <label className='text-2-0 uppercase'>სახელი</label>
                  <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                    <input type='text' placeholder='სალ' className='bg-grey-05 outline-none'/>
                  </div>
                </div>
                <div className='flex-row w-54-5 font-fB text-1-6'>
                  <label className='text-2-0 uppercase'>გვარი</label>
                  <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                    <input type='text' placeholder='სალომე' className='bg-grey-05 outline-none'/>
                  </div>
                </div>
              </div>
              <div className='flex gap-1-0 mt-5-0'>
                <div className='flex-row w-54-5  font-fB text-1-6'>
                  <label className='text-2-0 uppercase'>მობილური</label>
                  <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                    <input type='text' placeholder='598882233' className='bg-grey-05 outline-none'/>
                  </div>
                </div>
                <div className='flex-row w-54-5 font-fB text-1-6'>
                  <label className='text-2-0 uppercase'>ელ-ფოსტა</label>
                  <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                    <input type='text' placeholder='sal@gmail.com' className='bg-grey-05 outline-none'/>
                  </div>
                </div>
              </div>
              <div className='flex mt-2-0 justify-end '>
                <Button size='medium'>განახლება</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage4