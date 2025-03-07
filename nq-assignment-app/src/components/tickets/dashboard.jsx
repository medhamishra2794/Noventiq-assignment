import { FiPlus } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { IoSearch, IoTicket } from "react-icons/io5";

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
            <div className="text-sm">Service Status - </div>
            <div className="status-btn active">Active</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <button class="primary-btn text-white text-xs font-bold py-2 pl-3 pr-8 rounded flex items-center"><FiPlus className="text-xl mr-1" /> Create ticket</button>
          <div class="relative mt-3">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch />
            </div>
            <input type="text" id="search-navbar" class="search-input shadow-md block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-3xl bg-gray-50" placeholder="Search" />
          </div>
        </div>
        
        <div class="grid gap-4 grid-cols-5 mt-18">
          <div className="">
            
            <div id="accordion-collapse" data-accordion="open">
              <h2 id="accordion-collapse-heading-1 mx-5">
                <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right text-gray-500 bg-white rounded-md gap-3 shadow-md" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span>Open 3</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="mt-5 bg-white rounded-md" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-3">
                  <div className="card-ticket">
                    <div className="card-head">
                      <div className="ticket-icon"><IoTicket /></div>
                      <div className="ticket-title">#420079 Test P2 SR - Platinum</div>
                    </div>
                      <div className="ticket-detail">Type - Incident</div>
                      <div className="ticket-detail">Registration date - <br /> 05/03-2025 06:00 PM</div>
                      <div className="ticket-detail">Resolve by - <br /> 10/03-2025 04:00 PM</div>
                      <div className="priority-status low">Priority - High</div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
          <div className="">fsfsdf</div>
          <div className="">fsfsdf</div>
        </div>

      </div>
    </div>
  )   
}

export default Dashboard;
