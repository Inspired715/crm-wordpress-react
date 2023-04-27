// Custom components
import React from "react";

function CustomInputField(props) {
  const { label, id, name, extra, type, placeholder } =
    props;

  return (
    <div className={`${extra}`}>
      <label htmlFor={id} className="text-white text-[18px]" style={{textTransform:'uppercase'}}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-2 flex w-full items-center justify-center rounded-[30px] border bg-white/0 p-3 text-[12px] text-white"/>
    </div>
  );
}

export default CustomInputField;
