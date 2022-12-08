import PtForm from "./PtForm"

const PtModal = () => {

  

  return (

    // Todo Modal Currently hidden
    <div>
      <div className="fixed hidden top-1/4 bg-black w-full h-1/2 z-40">
        <div className="flex justify-center items-center relative w-full h-full">
            <div className="absolute top-2 right-5 text-white z-50 ">X</div>
            <PtForm/>
        </div>
      </div>
    </div>
  )
}

export default PtModal
