
import { Link } from "react-router-dom";

const ProductCard = ({Prodd}) => {
  return (
    
   
        <Link to={`/products/singleProduct/${Prodd._id}`} className="">
            <div className="rounded-[25px] bg-gray-200 p-5 hover:bg-yellow-50">
                <div className="flex w-full items-center justify-center px-20 sm:px-5 md:px-10 lg:px-20">
                    <img
                        className="h-[255px] w-full"
                        src={require(`../images/p1.png`)}
                        alt=""
                    />
                </div>
                <div className="flex w-full items-center justify-between p-5">
                    <p className="text-lg font-bold">{Prodd.title}</p>{" "}
                    <p className="text-lg font-bold">{Prodd.price}</p>
                </div>
            </div>
        </Link>
 
    
  )
}

export default ProductCard;


