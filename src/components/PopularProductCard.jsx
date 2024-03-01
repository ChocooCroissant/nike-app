import { star } from "../../assets/icons"
import PropTypes from 'prop-types';

const PopularProductCard = ({imgURL, rating, name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img
            className="w-[280px] h-[280px]" 
            src={imgURL} 
            alt={name} 
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img 
                src={star} 
                alt="rating" 
                width={24}
                height={24}
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
                {rating}
            </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-colar-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

PopularProductCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default PopularProductCard;