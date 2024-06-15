import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import DocSection from "./Components/DocSection/DocSection.jsx";
import QrSection from "./Components/QrSection/QrSection.jsx";


function App() {
  return (
    <>
        <Header />
        <IntroSection />
        <DocSection />
        <QrSection />
        <Footer />
    </>
  );
}

export default App;
