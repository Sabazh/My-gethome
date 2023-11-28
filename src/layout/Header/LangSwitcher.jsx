import { useState } from "react";

const LangSwitcher = () => {
  const [lang, setLang] = useState(false);
  const changeLang = () => {
    setLang((prev) => !prev);
  };

  return (
    <div className="relative">
    <div className="flex items-center justify-center font-fB gap-0-5 h-4-0 px-1-5 rounded-t-1-0 bg-white text-2-0 text-dark">
      <button onClick={changeLang}>Geo</button>
      <img src="/images/arrowdiagonal.svg" alt="" />
    </div>
    { lang && (
      <div className="absolute -bottom-1-0 transform translate-y-70-percent w-full py-1-0 px-1-5 bg-white rounded-b-1-0">
        <button onClick={changeLang} 
          className="font-fB h-4-0 bg-white text-2-0 text-dark">
            Eng
        </button>
      </div>
    )}
    </div>
  );
};

LangSwitcher.propTypes = {};

export default LangSwitcher;
