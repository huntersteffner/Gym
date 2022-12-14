const MobileCalendarLI = ({text, time}) => {
    return (
        <li className="flex justify-between items-center border py-3 px-4 cursor-pointer odd:bg-gray-100">
            <h1>{text}</h1>
            <h1>{time}</h1>
          </li>
    )

}

export default MobileCalendarLI