import { SelectProps } from "../../types";
import "./select.css";

const Select = ({ options, selectName, onValueSelected }: SelectProps) => {
  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    onValueSelected(e.target.value);
  };

  return (
    <>
      <div className="select-space">
        <select
          className="form-select select-option"
          name={selectName}
          onChange={onFilterChange}
        >
          {selectName === "Categories" ? (
            <option className="select-option" selected value="all">
              All
            </option>
          ) : (
            <option className="select-option" selected value="">
              Choose order
            </option>
          )}
          {options.map((category) => {
            return (
              <option className="select-option" value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
