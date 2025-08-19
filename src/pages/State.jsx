import { useState } from "react";

const State = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, password, message);
  };
  return (
    <section className="p-24">
      <form onSubmit={handleSubmit} className="space-y-2 m-auto flex flex-col">
        <label htmlFor="fullname">Full name</label>
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="outline-none"
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3 resize-none outline-none"
          placeholder="enter your message"
        />

        <button className="bg-blue-500 px-4 py-2 rounded-lg w-fit text-white">
          Submit
        </button>
      </form>
    </section>
  );
};

export default State;

//FORM HANDLING
//Create useState for each input
//Give each input its value
//Give each input an onchange property
