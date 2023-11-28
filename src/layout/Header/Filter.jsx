import { useState } from 'react';
import countryList from '../../dummyData/countryList';
import { Button } from '../../components/Inputs/Button';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [countriesVisible, setCountriesVisible] = useState(false);
  const [priceVisible, setPriceVisible] = useState(false);
  const [filter, setFilter] = useState({
    input: '',
    type: null,
    country: null,
    price: 0,
    flatType: null,
  });
  const [_, setSearchParams] = useSearchParams();

  const inputHandler = (e) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const showTypes = () => {
    setTypeVisible((prev) => !prev);
    setCountriesVisible(false);
    setPriceVisible(false);
  };
  const showCountries = () => {
    setCountriesVisible((prev) => !prev);
    setPriceVisible(false);
    setTypeVisible(false);
  };
  const showPrice = () => {
    setPriceVisible((prev) => !prev);
    setCountriesVisible(false);
    setTypeVisible(false);
  };
  const handleCountry = (item) => {
    setFilter((prev) => ({ ...prev, country: item }));
  };
  const flatTypeHandler = (id) => {
    setFilter((prev) => ({ ...prev, flatType: id }));
  };
  const submitHandler = () => {
    const payload = {
      q: filter.input,
    };
    if (filter.country) payload.country = filter.country.id;
    setSearchParams(payload);
  };
  return (
    <div className="relative">
      <div className="h-6-4 rounded-10-0 bg-white text-black text-1-2 font-fB uppercase flex overflow-hidden pr-1-0">
        <button className="pl-3-0 pr-7-2 flex items-center justify-center" onClick={showTypes}>
          <p>გარიგების და ქონების ტიპი</p>
        </button>
        <button className="pl-3-0  flex items-center min-w-19-2 relative" onClick={showCountries}>
          <div className="absolute h-4-0 top-50-percent w-0-1 bg-grey-01 left-0 transform -translate-y-50-percent"></div>
          <p> {filter.country ? filter.country.title : 'მდებარეობა'}</p>
        </button>
        <button className="pl-3-0 flex items-center min-w-19-2 relative" onClick={showPrice}>
          <div className="absolute h-4-0 top-50-percent w-0-1 bg-grey-01 left-0 transform -translate-y-50-percent"></div>
          <p>ფასი</p>
        </button>
        <input
          placeholder="საძიებო სიტყვა, ID ან ტელეფონის ნომერი"
          value={filter.input}
          name="input"
          onChange={inputHandler}
          className="h-full w-26-5 bg-transparent font-fR text-black border-none outline-none text-1-2 mr-3-4"
        />
        <button onClick={submitHandler}>
          <img src="/images/search.svg" className="w-4-4" />
        </button>
      </div>
      {countriesVisible && (
        <div className="absolute -bottom-1-0 transform translate-y-100-percent w-full left-0 bg-white rounded-3-0 z-2">
          <div className="flex items-center justify-center mt-2-7 ">
            <div className="flex items-center justify-center p-0-5 w-26-0 h-4-8 text-1-3 font-fR uppercase bg-grey-03 rounded-10-0">
              <button className="rounded-10-0 bg-white px-2-4 py-1-0">ქალაქი</button>
              <button className="px-2-4 py-1-0">რაიონი/უბანი</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1-0 h-60-0 mt-3-0 mb-3-0 ml-3-7">
            {countryList.map((item) => (
              <button onClick={() => handleCountry(item)} key={item.id} className="text-left font-fR text-1-3 uppercase hover:text-orange">
                {item.title}
              </button>
            ))}
          </div>
          <div className="flex justify-end mb-3-0 mr-9-6">
            <div className="flex items-center justify-center gap-0-5 ">
              <button className="px-3-0 h-4-4 rounded-4-6 text-1-2 font-fB bg-grey-03">გასუფთავება</button>
              <Button size="medium">შენახვა</Button>
            </div>
          </div>
          <div></div>
        </div>
      )}
      {typeVisible && (
        <div className="absolute -bottom-1-0 transform translate-y-100-percent w-full h-23-5 left-0 bg-white rounded-3-0 z-2">
          <div className="mt-3-0 ml-3-7 uppercase">
            <p className="font-fB text-1-2">გარიგების ტიპი</p>
            <div className="flex gap-0-5 mt-2-0 font-fR text-1-3">
              <button
                className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white"
                onClick={() => flatTypeHandler(1)}
              >
                იყიდება
              </button>
              <button
                className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white"
                onClick={() => flatTypeHandler(2)}
              >
                გირავდება
              </button>
              <button
                className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white"
                onClick={() => flatTypeHandler(3)}
              >
                ქირავდება
              </button>
              <button
                className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white"
                onClick={() => flatTypeHandler(4)}
              >
                ქირავდება დღიურად
              </button>
            </div>
          </div>
          <div className="mt-3-0 ml-3-7 uppercase">
            <p className="font-fB text-1-2">ქონების ტიპი</p>
            <div className="flex gap-0-5 mb-3-0 mt-2-0 font-fR text-1-3">
              <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">ბინები</button>
              <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                სახლები და აგარაკები
              </button>
              <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                კომერციული ფართები
              </button>
              <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                მიწის ნაკვეთები
              </button>
              <button className="px-2-4 py-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                სასტუმროები
              </button>
            </div>
          </div>
        </div>
      )}
      {priceVisible && (
        <div className="absolute -bottom-1-0 transform translate-y-100-percent w-37-0 h-24-4 ml-47-2 bg-white px-3-0 rounded-3-0 z-2">
          <div className="flex pt-3-0 text-1-2 uppercase">
            <p className="font-fB">ფასი</p>
            <div className="h-3-0 rounded-1-4 overflow-hidden bg-grey-03 flex flex-none ml-22-0 px-0-2 items-center gap-0-2">
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center">
                <img src="/images/dollar.svg" alt="dollar" />
              </button>
              <button className="w-2-5 h-2-5 rounded-full flex items-center justify-center bg-orange">
                <img src="/images/lari-white.svg" alt="lari-white" />
              </button>
            </div>
          </div>
          <div className="flex mt-1-5 gap-1-5">
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
          <div className="flex mt-2-0 gap-1-0">
            <input
              type="text"
              placeholder="დან"
              className="px-1-5 py-1-3 w-15-0 h-4-0 border-solid border-0-1 border-grey-02 rounded-0-5 bg-grey-03 outline-none"
            />
            <input
              type="text"
              placeholder="მდე"
              className="px-1-5 py-1-3 w-15-0 h-4-0 border-solid border-0-1 border-grey-02 rounded-0-5 bg-grey-03 outline-none"
            />
          </div>
          <div className="flex justify-end mt-3-0">
            <Button size="medium">შენახვა</Button>
          </div>
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
