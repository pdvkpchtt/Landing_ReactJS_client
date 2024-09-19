import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import NavHandler from "./pages/NavHandler";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <NavHandler />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
