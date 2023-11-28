import { FlatCardsSlider } from '@/components/FlatCardsSlider';
import dummyData from '@/dummyData/flats';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../layout/Header';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(dummyData);
  useEffect(() => {
    if (searchParams) {
      const country = searchParams.get('country');
      const q = searchParams.get('q');
      const filteredList = dummyData.filter((item) => {
        if (!q && !country) return true;
        else if (q && item.title.includes(q.toLocaleLowerCase()) && !country) return true;
        else if (country && item.locationId === Number(country) && !q) return true;
        else if (q && country && item.title.includes(q.toLocaleLowerCase()) && item.locationId === Number(country)) return true;
        return false;
      });
      setData(filteredList);
    }
  }, [searchParams]);
  return (
    <div className='bg-white-03'>
      <div className='sm:hidden'>
        <Header />
      </div>
      <FlatCardsSlider list={data} title="Super VIP" />
      <FlatCardsSlider list={data} title="VIP+" />
      <FlatCardsSlider list={data} title="VIP" />
      <div className='hidden sm:block'>
      <FlatCardsSlider list={data} title="ბინები" />
      <FlatCardsSlider list={data} title="სახლები და აგარაკები" />
      <FlatCardsSlider list={data} title="კომერციული ფართები" />
      <FlatCardsSlider list={data} title="მიწის ნაკვეთები" />
      </div>
    </div>
  );
};

export default Home;
