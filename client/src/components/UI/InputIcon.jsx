const InputIcon = ({ icon, placeholder }) => {
  return (
    <div className="flex items-center justify-between focus-within:outline-2 focus-within:outline-black border border-black/30 rounded-md bg-w  bg-bg px-2 w-full max-w-180">
      <input
        type="text"
        className="p-2 outline-none rounded-md w-full"
        placeholder={placeholder || "Campo de texto..."}
      />
      {icon && (
        <span className="border-l border-l-black/30 pl-2 text-gray-400">
          {icon}
        </span>
      )}
    </div>
  );
};

export default InputIcon;
