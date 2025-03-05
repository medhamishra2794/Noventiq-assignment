import "./login.scss";
import logo from "../assets/images/logo.svg";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";


const Login=()=> {
  return (
    <>
      <div className="login-layout">
        <div className="login-wrap">
          <div className="login-logo">
            <img src={logo} alt="Noventiq Logo" />
          </div>
          <div className="login-card">
            <form class="w-full">
              <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                  <label class="block font-bold mb-1 md:mb-0 pr-4 text-base" for="inline-full-name">
                    Email :
                  </label>
                </div>
                <div class="md:w-2/3">
                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                      <div class="shrink-0 text-base select-none sm:text-sm/6"><MdOutlineEmail /></div>
                      <input type="email" name="email" id="email" class="block grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    </div>
                </div>
              </div>
              <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                  <label class="block font-bold mb-1 md:mb-0 pr-4 text-base" for="inline-full-name">
                    Password :
                  </label>
                </div>
                <div class="md:w-2/3">
                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300">
                      <div class="shrink-0 text-base select-none sm:text-sm/6"><GoLock /></div>
                      <input type="password" name="password" id="password" class="block grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                      <div class="grid shrink-0 grid-cols-1 pr-3 text-gray-500">
                        <MdOutlineRemoveRedEye />
                      </div>
                    </div>
                    <a href="#" className="block text-xs underline font-medium mt-2">Forgot Password?</a>
                </div>
              </div>
              <div class="md:flex md:items-center mb-4">
                <div class="md:w-1/3">
                  <label class="block font-bold mb-1 md:mb-0 pr-4 text-base" for="inline-full-name">
                    Language :
                  </label>
                </div>
                <div class="w-48">
                  <div class="grid grid-cols-1">
                    <select id="language" name="language" autocomplete="language-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Tamil</option>
                    </select>
                    <div class="flex justify-center items-center pointer-events-none col-start-1 row-start-1 w-8 h-9 self-center justify-self-end sm:w-6 text-lg border-l border-gray-300"><MdOutlineArrowDropDown /></div>
                  </div>
                </div>
              </div>
              <div class="md:flex md:items-center justify-center">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gray-900"></div>
                  <span class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-600">Remember me</span>
                </label>
              </div>
            </form>
          </div>
          <div className="mt-4 flex justify-center">
            <button class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded w-56">
              Log in
            </button>
          </div>
        </div>
        <div className="mt-6 text-xs font-semibold">
          Copyright 2024 Noventiq | Powered by Noventiq
        </div>
      </div> 
    </>
  );
}

export default Login;
