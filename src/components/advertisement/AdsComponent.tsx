function AdsComponent(props: {
  adClassName?: string;
  imgSrc?: string;
  srcUrl?: string;
  imgAlt?: string;
  onAdClosed: () => void;
}) {
  // Open the advertisement source URL in a new tab when clicked
  const handleSrcClick = () => {
    if (props.srcUrl) {
      window.open(props.srcUrl, "_blank");
    }
  };
  return (
    <>
      <div className={`w-full h-[60px] relative ${props.adClassName} `}>
        <div onClick={() => handleSrcClick()} className="width-full h-full">
          <img
            src={props.imgSrc ?? "/image/Group 3.svg"}
            alt={props.imgAlt ?? "Advertisement"}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <button
          className="absolute top-[30%] right-10 hover:bg-gray-200 px-2 rounded-full"
          onClick={() => props.onAdClosed?.()}
          aria-label="Close Advertisement"
          title="Close Advertisement"
        >
          X
        </button>
      </div>
    </>
  );
}

export default AdsComponent;
