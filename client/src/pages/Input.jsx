import React from "react";

const Input = ({ label, type, value, onChange }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm text-gray-300">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
    />
  </div>
);

export default Input;
