

const PtCard = (props) => {
    return <div className="flex">
      <div className=" text-white items-center">
        <h2 className="text-7xl text-center">{props.title}</h2>

        <p>
          {props.body}
        </p>

        <img
          className="object-contain rounded-2xl m-7 w-50"
          src={props.image}
          alt="Personal Trainer Bench Press"
        />

        {/* https://unsplash.com/photos/NXMZxygMw8o */}
      </div>
    </div>
}

export default PtCard