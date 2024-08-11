import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignInForm({ handleClick }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isRemember: false,
  });
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      console.log(form);
      setForm({
        email: "",
        password: "",
        isRemember: false,
      });
    }
  };
  return (
    <div>
      <label className="block px-2 pt-2">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="bg-white block w-full p-1 sm:p-2 border border-solid border-[#e7e7e7] mt-3 outline-none"
      />
      <label className="block px-2 pt-2">Password</label>
      <div className="relative">
        {show ? (
          <button
            className="absolute text-lg sm:text-2xl right-[20px] top-1/2 -translate-y-1/2 z-10 text-primary"
            onClick={handleShow}
          >
            <FaEye />
          </button>
        ) : (
          <button
            className="absolute text-lg sm:text-2xl right-[20px] top-1/2 -translate-y-1/2 z-10 text-primary"
            onClick={handleShow}
          >
            <FaEyeSlash />
          </button>
        )}
        <input
          type={show ? "password" : "text"}
          name="password"
          value={form.password}
          onChange={handleChange}
          className="bg-white block w-full p-1 sm:p-2 border border-solid border-[#e7e7e7] mt-3 z-0 outline-none"
        />
      </div>
      <div className="flex mt-3 justify-between">
        <label className="select-none">
          <input
            type="checkbox"
            name="isRemember"
            checked={form.isRemember}
            onChange={handleCheck}
          />{" "}
          Remember me
        </label>
        <Link className="text-primary">Forgot password?</Link>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="my-4 py-1 sm:py-3 block w-full bg-primary text-white font-medium text-lg"
      >
        Sign In
      </button>
      <p className="py-3 text-center text-sm">
        Don&apos;t have an Account?{" "}
        <button className="text-primary" value="Sign Up" onClick={handleClick}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default SignInForm;
