import { Button } from '@/components/Inputs/Button';
import { FlatCardsSlider } from '@/components/FlatCardsSlider';
import data from '@/dummyData/flats';
import { Link } from 'react-router-dom';

const FlatDetail = () => {
  return (
    <div>
      <div className='sm:hidden'>
        <div className='relative'>
          < img src="/public/images/static/sm-flat.jpg" alt="" className="w-full h-full object-cover rounded-b-1-0"/>
        </div>
        <Link to="/">
        <img src="/images/swiperArrow.svg" alt="" className="rotate-180 w-3-0 absolute top-2-0 left-2-0"/>
        </Link>
        <div className='absolute w-3-0 top-2-0 right-5-5 rounded-50-percent bg-white p-0-5'>
            <img src='/public/images/share-black.svg' className='w-2-0'/>
        </div>
          <img src='/public/images/favorite-black.svg' className='absolute w-3-0 top-2-0 right-1-5 rounded-50-percent bg-white'/>
          <div className='absolute flex gap-1-0 px-0-8 py-0-4 bg-white rounded-0-5 top-20-0 right-2-0'>
            <img src='/public/images/gallery.svg' className='w-2-0'/>
            <p className='text-1-5 text-grey-04 font-fR'>1/10</p>
          </div>
          <div className='mt-3-0 px-2-0'>
            <div className='flex text-2-4 font-fB uppercase'>
              <h3 className=''>ქირავდება 3 ოთახიანი  ბინა</h3>
              <div className='flex mr-2-0'>
                <h3 className='text-orange'>227.583</h3>
                <img src='/public/images/lari-orange.svg' className='w-2-0 h-2-0 mt-0-9'/>
              </div>
            </div>
            <div className="flex items-center justify-between text-1-2 text-grey-04 uppercase font-fR">
              <div className="flex items-center gap-0-5">
                <img src="/images/location.svg" alt="location" />
                <span>თბილისი</span>
              </div>
              <div className="flex items-center gap-1-0 ">
                <div className="flex items-center gap-0-5">
                  <img src="/images/calendar.svg" alt="calendar" />
                  <span>06/10/2022</span>
                </div>
                <div className="flex items-center gap-0-5">
                  <img src="/images/eye.svg" alt="eye" />
                  <span>23562</span>
              </div>
              </div>
            </div>
            <div className='flex items-center mt-4-6'>
              <div className="w-8-5 h-8-5 rounded-full overflow-hidden mr-2-0">
                <img src="/images/static/Avatar.png" className="w-full h-full object-cover" />
              </div>
              <div className='flex-row'>
                <p className="flex w-full mb-0-5 text-1-6 font-fR text-black gap-1-0 items-center justify-center">
                  ქეთევანი <span className="italic text-1-4 ">[ყველა განცხადება]</span>
                </p>
                <div className='mb-0-5'>
                  <a href="tel:598829202" className="text-2-4 font-fB text-orange">
                    598829202
                  </a>
                </div>
                <Button size="small">მესაკუთრე</Button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2-0 text-1-0 font-fR gap-0-3">
              <p>ახალი გარემონტებული</p>
              <div className="w-0-1 h-1-5 bg-grey-01"></div>
                <p>სართული <span className="font-fB">5</span></p>
              <div className="w-0-1 h-1-5 bg-grey-01"></div>
                <p>
                  ფართი <span className="font-fB">100 მ2</span>
                </p>
              <div className="w-0-1 h-1-5 bg-grey-01"></div>
                <p>
                  საძინებელი <span className="font-fB">2</span>
                </p>
            </div>
            <p className='mt-3-8 font-fR text-1-8'>იყიდება ბინა ბაკურიანში პრემიუმ კლასის სასტუმრო კომპლექსში 'რუმს ჰოტელი კოხტა'. 
              მე 3 სართული. სრულად გარემონტებული, ავეჯითა და ტექნიკით აღჭურვილი, 
              მდებარეობს საბაგირო კოხტას ძირში. აპარტამენტში არის ინტერნეტ-ტელევიზია, 
              24 საათიანი დაცვა, იზოლირებული ღია აივანი, საპარკინგე ადგილი ეზოში. 
              ორი ლიფტი.
            </p>
            <h3 className='mt-3-7 text-2-4 font-fB uppercase text-orange'>დამატებითი ინფორმაცია</h3>
            <div>
              <ul className="grid gap-0-5 mt-2-5 font-fR uppercase">
                <li>
                  ფართი : <span className="font-fB">100 მ2</span>
                </li>
                <li>
                  ოთახები : <span className="font-fB">1</span>
                </li>
                <li>
                  საძინებელი : <span className="font-fB">2</span>
                </li>
                <li>
                  აივანი : <span className="font-fB">კი</span>
                </li>
                <li>
                  სველი წერტილი : <span className="font-fB">1</span>
                </li>
                <li>
                  ჭერის სიმაღლე : <span className="font-fB">3 მ</span>
                </li>
                <li>
                  პროექტი : <span className="font-fB">არასტანდარტული</span>
                </li>
                <li>
                  ტელევიზია : <span className="font-fB">კი</span>
                </li>
                <li>
                  კონდიციონერი : <span className="font-fB">კი</span>
                </li>
                <li>
                  ლიფტი : <span className="font-fB">კი</span>
                </li>
                <li>
                    პარკირება : <span className="font-fB">პარკინგის ადგილი</span>
                </li>
                <li>
                  ცხელი წყალი : <span className="font-fB">ცენტრალური გათბობა</span>
                </li>
                <li>
                  გათბობა : <span className="font-fB">ცენტრალური გათბობა</span>
                </li>
                <li>
                  სათავსო : <span className="font-fB">სარდაფი</span>
                </li>
                <li>
                  ლოჯი : <span className="font-fB">არა</span>
                </li>
                <li>
                  ბუნებრივი აირი : <span className="font-fB">არა</span>
                </li>
                <li>
                  ტელეფონი : <span className="font-fB">არა</span>
                </li>
                <li>
                  ინტერნეტი : <span className="font-fB">კი</span>
                </li>
                <li>
                  ბუხარი : <span className="font-fB">არა</span>
                </li>
                <li>
                  ავეჯი : <span className="font-fB">კი</span>
                </li>
              </ul>
            </div>
            <div className='mt-5-0'>
              <FlatCardsSlider list={data} title="Super VIP" />
              <FlatCardsSlider list={data} title="მსგავსი განცხადებები" />
            </div>
          </div>
      </div>
      
    <div className="hidden sm:block container bg-white-03">
      <div className="hidden sm:flex items-center justify-between mb-1-5">
        <h2 className="text-black-02 uppercase font-fB text-4-0">ქირავდება 3 ოთახიანი ბინა</h2>
        <div className="flex items-center gap-2-0 text-1-2 font-fB uppercase text-grey-04">
          <div className="flex items-center gap-1-0">
            <img src="/images/share.svg" alt="share" />
            <span>გაზიარება</span>
          </div>
          <div className="flex items-center gap-1-0">
            <img src="/images/heart.svg" alt="share" />
            <span>დამახსოვრება</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-1-5 text-grey-04 uppercase font-fR">
        <div className="flex items-center gap-4-0 ">
          <div className="flex items-center gap-1-0">
            <img src="/images/calendar.svg" alt="calendar" />
            <span>06/10/2022</span>
          </div>
          <div className="flex items-center gap-1-0">
            <img src="/images/location.svg" alt="location" />
            <span>თბილისი საბურთალო, ალ. ყაზბეგის გამზ. აფაქიძის 11</span>
          </div>
        </div>
        <div className="flex items-center gap-1-0">
          <img src="/images/eye.svg" alt="eye" />
          <span>23562</span>
        </div>
      </div>
      <div className="hidden sm:flex h-54-0 mt-4-0 gap-1-0 relative">
        <div className="flex-1">
          <img src="/images/static/flatInnerBig.png" alt="" className="w-full h-full object-cover rounded-1-0" />
        </div>
        <div className="grid grid-cols-2 gap-1-0 w-51-0 flex-none">
          <img src="/images/static/flatInnerSmall.png" alt="" className="w-full h-full object-cover rounded-1-0" />
          <img src="/images/static/flatInnerSmall.png" alt="" className="w-full h-full object-cover rounded-1-0" />
          <img src="/images/static/flatInnerSmall.png" alt="" className="w-full h-full object-cover rounded-1-0" />
          <img src="/images/static/flatInnerSmall.png" alt="" className="w-full h-full object-cover rounded-1-0" />
        </div>
        <button className="flex items-center justify-center gap-2-0 text-1-3 text-black-02 uppercase font-fR absolute bottom-1-0 right-1-0 h-3-4 rounded-0-5 bg-white px-2-0">
          <img src="/images/gallery.svg" alt="" />
          <span>+10 სურათი</span>
        </button>
      </div>
      <div className="flex gap-2-0 mt-5-0 items-start mb-15-0">
        <div className="flex-1">
          <div className="rounded-3-0 overflow-hidden bg-white pr-4-0 pl-3-0 py-3-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8-5 h-8-5 rounded-full overflow-hidden mr-2-0">
                  <img src="/images/static/Avatar.png" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="flex mb-0-5 text-1-6 font-fR text-black gap-2-0">
                    ქეთევანი <span className="italic">[ყველა განცხადება]</span>
                  </p>
                  <div>
                    <a href="tel:598829202" className="text-2-4 font-fB text-orange">
                      598829202
                    </a>
                  </div>
                  <Button size="small">მესაკუთრე</Button>
                </div>
              </div>
              <div className="flex items-center gap-1-0 text-black-02 text-2-0 font-fR">
                <img src="/images/home.svg" alt="" className="mr-1-0" />
                <p>ახალი გარემონტებული</p>
                <div className="w-0-5 h-0-5 bg-black-02/[0.5] rounded-full"></div>
                <p>სართული 5</p>
                <div className="w-0-5 h-0-5 bg-black-02/[0.5] rounded-full"></div>
                <p>
                  ფართი <span className="font-fB">100 მ2</span>
                </p>
                <div className="w-0-5 h-0-5 bg-black-02/[0.5] rounded-full"></div>
                <p>
                  საძინებელი <span className="font-fB">2</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-2-0 font-fR text-black-02 my-5-0">
            იყიდება ბინა ბაკურიანში პრემიუმ კლასის სასტუმრო კომპლექსში 'რუმს ჰოტელი კოხტა'. მე 3 სართული. სრულად გარემონტებული, ავეჯითა და ტექნიკით
            აღჭურვილი, მდებარეობს საბაგირო კოხტას ძირში. აპარტამენტში არის ინტერნეტ-ტელევიზია, 24 საათიანი დაცვა, იზოლირებული ღია აივანი, საპარკინგე
            ადგილი ეზოში. ორი ლიფტი.
          </p>
          <div>
            <h3 className="text-orange text-2-4 font-fB uppercase mb-2-5">დამატებითი ინფორმაცია</h3>
            <div className="grid grid-cols-2 font-fR text-black-02 uppercase text-2-0">
              <div>
                <ul className="grid gap-1-5">
                  <li>
                    ფართი : <span className="font-fB">100 მ2</span>
                  </li>
                  <li>
                    ოთახები : <span className="font-fB">1</span>
                  </li>
                  <li>
                    საძინებელი : <span className="font-fB">2</span>
                  </li>
                  <li>
                    აივანი : <span className="font-fB">კი</span>
                  </li>
                  <li>
                    სველი წერტილი : <span className="font-fB">1</span>
                  </li>
                  <li>
                    ჭერის სიმაღლე : <span className="font-fB">3 მ</span>
                  </li>
                  <li>
                    პროექტი : <span className="font-fB">არასტანდარტული</span>
                  </li>
                  <li>
                    ტელევიზია : <span className="font-fB">კი</span>
                  </li>
                  <li>
                    კონდიციონერი : <span className="font-fB">კი</span>
                  </li>
                  <li>
                    ლიფტი : <span className="font-fB">კი</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="grid gap-1-5">
                  <li>
                    პარკირება : <span className="font-fB">პარკინგის ადგილი</span>
                  </li>
                  <li>
                    ცხელი წყალი : <span className="font-fB">ცენტრალური გათბობა</span>
                  </li>
                  <li>
                    გათბობა : <span className="font-fB">ცენტრალური გათბობა</span>
                  </li>
                  <li>
                    სათავსო : <span className="font-fB">სარდაფი</span>
                  </li>
                  <li>
                    ლოჯი : <span className="font-fB">არა</span>
                  </li>
                  <li>
                    ბუნებრივი აირი : <span className="font-fB">არა</span>
                  </li>
                  <li>
                    ტელეფონი : <span className="font-fB">არა</span>
                  </li>
                  <li>
                    ინტერნეტი : <span className="font-fB">კი</span>
                  </li>
                  <li>
                    ბუხარი : <span className="font-fB">არა</span>
                  </li>
                  <li>
                    ავეჯი : <span className="font-fB">კი</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-37-0 flex-none rounded-3-0 pt-2-3 pb-3-0 px-3-0 bg-white overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-1-4 font-fB uppercase text-black">ფასი</span>
            <div className="h-3-2 rounded-1-4 overflow-hidden bg-grey-03 flex flex-none px-0-2 items-center gap-0-6">
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center">
                <img src="/images/dollar.svg" alt="dollar" />
              </button>
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center bg-orange">
                <img src="/images/lari-white.svg" alt="lari-white" />
              </button>
            </div>
          </div>
          <p className="text-orange text-3-2 font-fB uppercase my-1-5">227.583</p>
          <p className="text-black text-1-6 font-fR">
            ფართი <span className="font-fB">100 მ2</span>
          </p>
          <div className="flex justify-end mt-3-5">
            <Button size="medium">შენახვა</Button>
          </div>
        </div>
      </div>
      <FlatCardsSlider list={data} title="Super VIP" />
      <FlatCardsSlider list={data} title="მსგავსი განცხადებები" />
    </div>
    </div>
  );
};

FlatDetail.propTypes = {};

export default FlatDetail;
