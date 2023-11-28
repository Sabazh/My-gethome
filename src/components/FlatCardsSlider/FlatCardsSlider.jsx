import PropTypes from 'prop-types';
import { FlatCard } from '../FlatCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';

const FlatCardsSlider = (props) => {
  const { list, title } = props;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  return (
    <div className="container pb-2-8 sm:pb-7-0">
      <div className="flex items-center justify-between mb-2-0">
        <h2 className="font-fB text-3-2 sm:text-4-0 text-black uppercase">{title}</h2>
        <div className="flex items-center gap-0-5">
          <div className="hidden sm:flex w-3-0 h-3-0 rounded-full bg-white items-center justify-center cursor-pointer" ref={navigationPrevRef}>
            <img src="/images/swiperArrow.svg" alt="" className="rotate-180" />
          </div>
          <div className="hidden sm:flex w-3-0 h-3-0 rounded-full bg-white items-center justify-center cursor-pointer" ref={navigationNextRef}>
            <img src="/images/swiperArrow.svg" alt="" />
          </div>
          <button className="px-1-3 py-0-6 sm:px-3-0 h-3-0 text-black font-fB uppercase border-0-1 rounded-4-6 border-black text-1-2">ყველა 123+</button>
        </div>
      </div>
      <div className='sm:block hidden'>
      <Swiper
        spaceBetween={15}
        slidesPerView={5}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <FlatCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className='sm:hidden'>
        {list.slice(0, 3).map((item) => (
          <div className='mb-3-0' key={item.id} >
            <FlatCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

FlatCardsSlider.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default FlatCardsSlider;
