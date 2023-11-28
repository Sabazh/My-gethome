import PropTypes from 'prop-types';
const sizes = {
  standard: 'rounded-4-6 px-3-0 h-5-4',
  small: 'px-2-0 h-3-0 rounded-10-0 text-1-2',
  medium: 'px-3-0 h-4-4 rounded-4-6 text-1-2',
};
const Button = (props) => {
  const { children, size, className, ...rest } = props;
  return (
    <button {...rest} className={`${sizes[size]} bg-orange text-white uppercase font-fB ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['standard', 'small', 'medium']),
  className: PropTypes.string,
};
Button.defaultProps = {
  size: 'standard',
  className: '',
};
export default Button;
