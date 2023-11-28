import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const FlatCard = (props) => {
  const { images, title, location, price, floor, sqm, rooms, slug } = props;

  return (
    <Link to={slug}>
      <div className="rounded-1-0 overflow-hidden bg-white-04 pb-1-5">
        <div className="h-23-0 overflow-hidden relative rounded-1-0">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="flat-swiper"
          >
            {images?.map((item, index) => (
              <SwiperSlide key={item + index}>
                <img src={item} alt={title} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-1-5">
          <div className="flex items-center justify-between px-1-0 gap-5-0">
            <p className="font-fB uppercase text-black text-1-8">{title}</p>
            <div className="h-3-2 rounded-1-4 overflow-hidden bg-grey-03 flex flex-none px-0-2 items-center gap-0-6">
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center">
                <img src="/images/dollar.svg" alt="dollar" />
              </button>
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center bg-orange">
                <img src="/images/lari-white.svg" alt="lari-white" />
              </button>
            </div>
          </div>
          <div className="text-1-5 text-black font-fR px-1-0">
            <div className="flex items-center justify-between mt-2-0">
              <div className="flex items-center uppercase">
                <img src="/images/location.svg" alt="pin" />
                <span>{location}</span>
              </div>
              <div className="flex items-center font-fB text-1-8">
                <span>{price}</span> <img src="/images/lari.svg" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-0-5 text-1-2 mt-2-0">
              <p>
                სართული <span className="font-fB">{floor}</span>
              </p>
              <p className="border-l-0-1 border-r-0-1 border-grey-01 px-0-5">
                ფართი <span className="font-fB">{sqm} მ2</span>
              </p>
              <p>
                საძინებელი <span className="font-fB">{rooms}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

FlatCard.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  price: PropTypes.number,
  floor: PropTypes.number,
  sqm: PropTypes.number,
  rooms: PropTypes.number,
  slug: PropTypes.string.isRequired,
};

FlatCard.defaultProps = {
  location: '',
  price: 0,
  floor: 0,
  sqm: 0,
  rooms: 0,
};
export default FlatCard;
