import PropTypes from 'prop-types';

const Button = ({label, iconURL, gray, fullWidth }) => {
  return (
    <button className={`rounded-full flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${ gray ? "bg-white text-slate-gray border-slate-gray" : "bg-coral-red text-white border-coral-red" }
    ${fullWidth && "w-full"}`}>
        {label}
        {iconURL &&
        <img 
            src={iconURL} 
            alt="arrow right icon"
            className="ml-2 w-5 h-5"
        />}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  gray: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Button;
