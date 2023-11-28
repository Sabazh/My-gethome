import React from 'react'
import { Link } from 'react-router-dom'

const UserPageBar = () => {
  return (
    <div className="flex-row w-46-0">
        <div className="flex-row w-46-0 bg-white rounded-1-0">
        <div className="px-3-0 py-5-0 text-2-0 font-fR uppercase">
            <div className="flex gap-1-0">
                <img src="/src/assets/list-black.svg" className="w-2-0" />
                <Link to='/userpage1'>
                <button className="text-grey-02 hover:text-black">ჩემი განცხადებები</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/heart.svg" className="w-2-0" />
                <Link to='/userpage2'>
                <button className="text-grey-02 hover:text-black">ფავორიტები</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/buildings-alt.svg" className="w-2-0" />
                <Link to='/userpage3'>
                <button className="text-grey-02 hover:text-black">კომპანიები</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/user.svg" className="w-2-0" />
                <Link to='/userpage4'>
                <button className="text-grey-02 hover:text-black">ანგარიშის რედაქტირება</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/shield.svg" className="w-2-0" />
                <Link to='/userpage5'>
                <button className="text-grey-02 hover:text-black">პაროლის შეცვლა</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/credit-card-convert.svg" className="w-2-0" />
                <Link to='/userpage6'>
                <button className="text-grey-02 hover:text-black">ტრანზაქციები</button>
                </Link>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/money-bills.svg" />
                <Link to='/userpage7'>
                <button className="text-grey-02 hover:text-black">ბალანსის შევსება</button>
                </Link>
                <div className="flex text-orange text-1-6">
                    <p className="ml-10-0 text-2-0 ">0.00</p>
                    <img src="/public/images/lari-orange.svg" />
                </div>
            </div>
            <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/log-out.svg" className="w-2-0" />
                <button className="text-grey-02 hover:text-black">გასვლა</button>
            </div>
        </div>
        </div>
        <div className="flex-row w-46-0 mt-2-0 px-3-0 bg-lightgreen rounded-1-0 pl-3-0 py-5-0 uppercase">
            <h3 className="text-2-8 font-fB">ფასიანი სერვისები</h3>
            <div className="flex-row mt-3-0 text-2-0 font-fR uppercase">
                <div className="flex gap-1-0">
                <img src="/src/assets/bullet.svg" className="w-1-0" />
                <div className="flex">
                    <p>SUPER VIP სტატუსი 1 დღე - 3.00</p>
                    <img src="/public/images/lari.svg" className="w-1-4" />
                </div>
                </div>
                <div className="flex gap-1-0 mt-1-5">
                <img src="/src/assets/bullet.svg" className="w-1-0" />
                <div className="flex">
                    <p>VIP+ სტატუსი ერთი დღე - 2.00</p>
                    <img src="/public/images/lari.svg" className="w-1-4" />
                </div>
                </div>
                <div className="flex gap-1-0 mt-1-5">
                <img src="/src/assets/bullet.svg" className="w-1-0" />
                <div className="flex">
                    <p>VIP სტატუსი ერთი დღე - 1.00</p>
                    <img src="/public/images/lari.svg" className="w-1-4" />
                </div>
                </div>
                <div className="flex gap-1-0 mt-1-5">
                <img src="/src/assets/bullet.svg" className="w-1-0" />
                <div className="flex">
                    <p>ფერის შეცვლა ერთი დღე - 0.10</p>
                    <img src="/public/images/lari.svg" className="w-1-4" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPageBar;