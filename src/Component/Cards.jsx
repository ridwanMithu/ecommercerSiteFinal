

const Cards = ({cardInfo}) => {

  const {title, description, price, stock, brand, thumbnail}=cardInfo;
  
  
  return (
    <div>
      <div className="card w-[23vw] h-[75vh] glass flex flex-wrap">
        <figure><img className="w-[22vw]" src={thumbnail} alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h4>{brand}</h4>
          <p>{description}</p>
          <p className="font-bold text-rose-600">${price}</p>
          <p>only {stock} left</p>
          <div className="justify-end card-actions">
            <button className="mx-auto btn btn-info">More Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards