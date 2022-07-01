const Message = ({ message }) => {
  return (
    <div
      className={`${
        message.error ? "from-red-400 to-red-600" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center py-1 px-3 rounded text-white mt-2 font-light shadow-md shadow-gray-300`}
    >
      <h3>{message.txt}</h3>
    </div>
  );
};

export default Message;
