import { useState } from "react";
function Login({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => {
    callback(name);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Which nickname do you want? </button>
    </div>
  );
}

export default Login;