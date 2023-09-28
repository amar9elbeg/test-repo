const Notification = (props) => {
  return (
    <div id="notification" style={{ backgroundColor: props.color }}>
      {props.text}
    </div>
  );
};

export default Notification;
