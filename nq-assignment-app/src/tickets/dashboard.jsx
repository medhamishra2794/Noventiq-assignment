import { FiPlus } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Dashboard=()=>{
  return (
    <div className="dashboard-body-wrap">
      <div className="main-sidebar">
        <div className="sideMenu-list">
          <ul>
            <li>
              <IoMdHome />
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard-body">
        <div className="flex items-center justify-between">
          <div className="text-sm">Tickets</div>
          <div className="flex items-center gap-4">
            <div className="text-sm">Service Status</div>
            <div className="status-btn active">Active</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button class="primary-btn text-white text-xs font-bold py-2 pl-3 pr-8 rounded flex items-center"><FiPlus className="text-xl mr-1" /> Create ticket</button>
          <div class="relative mt-3">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch />
            </div>
            <input type="text" id="search-navbar" class="search-input block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-3xl bg-gray-50" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )   
}

export default Dashboard;
