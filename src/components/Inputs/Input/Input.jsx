import PropTypes from 'prop-types';

const Input = (props) => {
  const { value, onChange, placeholder, type, name } = props;
  return (
    <label>
      <p className="text-2-0 font-fR text-black uppercase mb-1-5">{placeholder}</p>
      <input
        type={type}
        name={name}
        className="text-black font-fR rounded-1-0 h-6-0 w-full bg-white-04 text-2-0 px-2-0"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  name: 'input',
};
export default Input;
