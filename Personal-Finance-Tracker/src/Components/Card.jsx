const Card = ({type,amount,icon}) => {
  return (
    <>
      <div className='flex h-40 w-64 items-center shadow-xl rounded-lg p-6 gap-10 justify-center border-1'>
        <div>
            <p className='text-lg capitalize'>Total {type}</p>
            <p className='text-2xl font-bold'>₹. {amount}</p>
        </div>
        <div>
            {icon}
        </div>
      </div>
    </>
  )
}

export default Card
