import { useState } from "react"

const ImageSlider = ({person}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (<div className="h-full relative">
        <div className="absolute t-[50%]">leftarrow</div>
        <div className="">rightarrow</div>
        <div className="w-full h-full rounded bg-blue-300 z-20"></div>
    </div>)
}

export default ImageSlider