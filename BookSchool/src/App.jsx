import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import DocSection from "./Components/DocSection/DocSection.jsx";
import QrSection from "./Components/QrSection/QrSection.jsx";
import {Accordion, AccordionTab} from "primereact/accordion";
import { useState } from "react";

const docs = [
    {
        id: 1,
        path: '05_04_2024г_Устав_ОМОО_Сюз_родителей_СОШ_89.pdf'
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
    const [sortedDocs, setSortedDocs] = useState(docs);
    const [sortAscending, setSortAscending] = useState(true); // Направление сортировки

    const handleSort = () => {
        const sorted = [...sortedDocs].sort((a, b) => {
            const nameA = a.path.split('/').pop(); // Имя файла
            const nameB = b.path.split('/').pop();
            return sortAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA); // Изменение направления
        });
        setSortedDocs(sorted);
        setSortAscending(!sortAscending); // Переключение направления
    };
  return (
    <>
        <Header />
        <IntroSection />
        <DocSection />
        <QrSection />
        <Accordion>
            <AccordionTab id="docs" header='Остальные документы'>
                <button onClick={handleSort}><img src={sortAscending ? 'Arrow_Down_Up.svg' : 'Arrow_Up_Down.svg'}/></button>
                {sortedDocs.map((doc) => (
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
