import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import data from '@/dummyData/flats';
import { FlatCardsSlider } from '../components/FlatCardsSlider';

const AddNote = () => {
  const { menuHandler } = useContext(AppContext);

  return (
    <div>
      <div className="sm:hidden px-2-0 mt-2-3">
        <h3 className="text-2-0 font-fB uppercase">ახალი განცხადება</h3>
        <div className="absolute top-2-2 right-2-0 w-4-4">
          <button onClick={menuHandler}>
            <img src="/images/static/Avatar.png" alt="saba@gmail.com" />
          </button>
        </div>
        <div className="flex-row p-2-0 mt-4-0 bg-white rounded-1-0">
          <div className="font-fB uppercase">
            <h4 className="text-1-8">ხანგრძლივობა</h4>
            <div className="flex mt-1-2 gap-1-0">
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>30</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>90</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p className="text-grey-04">120</p>
              </div>
            </div>
          </div>
          <div className="mt-1-5 font-fB uppercase">
            <h4 className="text-1-8">გარიგების ტიპი</h4>
            <div className="grid mt-1-2 gap-1-0">
              <div className="flex px-2-0 py-1-0 gap-1-0 w-14-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>იყიდება</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-16-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>გირავდება</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-16-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>ქირავდება</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-25-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>ქირავდება დღიურად</p>
              </div>
            </div>
          </div>
          <div className="mt-1-5 font-fB uppercase">
            <h4 className="text-1-8">უძრავი ქონების ტიპი</h4>
            <div className="grid mt-1-2 gap-1-0">
              <div className="flex px-2-0 py-1-0 gap-1-0 w-12-7 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>ბინები</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-26-5 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>სახლები და აგარაკები</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-27-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>კომერციული ფართები</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-18-8 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>სასტუმროები</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-21-5 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>მიწის ნაკვეთები</p>
              </div>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 font-fB uppercase">მდებარეობა</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-03 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-03" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">მისამართი</label>
            <div className="flex p-2-2 h-5-9 bg-grey-03 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-03" />
            </div>
          </div>
          <div className="flex mt-1-5 gap-1-0 font-fB uppercase">
            <div className="grid gap-1-2">
              <label className="text-1-8">სართული</label>
              <div className="flex p-2-2 h-5-9 w-11-6 bg-grey-05 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-05 w-full" />
                <button className="flex justify-center items-center">
                  <img src="/public/images/angle-down-small.svg" className="w-3-0" />
                </button>
              </div>
            </div>
            <div className="grid gap-1-2">
              <label className="text-1-8">სართულები სულ</label>
              <div className="flex p-2-2 h-5-9 w-18-0 bg-grey-05 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-05 w-full" />
                <button className="flex justify-center items-center">
                  <img src="/public/images/angle-down-small.svg" className="w-3-0" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-1-5 gap-1-0 font-fB uppercase">
            <div className="grid gap-1-2">
              <label className="text-1-8">ოთახები</label>
              <div className="flex p-2-2 h-5-9 w-11-6 bg-grey-05 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-05 w-full" />
                <button className="flex justify-center items-center">
                  <img src="/public/images/angle-down-small.svg" className="w-3-0" />
                </button>
              </div>
            </div>
            <div className="grid gap-1-2">
              <label className="text-1-8">საძინებლები</label>
              <div className="flex p-2-2 h-5-9 w-18-0 bg-grey-05 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-05 w-full" />
                <button className="flex justify-center items-center">
                  <img src="/public/images/angle-down-small.svg" className="w-3-0" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-1-5 font-fB uppercase">
            <h4 className="text-1-8">პარამეტრები</h4>
            <div className="grid gap-1-0 mt-1-3">
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>კონდიციონერი</p>
              </div>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ცხელი წყალი</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">გათბობა</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="mt-1-5 font-fB uppercase">
            <h4 className="text-1-8">პარკინგი</h4>
            <div className="grid mt-1-2 gap-1-0">
              <div className="flex px-2-0 py-1-0 gap-1-0 w-18-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>ავტოფარეხი</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-23-5 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>პარკინგის ადგილი</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 w-15-0 border-solid border-0-1 border-grey-04 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" className="w-2-0" />
                <p>პარკინგი</p>
              </div>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">სათავსო</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="mt-1-5 font-fB uppercase">
            <h4 className="text-1-8">ლიფტი</h4>
            <div className="flex gap-4-3">
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>სამგზავრო</p>
              </div>
              <div className="flex gap-1-0 items-center">
                <img src="/public/images/checkbox-square-fill.svg" />
                <p>სატვირთო</p>
              </div>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ჭერის სიმაღლე (მეტრი)</label>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">მდგომარეობა</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">პროექტი</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ტელეფონის ნომერი</label>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ფართი</label>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
            </div>
          </div>
          <div className="grid gap-0-9 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ფასი</label>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-05" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" placeholder="მაგალითად: 20 000" className="text-1-6 outline-none bg-grey-03" />
            </div>
            <div className="flex p-2-2 h-5-9 gap-0-5 bg-grey-03 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-03" />
              <button className="flex justify-center items-center">
                <img src="/public/images/angle-down-small.svg" className="w-2-8" />
              </button>
            </div>
          </div>
          <div className="grid gap-1-0 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">კომენტარი (ქართულად)</label>
            <div className="h-14-4 p-1-7 bg-grey-05 rounded-1-0">
              <textarea placeholder="კომენტარის ადგილი" className="w-full h-full bg-grey-05 outline-none text-1-6 font-fB"></textarea>
            </div>
          </div>
          <div className="grid gap-1-0 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">კომენტარი (ინგლისურად)</label>
            <div className="h-14-4 p-1-7 bg-grey-05 rounded-1-0">
              <textarea placeholder="კომენტარის ადგილი" className="w-full h-full bg-grey-05 outline-none text-1-6 font-fB"></textarea>
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">რეესტრის ამონაწერის ბმული</label>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-03" />
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <label className="text-1-8 uppercase">ვიდეოს ბმული</label>
            <div className="flex p-2-2 h-5-9 bg-grey-05 rounded-1-0">
              <input type="text" className="text-1-6 outline-none bg-grey-03" />
            </div>
          </div>
          <div className="grid gap-1-2 mt-1-5 font-fB">
            <h4 className="text-1-8 uppercase">ვიდეოს ბმული</h4>
            <div className="grid h-17-0 bg-grey-05 rounded-1-0 font-fB text-center">
              <img src="/public/images/gallery.svg" className="w-4-0 mt-2-0 ml-12-5" />
              <h5 className="text-2-0">სურათის არჩევა</h5>
              <p className="text-1-2 text-orange uppercase">ყურადღება:</p>
              <p className="text-1-0 font-fR">სურათის ზომა არ უნდა აღემატებოდეს 20MB-ს, რაოდენობა 10-ს!</p>
            </div>
          </div>
          <div className="grid gap-1-0 mt-1-5">
            <h4 className="text-1-7 uppercase font-fB">აირჩიეთ განცხადების სტატუსი</h4>
            <div className="px-1-0 py-2-0 font-fB rounded-1-0 bg-grey-05">
              <h5 className="text-2-0 uppercase">სტანდარტული</h5>
              <h5 className="mt-4-0 text-orange text-3-2 uppercase">უფასო</h5>
              <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                <img src="/src/assets/bullet.svg" className="w-0-6" />
                <p className="font-fR text-1-2">განთავსება საერთო სიაში</p>
              </div>
              <button className="px-3-0 py-1-5 w-12-0 mt-25-0 ml-8-0 uppercase rounded-4-6 bg-white">არჩევა</button>
            </div>
            <div className="px-1-0 py-2-0 font-fB rounded-1-0 bg-grey-05">
              <h5 className="text-2-0 uppercase">VIP</h5>
              <p className="font-fR">3-ჯერ მეტი ნახვა</p>
              <div className="flex gap-13-6">
                <div className="flex items-center">
                  <h5 className="mt-1-5 text-orange text-3-2 uppercase">1</h5>
                  <img src="/public/images/lari-orange.svg" className="w-2-4 mt-2-0" />
                </div>
                <div className="flex items-center gap-1-5">
                  <h5 className="text-1-8 font-fR">1 დღე</h5>
                  <button className="flex justify-center items-center">
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
              <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                <img src="/src/assets/bullet.svg" className="w-0-6" />
                <p className="font-fR text-1-2">განთავსება საერთო სიაში</p>
              </div>
              <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                <img src="/src/assets/bullet.svg" className="w-0-6" />
                <p className="font-fR text-1-2">განთავსება საერთო სიაში სტანდარტული განცხადებების თავზე</p>
              </div>
              <button className="px-3-0 py-1-5 w-12-0 mt-25-0 ml-8-0 uppercase rounded-4-6 bg-white">არჩევა</button>
            </div>
            <div className="px-1-0 py-2-0 font-fB rounded-1-0 bg-grey-05">
              <h5 className="text-2-0 uppercase">VIP+</h5>
              <p className="font-fR">10-ჯერ მეტი ნახვა</p>
              <div className="flex gap-13-0">
                <div className="flex items-center">
                  <h5 className="mt-1-5 text-orange text-3-2 uppercase">2</h5>
                  <img src="/public/images/lari-orange.svg" className="w-2-4 mt-2-0" />
                </div>
                <div className="flex items-center gap-1-5">
                  <h5 className="text-1-8 font-fR">1 დღე</h5>
                  <button className="flex justify-center items-center">
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
              <div className="mt-1-6">
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში სტანდარტული განცხადებების თავზე</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში სტანდარტული და VIP განცხადებების თავზე</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საიტის მთავარ გვერდზე, სპეციალურ ბლოკებში</p>
                </div>
              </div>
              <button className="px-3-0 py-1-5 w-12-0 mt-12-5 ml-8-0 uppercase rounded-4-6 bg-white">არჩევა</button>
            </div>
            <div className="px-1-0 py-2-0 font-fB rounded-1-0 bg-grey-05">
              <h5 className="text-2-0 uppercase">SUPER VIP</h5>
              <p className="font-fR">30-ჯერ მეტი ნახვა</p>
              <div className="flex gap-13-0">
                <div className="flex items-center">
                  <h5 className="mt-1-5 text-orange text-3-2 uppercase">3</h5>
                  <img src="/public/images/lari-orange.svg" className="w-2-4 mt-2-0" />
                </div>
                <div className="flex items-center gap-1-5">
                  <h5 className="text-1-8 font-fR">1 დღე</h5>
                  <button className="flex justify-center items-center">
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
              <div className="mt-1-6">
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში სტანდარტული განცხადებების თავზე</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საერთო სიაში სტანდარტული და VIP განცხადებების თავზე</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება საიტის მთავარ გვერდზე, სპეციალურ ბლოკებში</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება ლისთინგში სტანდარტული VIP და VIP+ განცხადებების თავზე</p>
                </div>
                <div className="flex mt-1-0 gap-1-0 justify-start items-center">
                  <img src="/src/assets/bullet.svg" className="w-0-6" />
                  <p className="font-fR text-1-2">განთავსება ყველა განცხადების დეტალურ გვერდზე</p>
                </div>
              </div>
              <button className="px-3-0 py-1-5 w-12-0 mt-2-5 ml-8-0 uppercase rounded-4-6 bg-white">არჩევა</button>
            </div>
            <div className="mt-3-0 w-full py-1-5 h-5-0 text-center bg-orange rounded-10-0">
              <button className="font-fB text-white uppercase">შენახვა</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container hidden sm:block">
        <h2 className="text-black-02 uppercase font-fB text-4-0">განცხადების დამატება</h2>
        <div className="flex mt-4-0 gap-2-0">
          <div className="hidden sm:flex flex-col px-3-0 py-5-0 w-46-0 h-39-5 gap-3-0 text-2-0 uppercase bg-white rounded-1-0">
            <div className="flex font-fB  gap-1-0">
              <input type="radio" className="w-2-0" />
              <p>ძირითადი ინფორმაცია</p>
            </div>
            <div className="flex gap-1-0 font-fR text-grey-04">
              <input type="radio" className="w-2-0" />
              <p>მახასიათებლები</p>
            </div>
            <div className="flex gap-1-0 font-fR text-grey-04">
              <input type="radio" className="w-2-0" />
              <p>პარამეტრები და კეთილმოწყობა</p>
            </div>
            <div className="flex gap-1-0 font-fR text-grey-04">
              <input type="radio" className="w-2-0" />
              <p>ფართი და ფასი</p>
            </div>
            <div className="flex gap-1-0 font-fR text-grey-04">
              <input type="radio" className="w-2-0" />
              <p>დეტალური აღწერა</p>
            </div>
            <div className="flex gap-1-0 font-fR text-grey-04">
              <input type="radio" className="w-2-0" />
              <p>ფოტო და ვიდეო</p>
            </div>
          </div>
          <div className="flex flex-col w-116-0 px-3-0 pt-5-0 font-fB uppercase bg-white rounded-1-0">
            <div className="flex flex-row gap-82-0">
              <h3 className="text-orange text-2-4">ახალი განცხადება</h3>
              <button>
                <img src="/public/images/favorite.svg" className="w-2-8" />
              </button>
            </div>
            <h4 className="mt-2-5 text-2-0">ხანგრძლივობა</h4>
            <div className="flex  mt-2-5 gap-1-0 flex-wrap">
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" />
                <p>30</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" />
                <p>90</p>
              </div>
              <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                <input type="radio" />
                <p>120</p>
              </div>
            </div>
            <h4 className="mt-5-0 text-2-0">გარიგების ტიპი *</h4>
            <div className="flex gap-1-0">
              <div className="flex flex-wrap mt-2-5 gap-1-0">
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>იყიდება</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>გირავდება</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>ქირავდება</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>ქირავდება დღიურად</p>
                </div>
              </div>
            </div>
            <h4 className="mt-5-0 text-2-0">უძრავი ქონების ტიპი *</h4>
            <div className="flex gap-1-0">
              <div className="flex mt-2-5 gap-1-0">
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>ბინები</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>სახლები და აგარაკები</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>კომერციული ფართები</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>სასტუმროები</p>
                </div>
                <div className="flex px-2-0 py-1-0 gap-1-0 border-solid border-0-1 border-grey-02 rounded-10-0 hover:bg-orange hover:text-white">
                  <input type="radio" />
                  <p>მიწის ნაკვეთები</p>
                </div>
              </div>
            </div>
            <div className="grid gap-2-5 mt-5-0 ">
              <label className="text-2-0">მდებარეობა *</label>
              <div className="flex p-2-2 gap-82-0 bg-grey-03 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-03" />
                <button>
                  <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                </button>
              </div>
            </div>
            <div className="grid gap-2-5 mt-5-0 ">
              <label className="text-2-0">მისამართი *</label>
              <div className="flex p-2-2 gap-82-0 bg-grey-03 rounded-1-0">
                <input type="text" className="text-1-6 outline-none bg-grey-03" />
              </div>
            </div>
            <div className="flex mt-5-0 gap-1-0">
              <div className="grid gap-2-0 w-full">
                <label className="text-2-0">სართული</label>
                <div className="flex p-2-2 gap-26-0 bg-grey-03 rounded-1-0">
                  <input type="text" className="text-1-6 outline-none bg-grey-03" />
                  <button>
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
              <div className="grid gap-2-0 w-full">
                <label className="text-2-0">სართულები სულ</label>
                <div className="flex p-2-2 gap-26-0 bg-grey-03 rounded-1-0">
                  <input type="text" className="text-1-6 outline-none bg-grey-03" />
                  <button>
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-5-0 gap-1-0">
              <div className="grid gap-2-0 w-full">
                <label className="text-2-0">ოთახები</label>
                <div className="flex p-2-2 gap-26-0 bg-grey-03 rounded-1-0">
                  <input type="text" className="text-1-6 outline-none bg-grey-03" />
                  <button>
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
              <div className="grid gap-2-0 w-full">
                <label className="text-2-0">საძინებელი</label>
                <div className="flex p-2-2 gap-26-0 bg-grey-03 rounded-1-0">
                  <input type="text" className="text-1-6 outline-none bg-grey-03" />
                  <button>
                    <img src="/public/images/angle-down-small.svg" className="w-2-8" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-7-4 pb-3-0">
              <div className="flex items-center justify-center gap-0-5 ">
                <button className="px-3-0 h-5-0  rounded-4-6 text-1-6 font-fB bg-grey-03">გაუქმება</button>
                <button className="px-3-0 h-5-0  rounded-4-6 text-1-6 font-fB bg-orange text-white">შენახვა</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-48-0 mt-1-0 gap-1-0 w-116-0 text-2-0 font-fR uppercase text-grey-04">
          <div className="flex px-3-0 py-2-0 gap-75-0 bg-grey-03 rounded-1-0 w-full">
            <h3>ახალი განცხადების დამატება</h3>
            <button className="bg-orange w-3-4 rounded-4-6">
              <img src="/public/images/plus.svg" className="p-0-6" />
            </button>
          </div>
          <div className="flex px-3-0 py-2-0 gap-75-0 bg-grey-03 rounded-1-0 w-full">
            <h3>ახალი განცხადების დამატება</h3>
            <button className="bg-orange w-3-4 rounded-4-6">
              <img src="/public/images/plus.svg" className="p-0-6" />
            </button>
          </div>
          <div className="flex px-3-0 py-2-0 gap-75-0 bg-grey-03 rounded-1-0 w-full">
            <h3>ახალი განცხადების დამატება</h3>
            <button className="bg-orange w-3-4 rounded-4-6">
              <img src="/public/images/plus.svg" className="p-0-6" />
            </button>
          </div>
          <div className="flex px-3-0 py-2-0 gap-75-0 bg-grey-03 rounded-1-0 w-full">
            <h3>ახალი განცხადების დამატება</h3>
            <button className="bg-orange w-3-4 rounded-4-6">
              <img src="/public/images/plus.svg" className="p-0-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-4-0">
          <div className="flex items-center justify-center gap-0-5 uppercase">
            <button className="px-3-0 h-5-0 rounded-4-6 text-1-6 font-fB bg-grey-03">გასუფთავება</button>
            <button className="px-3-0 h-5-0 rounded-4-6 text-1-6 font-fB bg-orange text-white">შენახვა</button>
          </div>
        </div>
        <div className="mt-14-0">
          <FlatCardsSlider list={data} title="მიწის ნაკვეთები" />
        </div>
      </div>
    </div>
  );
};

export default AddNote;
