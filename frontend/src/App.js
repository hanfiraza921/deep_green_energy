import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import { LanguageProvider } from "@/i18n/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </LanguageProvider>
    </div>
  );
}

export default App;
