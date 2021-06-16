

function TextField(props: { key: string, label: string }) {
  return (
    <div className="col-12 py-2">
      <label htmlFor={props.key} className="form-label">{props.label}</label>
      <input type="text" className="form-control" id={props.key}/>
    </div>
  )
}

export default TextField;
