import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import theme from "./theme.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameInfo from "./pages/GameInfo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />\
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gameinfo" element={<GameInfo />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
