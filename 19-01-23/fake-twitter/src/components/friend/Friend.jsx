import './index.css';

const Friend = ({ data }) => {
  const { name, username } = data;
  return (
    <div className="Friend">
      <img
        className="avatar"
        src={'https://robohash.org/' + username + '.png'}
        alt=""
      />
      {name}
    </div>
  );
};

export default Friend;