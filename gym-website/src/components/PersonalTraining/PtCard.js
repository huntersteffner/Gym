const PtCard = (props) => {
  return (
    <div className="flex flex-col justify-between bg-black md:rounded-lg">
      <div className="text-white">
        <h2 className="text-5xl text-center">{props.title}</h2>

        <p className="text-xl p-5 text-justify">{props.body}</p>
      </div>
      <div className="p-6 ">
        <img
          className="object-contain rounded-2xl w-full"
          src={props.image}
          alt="Personal Trainer Bench Press"
        />
      </div>
    </div>
  )
}

export default PtCard
