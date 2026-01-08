interface SearchBarProps {
  type: string;
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
}

const SearchBar = ({
  type,
  placeholder,
  value,
  handleChange,
}: SearchBarProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg border border-gray-600 focus:outline-none max-w-87.5"
    />
  );
};

export default SearchBar;
