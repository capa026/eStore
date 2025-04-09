const InputError = ({ message, err }) => {
  return (
    <div className="mt-[-20px] px-2 text-red-300 w-max rounded-md">
      ❌ {message}
    </div>
  );
};

export default InputError;
