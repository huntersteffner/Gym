import ptBench from '../img/personal-training-bench.jpg'



const PtCard = (props) => {
    return <div className="flex md:w-70">
      <div className=" text-white items-center">
        <h2 className="text-7xl text-center">{props.title}</h2>

        <p>
          {props.body}
        </p>

        <img
          className="rounded-2xl m-7"
          src={props.image}
          alt="Personal Trainer Bench Press"
        />

        {/* https://unsplash.com/photos/NXMZxygMw8o */}
      </div>
    </div>
}

export default PtCard