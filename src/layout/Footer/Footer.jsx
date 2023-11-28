const Footer = () => {
  return (
    <div className="container rounded-4-0 mt-6-0 sm:px-14-0 pb-2-0 bg-white-04 w-full">
      <footer className="py-2-0 sm:pb-8-0">
        <ul className="flex-row sm:flex items-start justify-between">
          <li>
            <p className="mb-1-2 mt-4-5 sm:mb-3-0 text-black text-2-4 font-fB uppercase">მდებარეობები</p>
            <div className="flex sm:items-start gap-7-0 text-black font-fR text-1-4 uppercase">
              <ul>
                <li className="mb-1-5 sm:mb-2-0">თბილისი</li>
                <li className="mb-1-5 sm:mb-2-0">ქუთაისი</li>
                <li className="mb-1-5 sm:mb-2-0">რუსთავი</li>
                <li>ბაკურიანი</li>
              </ul>
              <ul>
                <li className="mb-1-5 sm:mb-2-0">თბილისი</li>
                <li className="mb-1-5 sm:mb-2-0">ქუთაისი</li>
                <li className="mb-1-5 sm:mb-2-0">რუსთავი</li>
                <li>ბაკურიანი</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="mb-1-2 mt-4-5 sm:mb-3-0 text-black text-2-4 font-fB uppercase">გარიგების ტიპები</p>
            <div className=" text-black font-fR text-1-4 uppercase">
              <ul>
                <li className="mb-1-5 sm:mb-2-0">იყიდება ბინები</li>
                <li className="mb-1-5 sm:mb-2-0">ქირავდება დღიურად ბინები</li>
                <li className="mb-1-5 sm:mb-2-0">იყიდება სახლები და აგარაკები</li>
                <li>იყიდება მიწის ნაკვეთები</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="mb-1-2 mt-4-5 sm:mb-3-0 text-black text-2-4 font-fB uppercase">საკონტაქტო</p>
            <div className=" text-black font-fR text-1-4 uppercase">
              <ul>
                <li className="mb-1-5 sm:mb-2-0">
                  <a href="mailto:contact@gethome.ge">contact@gethome.ge</a>
                </li>
                <li className="mb-1-5 sm:mb-2-0">საიტის წესები</li>
                <li className="mb-1-5 sm:mb-2-0">კონფიდენციალურობის პოლიტიკა</li>
                <li>იყიდება მიწის ნაკვეთები</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="mb-1-2 mt-4-5 sm:mb-3-0 text-black text-2-4 font-fB uppercase">სასარგებლო ლინკები</p>
            <div className="text-black font-fR text-1-4 uppercase">
              <ul>
                <li className="mb-1-5 sm:mb-2-0">ამინდი</li>
                <li className="mb-1-5 sm:mb-2-0">ჰოროსკოპი</li>
              </ul>
            </div>
          </li>
        </ul>
      </footer>
      <p className="text-center text-1-2 text-black font-fR">all right reserved © copy right</p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
