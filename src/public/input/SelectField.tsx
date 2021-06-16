import React from 'react';

function SelectField(props: { key: string, label: string, Options: string[] }) {
  return (
    <div className="col-12 py-2">
      <label htmlFor={props.key} className="form-label">{props.label}</label>
      <select className="form-select" id={props.key} required>
        {props.Options.map((option, index) => {
          let selected = false;
          if (index === 0)  selected = true;
          return <option selected={selected} value={index}>{props.Options[index]}</option>
        })}
      </select>
    </div>
  )
}

export default SelectField;
