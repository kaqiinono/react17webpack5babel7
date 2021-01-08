const { Link } = require('react-router-dom');

const Parent = () => {
  return (
    <div>
      parent
      <p>
        <Link to="/p/c1">c1</Link>
      </p>
      <p>
        <Link to="/p/c2">c2</Link>
      </p>
    </div>
  );
};

export default Parent;
