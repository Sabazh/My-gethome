import React from 'react'

const GhomeCard = () => {
  return (
    <div className="flex-row sm:w-21-0 bg-grey-03 rounded-1-0">
        <div className="w-full h-14-8 rounded-1-0">
            <img src="/public/images/static/Ghome.png" className="w-full h-full object-cover" />
        </div>
        <div className="flex-row mt-1-0 mb-2-0 pl-2-0 ">
            <h4 className="font-fB text-1-8">Ghome</h4>
            <p className="mt-0-5 uppercase font-fR text-1-3 text-grey-04">რეგისტრაციის თარიღი 3 დეკემბერი</p>
            <div className="mt-1-0 w-15-4 h-3-0 px-2-0  rounded-10-0 bg-orange text-white">
                <button className="h-2-0 font-fB text-1-2 uppercase">კომპანიაზე მიბმა</button>
            </div>
        </div>
    </div>
  )
}

export default GhomeCard