import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import FormComponent from "./components/Form";
import StackComponent from "./components/Stack";
import LayoutComponent from "./components/Layout";
function App() {
  return (
    <>
      <NavbarComponent />
      <FooterComponent/>
      < FormComponent /> 
      <StackComponent/>
      <LayoutComponent/>
    </>
  );
}

export default App;
