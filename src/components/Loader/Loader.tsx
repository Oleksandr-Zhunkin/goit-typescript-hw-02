import { CirclesWithBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
};
