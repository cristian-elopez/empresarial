import { GlobalStyles } from "./styles/globalStyles";
import { Routes } from "./routes/routes";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </Layout>
  );
}

export default App;
