const Description = ({ text }) => {
  return (
    <div className="w-full mt-6">
      <h1 className="text-4xl md:text-6xl text-gray-300 font-tilt cursor-default">
        {text}
      </h1>
      <div className="w-24 h-[2px] bg-[#5f5b71] rounded-full mt-4" />
    </div>
  );
};

export default Description;