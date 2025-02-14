/* eslint-disable react/no-unescaped-entities */
import { ComponentsView } from '@/components/CodeViewBoxTwo/Index'

function page() {
  return (
    <div>
      <ComponentsView className='' title='' link=''>
        <iframe
          srcDoc={`<html>
  <head>
    <script src='https://cdn.tailwindcss.com'></script>
    <style>
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
      }
    </style>
  </head>
  <body class='bg-gray-50 px-4'>

<!-- component -->
<style>

  .body{background-color:white !important;}

  .tab {
    opacity:0;
    visibility:hidden;
    transform:translate(0,50px);
  }
  
  .active-tab,.active-button{
    transition:transform 0.2s,background 0.2s,color 0.2s;
  }
  
  .active-tab{
    visibility:visible;
    opacity:1;
    transform:translate(0,0);
    z-index:99;
  }
  .active-button{
    background:white !important;
    color:#3730a3;
  }
</style>
<div class="tabs mx-auto text-indigo-800 m-10" style="max-width:450px;">
  <div class="top flex text-gray-100 rounded-t-md overflow-hidden">
    <div class="header p-2 px-3 bg-indigo-800 w-full font-semibold uppercase">Tabs</div>
    <div class="buttons ml-auto my-auto flex">
      <span tab="1" class="btn bg-indigo-800 cursor-pointer p-2 px-3">One</span>
      <span tab="2" class="btn bg-indigo-800 cursor-pointer p-2 px-3">Two</span>
      <span tab="3" class="btn bg-indigo-800 cursor-pointer p-2 px-3">Three</span>
      <span tab="4" class="btn bg-indigo-800 cursor-pointer p-2 px-3">Four</span>
      <span tab="5" class="btn bg-indigo-800 cursor-pointer p-2 px-3">Five</span>
    </div>
  </div>
  <div class="center text-gray-800 relative">
<!-- tab start -->
   <div class="tab bg-white rounded-b-md w-full border border-t-0 absolute top-0">
      <p class="text-xl p-3 px-5 font-semibold">Wellcome To Tab 1</p>
      <img class="p-5 w-96" src="https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="p-3 px-5">
        <div class="long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita rem dolore ut numquam fugiat, accusantium consequatur ratione nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem adipisci cupiditate. Repellendus!</div>
        <br>
        <div tab="2" class="oint text-sm my-4 p-2 px-4 cursor-pointer font-semibold inline-block bg-indigo-800 rounded-sm text-indigo-100">Go Next Tab</div>
      </div>     
   
   </div>
<!--     tab end -->
   <div class="tab bg-white rounded-b-md w-full border border-t-0 absolute top-0">
      <p class="text-xl p-3 px-5 font-semibold">Wellcome To Tab 2</p>
      <div class="p-3 px-5">
        <div class="long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita rem dolore ut numquam fugiat, accusantium consequatur ratione nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem adipisci cupiditate. Repellendus!</div>
        <br>
        <div tab="3" class="oint text-sm my-4 p-2 px-4 cursor-pointer font-semibold inline-block bg-indigo-800 rounded-sm text-indigo-100">Go Next Tab</div>
      </div>     
   
   </div>
<!--     tab end -->
   <div class="tab bg-white rounded-b-md w-full border border-t-0 absolute top-0">
      <p class="text-xl p-3 px-5 font-semibold">Wellcome To Tab 3</p>
      <img class="p-5 w-96" src="https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="p-3 px-5">
        <div class="long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita rem dolore ut numquam fugiat, accusantium consequatur ratione nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem adipisci cupiditate. Repellendus!</div>
        <br>
        <div tab="4" class="oint text-sm my-4 p-2 px-4 cursor-pointer font-semibold inline-block bg-indigo-800 rounded-sm text-indigo-100">Go Next Tab</div>
      </div>     
   
   </div>
<!--     tab end -->
   <div class="tab bg-white rounded-b-md w-full border border-t-0 absolute top-0">
      <p class="text-xl p-3 px-5 font-semibold">Wellcome To Tab 4</p>
      <img class="p-5 w-96" src="https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="p-3 px-5">
        <div class="long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita rem dolore ut numquam fugiat, accusantium consequatur ratione nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem adipisci cupiditate. Repellendus!</div>
        <br>
        <div tab="5" class="oint text-sm my-4 p-2 px-4 cursor-pointer font-semibold inline-block bg-indigo-800 rounded-sm text-indigo-100">Go Next Tab</div>
      </div>     
   
   </div>
<!--     tab end -->
   <div class="tab bg-white rounded-b-md w-full border border-t-0 absolute top-0">
      <p class="text-xl p-3 px-5 font-semibold">Wellcome To Tab 5</p>
      <img class="p-5 w-96" src="https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="p-3 px-5">
        <div class="long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita rem dolore ut numquam fugiat, accusantium consequatur ratione nesciunt magnam quibusdam necessitatibus dolorum velit. Quia illo autem adipisci cupiditate. Repellendus!</div>
      </div>     
   
   </div>
<!--     tab end -->




  </div>
</div>

<script>
const root = document.querySelector(".tabs"),tabs=root.querySelectorAll(".tab"),btns=root.querySelectorAll(".btn");
  root.onclick = function(e){
    var t = e.target,val = t.getAttribute("tab");
    if(val != null){
      tabs.forEach(each=>{each.classList.remove("active-tab");});
      btns.forEach(each=>{each.classList.remove("active-button");});
      tabs[val - 1].classList.add("active-tab");
      btns[val - 1].classList.add("active-button");
    }
  }
</script>


  </body>
</html>`}
          width="100%"
          height="400"
          style={{ border: 'none' }}
        ></iframe>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div>    <div class="grid grid-cols-3 gap-5">      <button class="text-white p-4 rounded bg-indigo-500 shadow-md flex items-center justify-center"      >        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"        >          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />        </svg>        Home      </button>      <button class="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center"      >        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"        >          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />        </svg>        Profile      </button>      <button class="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center"      >        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"        >          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />        </svg>        Profile      </button>    </div>    <div class="shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6"    >      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt      tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,      williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh      dreamcatcher synth.    </div>  </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">    <li>      <a href="#page1" class="flex justify-center py-4">Pilot Training</a>    </li>    <li>      <a href="#page2" class="flex justify-center bg-white rounded-full shadow text-indigo-900 py-4">Titan maintenance</a>    </li>    <li>      <a href="#page3" class="flex justify-center py-4">Loadout</a>    </li>    <li>      <a href="#page4" class="flex justify-center py-4">Server Browser</a>    </li>    <li>      <a href="#page5" class="flex justify-center py-4">Settings</a>    </li>  </ul>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Architecto</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Corrupti</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Excepturi</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span>Consectetur</span>
          </a>
        </div>
      </ComponentsView>

      <ComponentsView className='' title='' link=''>
        <div className="flex items-center dark:bg-gray-100 dark:text-gray-800">
          <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-violet-600 dark:text-violet-600">Architecto</a>
          <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Corrupti</a>
          <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Excepturi</a>
          <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Consectetur</a>
        </div>
      </ComponentsView>
    </div>
  )
}

export default page