import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { Link } from 'react-router-dom';

const ActiveLogin = () => {
  const { isMenuOpen, menuHandler, isLoggedInHandler } = useContext(AppContext);

  return (
    <div className="relative flex">
      <Link to="/notes" className="hidden sm:block">
        <div className="px-1-9 py-1-0 bg-white uppercase rounded-2-9 border-solid border-0-1 border-orange mx-1-5">
          <button className="font-fB text-1-4 text-orange">განცხადების დამატება</button>
        </div>
      </Link>
      <button className="w-4-4" onClick={menuHandler}>
        <img src="/images/static/Avatar.png" alt="saba@gmail.com" />
      </button>
      {isMenuOpen && (
        <div className="fixed sm:absolute w-full sm:w-auto top-0 sm:top-100-percent right-0 sm:pt-1-0 text-black z-2">
          <div className="bg-white pb-2-0 sm:w-33-0 h-84-0 sm:h-auto rounded-1-2">
            <h4 className='text-2-0 uppercase font-fB pt-2-3 pl-1-9 sm:hidden'>პროფილი</h4>
            <button className="absolute top-2-0 right-2-0" onClick={menuHandler}>
              <img src="/images/close.svg" alt="X" />
            </button>
            <div className="flex gap-1-5">
              <div className="pt-3-0 pl-3-0">
                <Link to="/userpage1" onClick={menuHandler}>
                  <button>
                    <img src="/images/static/Avatar.png" className="w-6-4 hover:w-6-8" />
                  </button>
                </Link>
              </div>
              <div className="pt-4-3 w-9-9 h-3-8 uppercase font-fB text-1-6">
                <p className="">ქეთევან მეტრეველი</p>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="mt-2-0 text-grey-02 h-0-5 w-26-2" />
            </div>
            <div className="text-grey-04 sm:text-black mt-1-2 ml-3-0 font-fR text-1-5">
              <div className="flex gap-1-0 hover:font-fB">
                <img src="/src/assets/list.svg" />
                <Link to="/userpage1" onClick={menuHandler}>
                  <button>ჩემი განცხადებები</button>
                </Link>
              </div>
              <div className="flex gap-1-0 mt-1-0 hover:font-fB">
                <img src="/src/assets/heart.svg" />
                <Link to="/userpage2" onClick={menuHandler}>
                  <button>ფავორიტები</button>
                </Link>
              </div>
              <div className="flex gap-1-0 mt-1-0 hover:font-fB">
                <img src="/src/assets/buildings-alt.svg" />
                <Link to="/userpage3" onClick={menuHandler}>
                  <button>კომპანიები</button>
                </Link>
              </div>
              <div className="flex gap-1-0 mt-1-0 hover:font-fB">
                <img src="/src/assets/user.svg" />
                <Link to="/userpage4" onClick={menuHandler}>
                  <button>ანგარიშის რედაქტირება</button>
                </Link>
              </div>
              <div className="flex gap-1-0 mt-1-0 hover:font-fB">
                <img src="/src/assets/shield.svg" />
                <Link to="/userpage5" onClick={menuHandler}>
                  <button>პაროლის შეცვლა</button>
                </Link>
              </div>
              <div className="flex gap-1-0 mt-1-0 hover:font-fB">
                <img src="/src/assets/credit-card-convert.svg" />
                <Link to="/userpage6" onClick={menuHandler}>
                  <button className="">ტრანზაქციები</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="mt-2-0 text-grey-02 h-0-5 w-26-2" />
            </div>
            <div className="text-grey-04 sm:text-black mt-1-2 ml-3-0">
              <div className="flex gap-1-0 font-fR ">
                <img src="/src/assets/money-bills.svg" />
                <Link to="/userpage7" onClick={menuHandler}>
                  <button className="hover:font-fB">ბალანსის შევსება</button>
                </Link>
                <div className="flex text-orange text-1-6">
                  <p className="ml-3-0">0.00</p>
                  <img src="/images/lari-orange.svg" />
                </div>
              </div>
              <div className="flex gap-1-0 mt-1-0 font-fR hover:font-fB" onClick={() => isLoggedInHandler(false)}>
                <img src="/src/assets/log-out.svg" />
                <button>გასვლა</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveLogin;
