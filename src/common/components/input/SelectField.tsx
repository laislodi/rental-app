import React from 'react';

function SelectField(props: { label: string, Options: string[], onChange: any }) {
  const key = 'select-' + props.label.replace(' ', '-').toLowerCase();
  return (
    <div className="col-12 py-2">
      <label htmlFor={key} className="form-label">{props.label}</label>
      <select className="form-select" id={key} required onChange={props.onChange} >
        {props.Options.map((option, index) => {
          let selected = false;
          if (index === 0)  selected = true;
          return <option selected={selected} value={option}>{props.Options[index]}</option>
        })}
      </select>
    </div>
  )
}

export default SelectField;
