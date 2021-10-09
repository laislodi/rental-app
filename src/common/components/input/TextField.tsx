

function TextField(props: { value: string, label: string, onChange: any }) {
  const key = 'textfield-' + props.label.toLowerCase().replace(' ', '-');
  return (
    <div className="col-12 py-2">
      <label htmlFor={key} className="form-label">{props.label}</label>
      <input type="text" value={props.value} className="form-control" id={key} onChange={ props.onChange } />
    </div>
  )
}

export default TextField;
