import React from 'react'
import { UserPageBar } from '../components/UserPageBar'

function UserPage6() {
  return (
  <div className="container">
    <div className="flex gap-1-6 text-4-0 font-fB uppercase">
      <h2>მომხმარებლის ID:</h2>
      <span className="text-orange">71228</span>
    </div>
    <div className="flex mt-4-0 mb-14-0 gap-2-0 h-90-8">
      <UserPageBar />
      <div className="w-full p-3-0 bg-white rounded-1-0">
        <div className='flex-row'>
          <div className='flex items-center justify-center gap-1-0'>
            <div className='flex w-87-5 h-6-4 bg-grey-05 rounded-10-0'>
              <div className='bg-grey-05 uppercase rounded-10-0'>
                <input
                  placeholder="საძიებო სიტყვა, ID ან ტელეფონის ნომერი"
                  className="my-2-5 ml-3-3 mr-52-5 h-1-4 w-26-5 bg-grey-05 font-fR text-black-02 border-none outline-none text-1-2"
                />
              </div>
              <button>
                <img src="/images/search.svg" className="w-4-4" />
              </button>
            </div>
              <div className="flex h-6-4 px-1-5 py-2-2 gap-6-3 bg-grey-05 rounded-1-0 items-center">
                <h4 className='text-1-4 font-fB uppercase'>რაოდენობა</h4>
                <button>
                  <img src='/public/images/angle-down-small.svg' className='w-3-0'/>
                </button>
              </div>
          </div>
          <div className='w-full my-3-0 text-left text-1-8 font-fR uppercase'>
            <thead>
              <tr className='flex'>
                <th className='ml-0-6'>#</th>
                <th className='ml-7-0'>დრო</th>
                <th className='ml-12-7'>ტიპი</th>
                <th className='ml-9-0'>თანხა</th>
                <th className='ml-5-0'>ბალანსი</th>
                <th className='ml-4-8'>განცხადება</th>
                <th className='ml-4-0'>კომენტარი</th>
              </tr>
            </thead>
          </div>
          <table className='w-full'>
            <tbody className='text-1-5 font-fR mt-3-0'>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td className='w-11-0'>$2.500</td>
                <td className='w-13-0'>$94206.00</td>
                <td className='w-15-0'>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4 bg-lightgreen py-2-2'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
              <tr className='h-6-4'>
                <td># 790841</td>
                <td>2022/06/28  00:24</td>
                <td>გადარიცხვა</td>
                <td>$2.500</td>
                <td>$94206.00</td>
                <td>ID:82324</td>
                <td>VIP+ ჩართვა 27 დღე. 54 ლარი</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default UserPage6