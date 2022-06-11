
import { useLocation } from "react-router";


const Success = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Sucess
    </div>
  );
};

export default Success;