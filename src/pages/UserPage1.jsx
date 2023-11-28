import { Link } from 'react-router-dom';
import { SMUserPageBar } from '../components/SM-UserPageBar';

const UserPage1 = () => {
  return (
    <div>
      <div className='sm:hidden px-2-0 mt-2-3'>
        <SMUserPageBar title={'ჩემი განცხადებები'}/>
        <div className="flex h-16-5 px-1-0 py-2-0 mb-6-0 bg-white rounded-1-0 gap-1-0 font-fR text-1-2 uppercase">
          <div className="flex gap-1-0 h-2-4 text-orange">
            <button>აქტიური</button>
          </div>
          <div className="flex gap-1-0 h-2-4">
            <button className="hover:text-orange">გათიშული</button>
          </div>
          <div className="flex gap-1-0 h-2-4">
            <button className="hover:text-orange">დაბლოკილი</button>
          </div>
          <div className="flex gap-1-0 h-2-4">
            <button className="hover:text-orange">ვადაგასული</button>
          </div>
        </div>
      </div>

      <div className="hidden sm:block container">
        <div className="flex gap-1-6 text-4-0 font-fB uppercase">
          <h2>მომხმარებლის ID:</h2>
          <span className="text-orange">71228</span>
        </div>
        <div className="flex mt-4-0 gap-2-0">
          <div className="flex-row w-46-0 bg-white rounded-1-0">
            <div className="px-3-0 py-5-0 text-2-0 font-fR uppercase">
              <div className="flex gap-1-0">
                <img src="/src/assets/list-black.svg" className="w-2-0" />
                <button className="font-fB ">ჩემი განცხადებები</button>
              </div>
              <Link to="/userpage2">
                <div className="flex gap-1-0 mt-3-0">
                  <img src="/src/assets/heart.svg" className="w-2-0" />
                  <button className="text-grey-02 hover:text-black">ფავორიტები</button>
                </div>
              </Link>
              <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/buildings-alt.svg" className="w-2-0" />
                <button className="text-grey-02 hover:text-black">კომპანიები</button>
              </div>
              <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/user.svg" className="w-2-0" />
                <button className="text-grey-02 hover:text-black">ანგარიშის რედაქტირება</button>
              </div>
              <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/shield.svg" className="w-2-0" />
                <button className="text-grey-02 hover:text-black">პაროლის შეცვლა</button>
              </div>
              <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/credit-card-convert.svg" className="w-2-0" />
                <button className="text-grey-02 hover:text-black">ტრანზაქციები</button>
              </div>
              <div className="flex gap-1-0 mt-3-0">
                <img src="/src/assets/money-bills.svg" />
                <button className="text-grey-02 hover:text-black">ბალანსის შევსება</button>
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
          <div className="flex w-116-0 px-3-0 py-5-0 bg-white rounded-1-0 gap-16-5 font-fR text-2-0 uppercase">
            <div className="flex gap-1-0 h-2-4 text-orange">
              <button>აქტიური</button>
              <p>[0]</p>
            </div>
            <div className="flex gap-1-0 h-2-4">
              <button className="hover:text-orange">გათიშული</button>
              <p>[0]</p>
            </div>
            <div className="flex gap-1-0 h-2-4">
              <button className="hover:text-orange">დაბლოკილი</button>
              <p>[0]</p>
            </div>
            <div className="flex gap-1-0 h-2-4">
              <button className="hover:text-orange">ვადაგასული</button>
              <p>[0]</p>
            </div>
          </div>
        </div>
        <div className="flex-row w-46-0 mt-2-0 mb-14-0 bg-lightgreen rounded-1-0 pl-3-0 py-5-0 uppercase">
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
    </div>
  );
};

export default UserPage1;
