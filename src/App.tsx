import { useState } from "react";
import BigModalImg from "./components/BigModalImg";
import Header from "./components/Header";
import Images from "./components/Images";
import UploadForm from "./components/UploadForm";

function App() {

    const [selectedImg, setSelectedImg] = useState<any>(null)

    return (
        <div className="App">
            <Header />
            <UploadForm />
            <Images setSelectedImg={setSelectedImg} />
            {selectedImg && <BigModalImg selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    );
}

export default App;
