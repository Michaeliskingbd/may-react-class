import { useState } from "react";

const Condition = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <section className="p-[150px] space-y-2">
      {login ? (
        <p className="text-3xl">Hello Mike</p>
      ) : (
        <p className="text-3xl">Hello Visitor</p>
      )}

      <button
        onClick={handleLogin}
        className="bg-blue-500 px-4 py-2 rounded-lg w-fit text-white"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="bg-blue-500 px-4 py-2 rounded-lg w-fit text-white"
      >
        Logout
      </button>
    </section>
  );
};

export default Condition;
