import "./style.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components";
import { useNavigation } from "react-router-dom";
const DashBoard = () => {
  const isLoading = useNavigation().state == "loading";
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <section className="dashboard">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </section>
      )}
    </>
  );
};

export default DashBoard;
