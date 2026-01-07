import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./router/Index";

const App = () => {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
};

export default App;
