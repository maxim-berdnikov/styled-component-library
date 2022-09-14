import React, { useEffect, useState } from "react";
import { Layout } from "Templates/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
