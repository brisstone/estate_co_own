import { Select } from "antd";
import React, { Children } from "react";
import "./TextInput.scss";

export default function TextInput(props) {
  let { placeholder, suffix, textArea, isSelect, onChange, value, options, id } = props;

  return (
    <div className="input_container">
      {textArea ? (
        <textarea
          {...props}
          autoComplete="none"
          placeholder={placeholder}
          className={`text_area ${props.className}`}
        >
      
        </textarea>
      ) : isSelect ? (
        <>
          <Select
            id={id}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            // className={`${props.className} ${isOccupied ? "push" : ""}`}
            // showSearch={isSearchable}
            optionFilterProp="children"
            // filterOption={(input, option) =>
            //   option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            // filterSort={(optionA, optionB) =>
            //   optionA?.children
            //     .toLowerCase()
            //     .localeCompare(optionB?.children.toLowerCase())
            // }
          >
            {options.map((option) => (
              <Select.Option value={option.value}>{option.label}</Select.Option>
            ))}
          </Select>
        </>
      ) : (
        <>
          {" "}
          <input
            {...props}
            autoComplete="none"
            placeholder={placeholder}
            className={`inputTag ${props.className}`}
          />
        </>
      )}
    </div>
  );
}
