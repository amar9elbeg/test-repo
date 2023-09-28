const List = (props) => {
  console.log(props);
  return (
    <div className="taskContainer">
      <div className="enterBox" key={props.index}>
        {props.task}
      </div>
      <button className="deleteButton" onClick={props.onClick}>
        Delete
      </button>
    </div>
  );
};

export default List;
