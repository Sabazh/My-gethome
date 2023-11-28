import { Input } from '@/components/Inputs/Input';
import { useContext, useState } from 'react';
import { Button } from '@/components/Inputs/Button';
import { AppContext } from '@/context/AppContext';
import clsx from 'clsx';

const MAIL = 'saba@gmail.com';
const PASSWORD = '123';
const STATES = {
  password: 'password',
  registration: 'registration',
  login: 'login',
};
const Login = () => {
  const { loginHandler, isLoggedInHandler } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(STATES.login);
  const [form, setForm] = useState({
    mail: '',
    password: '',
  });
  const [registration, setRegistration] = useState({
    name: '',
    mail: '',
    password: '',
    repeatPassword: '',
  });
  const [changePassword, setChangePassword] = useState({
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onChangeRegistration = (e) => {
    setRegistration((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onChangePassword = (e) => {
    setChangePassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (form.mail === MAIL && form.password === PASSWORD) {
      isLoggedInHandler();
      loginHandler(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="overflow-auto sm:flex w-full h-full fixed top-0 left-0 bg-white sm:bg-white-02/[0.7] justify-center items-center z-2">
      <div className="max-w-[61.2rem] w-full sm:bg-white-03 rounded-1-0 px-2-0 sm:px-2-5 py-2-0 sm:py-5-4 relative">
        <button className="absolute top-3-0 sm:top-2-0 right-2-0" onClick={() => loginHandler(false)}>
          <img src="/images/close.svg" alt="X" />
        </button>
        <div className="sm:flex mb-3-4 sm:mb-5-0 mt-1-0 items-center justify-center gap-0-5">
          <button
            className={clsx(
              { 'sm:bg-grey-03': isLogin },
              { 'sm:block hidden': isLogin === STATES.registration},
              'sm:px-4-4 sm:h-6-0 flex items-center justify-center text-2-6 font-fB uppercase text-black sm:rounded-4-6 duration-300'
            )}
            onClick={() => setIsLogin(STATES.login)}
          >
            ავტორიზაცია
          </button>
          <button
            className={clsx(
              { 'sm:bg-grey-03': !isLogin },
              { 'sm:block hidden': isLogin === STATES.login},
              'sm:px-4-4 sm:h-6-0 flex items-center justify-center text-2-6 font-fB uppercase text-black rounded-4-6'
            )}
            onClick={() => setIsLogin(!isLogin)}
          >
            რეგისტრაცია
          </button>
        </div>
        {!isLogin && (
          <div>
            <Input value={registration.name} name="name" placeholder="სახელი" onChange={onChangeRegistration} />
            <div className="mt-1-5 sm:mt-2-6">
              <Input value={registration.mail} placeholder="ელ-ფოსტა" name="mail" onChange={onChangeRegistration} />
            </div>
            <div className="mt-1-5 sm:mt-2-6">
              <Input value={registration.password} type="password" placeholder="პაროლი" name="password" onChange={onChangeRegistration} />
            </div>
            <div className="mt-1-5 sm:mt-2-6">
              <Input
                value={registration.repeatPassword}
                type="password"
                placeholder="გაიმეორე პაროლი"
                name="repeatPassword"
                onChange={onChangeRegistration}
              />
            </div>
            <div className="hidden sm:flex items-center justify-end mt-2-4">
              <Button>რეგისტრაცია</Button>
            </div>
            <button className='w-full mt-3-0 py-1-2 text-white font-fB text-2-0 uppercase bg-orange rounded-10-0 sm:hidden'>რეგისტრაცია</button>
          </div>
        )}
        {isLogin === STATES.login && (
          <form onSubmit={handleLogin}>
            <Input value={form.mail} name="mail" placeholder="ელ-ფოსტა" onChange={onChange} />
            <div className="mt-1-5 sm:mt-2-6">
              <Input value={form.password} type="password" placeholder="პაროლი" name="password" onChange={onChange} />
            </div>
            <div className="flex sm:items-center sm:flex-row flex-col justify-between mt-2-4 gap-1-0 sm:gap-3-0">
              <button className="mb-2-0 font-fR text-1-6 text-black text-left w-full" onClick={() => setIsLogin(STATES.password)}>
                პაროლის აღდგენა
              </button>
              <div className='hidden sm:block'>
                <Button>შესვლა</Button>
              </div>
              <button className='py-1-2 text-white font-fB text-2-0 uppercase bg-orange rounded-10-0 sm:hidden'>შესვლა</button>
              <button className='py-1-2 text-orange font-fB text-2-0 uppercase border-solid border-0-1 border-orange rounded-10-0 sm:hidden' onClick={() => setIsLogin(STATES.registration)}>რეგისტრაცია</button>
            </div>
            {error && <button className="font-fB text-1-4 text-orange nt-2-0">Password or Email is not correct</button>}
          </form>
        )}
        {isLogin === STATES.registration && (
          <div>
            <Input value={registration.name} name="name" placeholder="სახელი" onChange={onChangeRegistration} />
            <div className="mt-1-5 sm:mt-2-6">
              <Input value={registration.mail} placeholder="ელ-ფოსტა" name="mail" onChange={onChangeRegistration} />
            </div>
            <div className="mt-1-5 sm:mt-2-6">
              <Input value={registration.password} type="password" placeholder="პაროლი" name="password" onChange={onChangeRegistration} />
            </div>
            <div className="mt-1-5 sm:mt-2-6">
              <Input
                value={registration.repeatPassword}
                type="password"
                placeholder="გაიმეორე პაროლი"
                name="repeatPassword"
                onChange={onChangeRegistration}
              />
            </div>
            <div className="hidden sm:flex items-center justify-end mt-2-4">
              <Button>რეგისტრაცია</Button>
            </div>
            <button className='w-full mt-3-0 py-1-2 text-white font-fB text-2-0 uppercase bg-orange rounded-10-0 sm:hidden'>რეგისტრაცია</button>
          </div>
        )}
        {isLogin === STATES.password && (
          <div className="w-full h-full fixed top-0 left-0 bg-white-02/[0.7] flex justify-center items-center">
            <div className="flex-row w-61-2 px-2-0 sm:px-2-5 h-100-percent sm:h-auto rounded-1-0 bg-white-03 z-4">
              <div className="flex items-center justify-end mt-1-0 sm:mt-1-8">
                <button className="w-2-4" onClick={() => loginHandler(false)}>
                  <img src="/images/close.svg" alt="X" />
                </button>
              </div>
              <div className="sm:mt-2-4 font-fR uppercase">
                <h5 className="text-2-6 font-fB ">პაროლის აღდგენა</h5>
                <p className='text-1-2 sm:text-1-6 text-grey-04 sm:text-black'>პაროლის აღსადგენად გთხოვთ შეიყვანოთ ელ-ფოსტა</p>
              </div>
              <div className="mt-3-0 sm:mt-6-0">
                <Input value={changePassword.password} type="password" placeholder="პაროლი" name="password" onChange={onChangePassword} />
              </div>
              <div className="mt-2-0 sm:mt-6-0">
                <Input
                  value={changePassword.repeatPassword}
                  type="password"
                  placeholder="პაროლის გამეორება"
                  name="repeatPassword"
                  onChange={onChangePassword}
                />
              </div>
              <div className="hidden sm:flex items-center sm:justify-end mt-2-5 mb-4-2">
                <Button>დამახსოვრება</Button>
              </div>
              <button className='w-full mt-3-0 py-1-2 text-white font-fB text-2-0 uppercase bg-orange rounded-10-0 sm:hidden'>რეგისტრაცია</button>
            </div>
          </div>
        )}
        <p className="text-center mt-1-6 mb-3-0 text-black font-fB uppercase text-2-4">ან</p>
        <div className="grid sm:grid-cols-2 gap-1-0 sm:gap-2-0">
          <button className="h-7-0 px-3-0 flex items-center justify-center text-2-0 font-fR bg-grey-03 rounded-4-6">
            <img src="/images/fb.svg" alt="fb" />
            <span>Facebook</span>
          </button>
          <button className="h-7-0 px-3-0 flex items-center justify-center text-2-0 font-fR bg-grey-03 rounded-4-6">
            <img src="/images/google.svg" alt="fb" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
