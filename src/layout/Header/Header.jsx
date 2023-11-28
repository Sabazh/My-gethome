import { useContext, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { Link } from 'react-router-dom';
import { Login } from '@/components/Popups/Login';
import Filter from './Filter';
import LangSwitcher from './LangSwitcher';
import ActiveLogin from './ActiveLogin';
import countryList from '../../dummyData/countryList';

const Header = () => {
  const { loginVisible, loginHandler, isLoggedIn } = useContext(AppContext);
  const [smFilter, setSmFilter] = useState(false);

  const showSmFilter = () => {
    setSmFilter((prev) => !prev);
  }

  return (
    <div>
      <div className="bg-white-03">
        {loginVisible && <Login />}
        <div>
          <header className="container flex items-center justify-between py-2-0 sm:pt-5-0 sm:pb-6-0">
            <Link to="/">
              <img src="/images/logo.svg" alt="gethome" />
            </Link>
            <div className="sm:block hidden">
              <Filter />
            </div>
            <div className="flex items-center gap-0-5">
              <LangSwitcher />
              {isLoggedIn ? (
                <ActiveLogin />
              ) : (
                <button onClick={() => loginHandler(true)}>
                  <img src="/images/profile.svg" alt="profile" />
                </button>
              )}
            </div>
          </header>
        </div>
      </div>
      <div className='sm:hidden px-1-8 mb-3-0 mt-1-0 p-1-0 h-6-0 bg-white rounded-3-0'>
        <div className='flex rounded-3-0'>
            <button>
              <img src="/images/search.svg" className="w-4-4" />
            </button>
            <div className='flex-row ml-1-0 font-fR'>
              <h5 className='font-fB text-1-5'>დაიწყე ძიება</h5>
              <p className='uppercase text-0-9 text-grey-02'>საძიებო სიტყვა, ID ან ტელეფონის ნომერი</p>
            </div>
            <div className='flex items-center justify-center ml-3-0'>
              <button onClick={showSmFilter}><img src='/public/images/sliders-horizontal-alt.svg'/></button>
            </div>
          </div>
      </div>
      {smFilter && (
          <div className='fixed overflow-auto h-100-percent top-0 w-full p-2-0 bg-white-03 z-4'>
            <button className="absolute top-1-0 right-2-0" onClick={showSmFilter}>
              <img src="/images/close.svg" alt="X" />
            </button>
            <div className='flex'>
              <button>
                <img src="/images/search.svg" className="w-4-4" />
              </button>
              <div className='flex items-center justify-center ml-1-0 font-fR'>
                <p className='text-1-2 text-grey-02'>საძიებო სიტყვა, ID ან ტელეფონის ნომერი</p>
              </div>
            </div>
            <div className='grid gap-1-2 mt-3-4'>
              <h4 className='uppercase text-1-8 font-fB'>გარიგების და ქონების ტიპი</h4>
              <div className='p-2-0 font-fR uppercase text-1-3 rounded-1-0 bg-white'>
                <h5 className='font-fB text-1-6'>გარიგების ტიპი</h5>
                <button className='absolute right-3-0 top-15-5'><img src='/public/images/angle-down-small.svg' className='w-3-0'/></button>
                <div className='grid mt-2-0 gap-1-0'>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-10-6">იყიდება</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-12-4">გირავდება</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-12-4">ქირავდება</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-19-4">ქირავდება დღიურად</button>
                </div>
              </div>
              <div className='p-2-0 font-fR uppercase text-1-3 rounded-1-0 bg-white'>
                <h5 className='font-fB text-1-6'>ქონების ტიპი</h5>
                <button className='absolute right-3-0 top-44-5 rotate-180'><img src='/public/images/angle-down-small.svg' className='w-3-0'/></button>
                <div className='grid mt-2-0 gap-1-0'>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-9-8">ბინები</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-21-0">სახლები და აგარაკები</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-21-0">კომერციული ფართები</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-17-0">მიწის ნაკვეთები</button>
                  <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white w-14-0">სასტუმროები</button>
                </div>
              </div>
            </div>
            <div className='mt-3-6 bg-white'>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center p-0-5 w-26-0 h-4-8 text-1-3 font-fR uppercase bg-grey-03 rounded-10-0">
                  <button className="rounded-10-0 bg-white px-2-4 py-1-0">ქალაქი</button>
                  <button className="px-2-4 py-1-0">რაიონი/უბანი</button>
                </div>
              </div>
              <div className="py-2-0 pl-2-0 mt-1-2 grid gap-1-0 h-58-8 overflow-auto">
              {countryList.map((item) => (
                <button key={item.id} className="text-left font-fR text-1-3 uppercase hover:text-orange">
                  {item.title}
                </button>
              ))}
              </div>
            </div>
            <div className='mt-3-5'>
              <div className="flex text-1-8 uppercase">
                <p className="font-fB">ფასი</p>
                <div className="h-3-0 rounded-1-4 overflow-hidden bg-grey-03 flex flex-none ml-23-0 px-0-2 items-center gap-0-2">
                  <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center">
                    <img src="/images/dollar.svg" alt="dollar" />
                  </button>
                  <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center bg-orange">
                    <img src="/images/lari-white.svg" alt="lari-white" />
                  </button>
                </div>
              </div>
              <div className='mt-1-2 p-2-0 bg-white rounded-1-0'>
                <div className="flex gap-2-0">
                  <div className="flex gap-0-5 uppercase ">
                    <input type="radio" className="w-2-0" />
                    <p className="font-fR">სრული</p>
                  </div>
                  <div>
                    <div className="flex gap-0-5  uppercase ">
                      <input type="radio" className="w-2-0 " />
                      <p className="font-fR">1 მ2-ის ფასი</p>
                    </div>
                  </div>
                </div>
                <div className="grid mt-3-0 gap-1-0">
                <input
                  type="text"
                  placeholder="დან"
                  className="px-1-5 py-1-3 border-solid border-0-1 border-grey-02 rounded-0-5 bg-grey-03 outline-none"
                />
                <input
                  type="text"
                  placeholder="მდე"
                  className="px-1-5 py-1-3 border-solid border-0-1 border-grey-02 rounded-0-5 bg-grey-03 outline-none"
                />
              </div>
              </div>
            </div>
            <div className='flex gap-1-0 mt-4-6 font-fB uppercase text-2-0'>
              <button className='px-2-0 py-1-8 rounded-10-0'>გასუფთავება</button>
              <button className='text-white bg-orange px-2-8 py-1-8 rounded-10-0'>შენახვა</button>
            </div>
          </div>
      )}
    </div>
  );
};

Header.propTypes = {};

export default Header;
