const SubmitButton = ({ text }) => {
  return (
    <button
      className="border border-gray-600 bg-black p-4 rounded-md w-max mx-auto cursor-pointer hover:bg-white/30 hover:text-black"
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
