import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { Button } from '../components/Inputs/Button'

function UserPage8() {
    const { menuHandler } = useContext(AppContext);
  return (
    <div>
        <div className='sm:hidden px-2-0 mt-2-3'>
            <h3 className='text-2-0 font-fB uppercase'>საკონტაქტო ინფორმაცია</h3>
            <div className='absolute top-2-2 right-2-0 w-4-4'>         
                <button onClick={menuHandler}>
                    <img src="/images/static/Avatar.png" alt="saba@gmail.com" />
                </button>
            </div>
            <div className='flex-row p-2-0 mt-4-0 bg-white rounded-1-0'>
                <div className='flex-row font-fB'>
                    <label className='text-1-8 uppercase'>სახელი *</label>
                    <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                        <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
                    </div>
                </div>
                <div className='flex-row mt-1-5 font-fB'>
                    <label className='text-1-8 uppercase'>ელ-ფოსტა *</label>
                    <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                        <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
                    </div>
                </div>
                <div className='flex-row mt-1-5 font-fB'>
                    <label className='text-1-8 uppercase'>სათაური *</label>
                    <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                        <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
                    </div>
                </div>
                <div className='flex-row mt-1-5 font-fB'>
                    <label className='text-1-8 uppercase'>წერილი *</label>
                    <div className='mt-1-2 h-18-6 p-2-0 bg-grey-05 rounded-1-0'>
                        <textarea className='w-full h-full bg-grey-05 outline-none text-1-6 font-fB'></textarea>
                    </div>
                </div>
                <div className='flex-row mt-1-5 font-fB'>
                    <label className='text-1-8 uppercase'>კოდი *</label>
                    <div className='mt-1-2 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                        <input type='text' className='bg-grey-05 outline-none text-1-6 font-fB'/>
                    </div>
                </div>
                <div className='mt-1-5 h-5-8 p-2-0 bg-grey-05 rounded-1-0'>
                    <input type='text' placeholder='კოდის ფოტოს ადგილი' className='bg-grey-05 outline-none text-1-6 font-fB'/>
                </div>
                <div className='flex items-center justify-center mt-3-0 w-full h-5-0 rounded-10-0 bg-orange text-white'>
                    <button className='font-fB text-1-6 uppercase'>განახლება</button>
                </div>
            </div>
            <div className='mt-2-0'>
                <img src='/public/images/static/flat-big.png' className='rounded-1-0'/>
            </div>
        </div>

        <div className='hidden sm:block container'>
            <h2 className='font-fB uppercase text-4-0'>საკონტაქტო ინფორმაცია</h2>
            <div className='flex mt-8-0 px-3-0 py-5-0 gap-5-0 bg-white rounded-3-0 '>
                <div className='flex-row'>
                    <div className='flex-row w-54-5 font-fB text-1-6'>
                        <label className='text-2-0 uppercase'>სახელი *</label>
                        <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                            <input type='text' placeholder='სალ' className='bg-grey-05 outline-none'/>
                        </div>
                    </div>
                    <div className='flex-row w-54-5 mt-3-0 font-fB text-1-6'>
                        <label className='text-2-0 uppercase'>ელ-ფოსტა *</label>
                        <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                            <input type='text' placeholder='სალ' className='bg-grey-05 outline-none'/>
                        </div>
                    </div>
                    <div className='flex-row w-54-5 mt-3-0 font-fB text-1-6'>
                        <label className='text-2-0 uppercase'>სათაური *</label>
                        <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                            <input type='text' placeholder='სალ' className='bg-grey-05 outline-none'/>
                        </div>
                    </div>
                    <div className='flex-row w-54-5 mt-3-0 text-1-6'>
                        <label className='text-2-0 uppercase font-fB'>წერილი *</label>
                        <div className='mt-2-0 p-2-1 bg-grey-05 h-15-0 rounded-1-0'>
                            <textarea placeholder='სალ' className='w-full h-full bg-grey-05 outline-none'></textarea>
                        </div>
                    </div>
                    <div className='flex-row w-54-5 mt-3-0 font-fB text-1-6'>
                        <label className='text-2-0 uppercase'>სახელი *</label>
                        <div className='mt-2-0 h-6-4 p-2-1 bg-grey-05 rounded-1-0'>
                            <input type='text' placeholder='სალ' className='bg-grey-05 outline-none'/>
                        </div>
                    </div>
                    <div className='flex mt-3-0 justify-end'>
                        <Button size='medium'>განახლება</Button>
                    </div>
                </div>
                <div className='mt-4-0'>
                    <img src='/public/images/static/flat-big.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPage8