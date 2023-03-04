import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState();

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const fetchWord = word => {
    fetch(url + word)
      .then(res => res.json())
      .then(data => setWordData(prev => (prev = data)));
  };

  useEffect(() => {
    let container = document.getElementById("dataContainer");
    container.animate([{ opacity: 0 }], { duration: 100, fill: "forwards" });
    container.animate([{ left: "-200svh" }], { duration: 100, fill: "forwards" });
    setTimeout(() => {
      container.animate([{ left: "0", opacity: 1 }], { duration: 200, fill: "forwards" });
    }, 500);
  }, [wordData]);

  return (
    <div className="bg-blueish min-h-full">
      <Header word={word} setWord={setWord} fetchWord={fetchWord} />
      <div id="dataContainer" className="relative">
        {wordData ? (
          <div className="px-6 py-4">
            <h1 className="font-bold text-4xl">{wordData[0].word}</h1>
            <h2 className="text-2xl">{wordData[0].phonetic}</h2>
          </div>
        ) : null}
        {wordData
          ? wordData.map((elm, i) => (
              <div className="px-10 font-thin" key={i}>
                {elm.meanings.map(meaning => (
                  <div key={meaning}>
                    <h4>{meaning.partOfSpeech}</h4>
                    <ol className="px-4 pb-4">
                      {meaning.definitions.map((def, i) => (
                        <li className="py-1" key={i}>
                          {`${i + 1}. ${def.definition}`}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
