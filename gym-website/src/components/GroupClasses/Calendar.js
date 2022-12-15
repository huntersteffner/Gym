import GroupClassesData from '../../data/GroupClassesData'
import CalendarItem from './CalendarItem'

const Calendar = () => {
  const mondayClasses = GroupClassesData[0].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const tuesdayClasses = GroupClassesData[1].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const wednesdayClasses = GroupClassesData[2].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const thursdayClasses = GroupClassesData[3].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const fridayClasses = GroupClassesData[4].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const saturdayClasses = GroupClassesData[5].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))
  const sundayClasses = GroupClassesData[6].classes.map((item) => (
    <CalendarItem key={item.id} time={item.time} text={item.text} />
  ))

  // Based off of calendar here https://codepen.io/alvarotrigo/pen/XWZdgQw
  // return (
  //   <div class="container mx-auto mt-10">
  //     <div class="wrapper bg-white rounded shadow w-full ">
  //       <div class="header flex justify-between border-b p-2">
  //         <span class="text-lg font-bold">July 2023</span>
  //         <div class="buttons">
  //           <button class="p-1">
  //             <svg
  //               width="1em"
  //               fill="gray"
  //               height="1em"
  //               viewBox="0 0 16 16"
  //               class="bi bi-arrow-left-circle"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  //               />
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
  //               />
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
  //               />
  //             </svg>
  //           </button>
  //           <button class="p-1">
  //             <svg
  //               width="1em"
  //               fill="gray"
  //               height="1em"
  //               viewBox="0 0 16 16"
  //               class="bi bi-arrow-right-circle"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  //               />
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
  //               />
  //               <path
  //                 fill-rule="evenodd"
  //                 d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //       </div>
  //       <table class="w-full">
  //         <thead>
  //           <tr>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Sunday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Sun
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Monday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Mon
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Tuesday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Tue
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Wednesday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Wed
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Thursday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Thu
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Friday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Fri
  //               </span>
  //             </th>
  //             <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //               <span class="xl:block lg:block md:block sm:block hidden">
  //                 Saturday
  //               </span>
  //               <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
  //                 Sat
  //               </span>
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr class="calendar-row">
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">25</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   <div class="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
  //                     <span class="event-name">Meating</span>
  //                     <span class="time">12:00~14:00</span>
  //                   </div>
  //                   <div class="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
  //                     <span class="event-name">Meating</span>
  //                     <span class="time">18:00~20:00</span>
  //                   </div>
  //                   {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">26</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">27</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">28</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">29</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">30</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   <div class="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
  //                     <span class="event-name">Shopping</span>
  //                     <span class="time">12:00~14:00</span>
  //                   </div>
  //                   {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">1</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   <div class="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
  //                     <span class="event-name">Shopping</span>
  //                     <span class="time">12:00~14:00</span>
  //                   </div>
  //                   {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>

  //           {/* <!--         line 1 --> */}
  //           <tr class="calendar-row">
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">2</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                   {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">3</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">4</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">5</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">6</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">7</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">8</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>
  //           {/* <!--         line 1 --> */}

  //           {/* <!--         line 2 --> */}
  //           <tr class="calendar-row">
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">9</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">10</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">11</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">12</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">13</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">14</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">15</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>
  //           {/* <!--         line 2 --> */}

  //           {/* <!--         line 3 --> */}
  //           <tr class="calendar-row">
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">16</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">17</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">18</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">19</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">20</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">21</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">22</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>
  //           {/* <!--         line 3 --> */}

  //           {/* <!--         line 4 --> */}
  //           <tr class="calendar-row">
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">23</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">24</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">25</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">26</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">27</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">28</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">29</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>
  //           {/* <!--         line 4 --> */}
  //           <tr class="calendar-row">
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">30</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {sundayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-regular xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">31</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {mondayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">1</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {tuesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">2</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {wednesdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">3</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {thursdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500">4</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {fridayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //             <td class="calendar-column-other xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
  //               <div class="calendar-column-inner mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
  //                 <div class="top h-5 w-full">
  //                   <span class="text-gray-500 text-sm">5</span>
  //                 </div>
  //                 <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
  //                 {saturdayClasses}
  //                 </div>
  //               </div>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // )
  // return (
  //   <div className="container mx-auto mt-10">
  //     <div className="wrapper bg-white rounded shadow w-full">
  //       {/* Head */}
  //       <div className="header flex justify-center space-x-3 border-b p-2">
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Sunday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Monday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Tuesday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Wednesday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Thursday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Friday</span>
  //         </div>
  //         <div className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
  //           <span>Saturday</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="container mx-auto mt-10 border">
      {/* Head */}
      <div className="flex justify-between items-start">
        <div className="calendar-column">
          <div className="calendar-head">Sunday</div>
          <ul className="flex flex-col">
            {sundayClasses}
          </ul>
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Monday</div>
          {mondayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Tuesday</div>
          {tuesdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Wednesday</div>
          {wednesdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Thursday</div>
          {thursdayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Friday</div>
          {fridayClasses}
        </div>
        <div className="calendar-column">
          <div className="calendar-head">Saturday</div>
          {saturdayClasses}
        </div>
      </div>
      {/* classes */}
    </div>
  )
}

export default Calendar
