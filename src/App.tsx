import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import AppLayout from "./layouts/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
