import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { About, Features, Home } from "./pages";
import JsonFormatter from "./tools/JsonFormatter/JsonFormatter";
import Base64Tool from "./tools/Base64/Base64Tool";
import MarkdownPreview from "./tools/Markdown/MarkdownPreview";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/tools/json" element={<JsonFormatter />} />
        <Route path="/tools/base64" element={<Base64Tool />} />
        <Route path="/tools/markdown" element={<MarkdownPreview />} />
      </Route>
    </Routes>
  );
};

export default App;
