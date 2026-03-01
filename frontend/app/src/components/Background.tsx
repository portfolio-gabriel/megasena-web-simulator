import backgroundImage from "../assets/images/lucky-background.png";

const Background = () => {
  return (
    <img
      src={backgroundImage}
      className="fixed inset-0 -z-10 w-full h-full object-cover opacity-80"
    />
  );
};

export default Background;
