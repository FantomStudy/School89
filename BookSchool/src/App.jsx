import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import DocSection from "./Components/DocSection/DocSection.jsx";
import QrSection from "./Components/QrSection/QrSection.jsx";
import {Accordion, AccordionTab} from "primereact/accordion";

const docs = [
    {
        id: 1,
        path: '05_04_2024г_Устав_ОМОО_Сюз_родителей_СОШ_89_г_Оренбург.pdf'
    },
    {
        id: 2,
        path: '06.05.2024Лист записи в ЕРГЮЛ.pdf'
    },
    {
        id: 3,
        path: 'ul-1245600004132-20240515124442.pdf'
    }
]

function App() {
  return (
    <>
        <Header />
        <IntroSection />
        <DocSection />
        <QrSection />
        <Accordion>
            <AccordionTab id="docs" header='Остальные документы'>
                {docs.map((doc) => (
                    <a key={doc.id} className='pdfRow' href={doc.path} target="_blank">
                        <img src='pdf.svg'/>
                        <p>{doc.path}</p>
                    </a>
                ))}
            </AccordionTab>
        </Accordion>
        <Footer />
    </>
  );
}

export default App;
