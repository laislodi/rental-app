

function TextField(props: { key: string, label: string, onChange: any }) {

  return (
    <div className="col-12 py-2">
      <label htmlFor={props.key} className="form-label">{props.label}</label>
      <input type="text" className="form-control" id={props.key} onChange={ props.onChange } />
    </div>
  )
}

export default TextField;
