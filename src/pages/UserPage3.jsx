import { UserPageBar } from '../components/UserPageBar';
import { SMUserPageBar } from '../components/SM-UserPageBar';
import { GhomeCard } from '../components/GhomeCard';

function UserPage3() {
  return (
    <div>
      <div className=" container">
        <div className="hidden sm:flex gap-1-6 text-4-0 font-fB uppercase">
          <h2>მომხმარებლის ID:</h2>
          <span className="text-orange">71228</span>
        </div>
        <div className="sm:flex mt-4-0 mb-14-0 gap-2-0">
          <div className="sm:block hidden">
            <UserPageBar />
          </div>
          <div className="sm:hidden">
            <SMUserPageBar title={'კომპანიები'}/>
          </div>
          <div className="w-full sm:p-3-0 bg-white rounded-1-0">
            <div className="flex-row">
              <div className="grid sm:flex sm:items-center sm:justify-center gap-1-5 sm:gap-3-0">
                <div className="flex w-full mt-1-5 sm:w-87-5 h-6-4 bg-grey-05 rounded-10-0">
                  <div className="w-full sm:bg-grey-05 uppercase rounded-10-0">
                    <input
                      name="ძებნა"
                      placeholder="საძიებო სიტყვა, ID ან ტელეფონის ნომერი"
                      className="my-2-5 ml-2-0 sm:ml-3-3 sm:mr-52-5 h-1-4 w-full sm:w-26-5 bg-grey-05 font-fR text-black-02 border-none outline-none text-1-2"
                    />
                  </div>
                  <button className="sm:block">
                    <img src="/images/search.svg" className="w-4-4" />
                  </button>
                </div>
                <div className="sm:block sm:w-19-2 h-4-4 px-3-0 pt-0-6 rounded-4-6 border-solid border-0-1 border-orange text-orange hover:bg-orange hover:text-white">
                  <button className="w-full sm:w-13-2 font-fB text-1-2 uppercase">კომპანიის დამატება</button>
                </div>
              </div>
              <div className="flex-row mt-5-2">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-1-7">
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                  <GhomeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage3;
