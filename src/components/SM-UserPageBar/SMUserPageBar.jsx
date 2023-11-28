import ActiveLogin from '../../layout/Header/ActiveLogin';

const SMUserPageBar = ({title}) => {
    return (
      <div>
        <div className='flex'>
          <h3 className='text-2-0 font-fB uppercase'>{title}</h3>
          <div className='absolute top-2-2 right-2-0 w-4-4'>   
          <ActiveLogin />
          </div>
        </div>
        <div className="flex-row mt-2-5 bg-lightgreen rounded-1-0 p-2-0 uppercase">
          <h3 className="text-2-0 font-fB">ფასიანი სერვისები</h3>
          <div className="flex-row mt-2-0 text-1-6 font-fR uppercase">
            <div className="flex gap-1-0">
              <img src="/src/assets/bullet.svg" className="w-1-0" />
              <div className="flex">
                <p>SUPER VIP სტატუსი 1 დღე - 3.00</p>
                <img src="/public/images/lari.svg" className="w-1-4" />
              </div>
            </div>
            <div className="flex gap-1-0 mt-1-0">
              <img src="/src/assets/bullet.svg" className="w-1-0" />
              <div className="flex">
                <p>VIP+ სტატუსი ერთი დღე - 2.00</p>
                <img src="/public/images/lari.svg" className="w-1-4" />
              </div>
            </div>
            <div className="flex gap-1-0 mt-1-0">
              <img src="/src/assets/bullet.svg" className="w-1-0" />
              <div className="flex">
                <p>VIP სტატუსი ერთი დღე - 1.00</p>
                <img src="/public/images/lari.svg" className="w-1-4" />
              </div>
            </div>
            <div className="flex gap-1-0 mt-1-0">
              <img src="/src/assets/bullet.svg" className="w-1-0" />
              <div className="flex">
                <p>ფერის შეცვლა ერთი დღე - 0.10</p>
                <img src="/public/images/lari.svg" className="w-1-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SMUserPageBar;