import { Button } from '../components/Inputs/Button';
import { SMUserPageBar } from '../components/SM-UserPageBar';
import { UserPageBar } from '../components/UserPageBar';

const UserPage2 = () => {
  return (
    <div>
      <div className='sm:hidden px-2-0 mt-2-3'>
        <SMUserPageBar title={'ფავორიტები'}/>
        <div className='flex-row mt-2-0 mb-6-0 bg-white rounded-1-0'>
          <img src="/public/images/static/flat.png" className="w-full h-full object-cover rounded-1-0" />
          <div className='pl-1-2 my-2-0'>
            <h4 className='text-1-8 uppercase font-fB'>ქირავდება 3  ოთახიანი  ბინა</h4>
            <div className="flex mt-0-5 gap-1-4 text-grey-04">
              <div className="flex gap-0-5 items-center">
                <p className="text-1-4 font-fB">ID:</p>
                <span className="text-1-2 font-fR">100767</span>
              </div>
              <div className="flex gap-0-5 items-center">
                <img src="/public/images/calendar.svg" className="w-1-8" />
                <span className="text-1-2 font-fR">06/10/2022</span>
              </div>
            </div>
            <p className='mt-1-5 text-1-6 font-fR'>იყიდება ბინა ბაკურიანში პრემიუმ კლასის სასტუმრო კომპლექსში 'რუმს ჰოტელი კოხტა'. 
              მე 3 სართული. სრულად გარემონტებული, ავეჯითა და ტექნიკით აღჭურვილი, 
              მდებარეობს საბაგირო კოხტას ძირში. აპარტამენტში არის ინტერნეტ-ტელევიზია, 
              24 საათიანი დაცვა, იზოლირებული ღია აივანი, საპარკინგე ადგილი ეზოში. ორი ლიფტი.
            </p>
            <div className='flex mt-2-2'>
              <div className="flex">
                <p className="font-fB text-orange text-2-4">227.583</p>
                <img src="/public/images/lari-orange.svg" className="w-2-0 mt-0-3" />
              </div>
              <div className="flex items-center ml-13-7">
                <Button size="small">წაშლა</Button>
              </div>
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
          <div className="w-full px-3-0 pt-5-0 bg-white rounded-1-0">
            <div className="flex rounded-1-0 bg-white-04">
              <div>
                <img src="/public/images/static/flat.png" className="w-full h-full object-cover rounded-1-0" />
              </div>
              <div className="flex-row px-2-5 py-2-0 w-full">
                <div className="flex">
                  <h3 className="font-fB text-1-6 uppercase">ქირავდება 3 ოთახიანი ბინა</h3>
                  <div className="flex ml-34-5">
                    <p className="font-fB text-orange text-2-0">227.583</p>
                    <img src="/public/images/lari-orange.svg" className="w-1-4 h-1-4 mt-1-0" />
                  </div>
                  <div className="ml-1-6 w-8-2">
                    <Button size="small">წაშლა</Button>
                  </div>
                </div>
                <div className="flex mt-0-5 gap-2-5 text-grey-04">
                  <div className="flex gap-0-5 items-center ">
                    <p className="text-1-8 font-fB">ID:</p>
                    <span className="text-1-5 font-fR">100767</span>
                  </div>
                  <div className="flex gap-1-0 items-center">
                    <img src="/public/images/calendar.svg" className="w-2-4" />
                    <span className="text-1-5 font-fR">06/10/2022</span>
                  </div>
                </div>
                <div className="my-2-0 ">
                  <p className="text-1-6 font-fR">
                    იყიდება ბინა ბაკურიანში პრემიუმ კლასის სასტუმრო კომპლექსში 'რუმს ჰოტელი კოხტა'. მე 3 სართული. სრულად გარემონტებული, ავეჯითა და
                    ტექნიკით აღჭურვილი, მდებარეობს საბაგირო კოხტას ძირში. აპარტამენტში არის ინტერნეტ-ტელევიზია, 24 საათიანი დაცვა, იზოლირებული ღია
                    აივანი, საპარკინგე ადგილი ეზოში. ორი ლიფტი.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage2;
