const Button = (props) => {
  return (
    <div onClick={props.onSubmit} className="bg-blue-300 rounded-full text-lg m-4 py-2 w-1/2 self-center cursor-pointer">
      Submit
    </div>
  )
}

export default Button
