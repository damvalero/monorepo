import { SelectProps } from "../../types";
import './select.css'

const Select = ({ categories, onFilterValueSelected }: SelectProps) => {
  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    onFilterValueSelected(e.target.value);
  };

  return (
    <>
      <div className="select-space" >
        <select
          className="form-select"
          name="Categories"
          onChange={onFilterChange}
        >
          <option selected value="all">
            All
          </option>
          {categories.map((category) => {
            return <option className="select-option" value={category}>{category}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
