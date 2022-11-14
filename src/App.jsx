import { useEffect, useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState([]);
  const [letterMatrix, setLetterMatrix] = useState([]);
  const [number, setNumber] = useState(null);
  const [matched, setMatched] = useState([])

  const letters = [
    {id: 1, letter: 'A'},
    {id: 4, letter: 'B'},
    {id: 9, letter: 'C'},
  ];

  const letterarray = ['A', 'B', 'C'];

  const pairOfLetters = [...letters, ...letters, ...letters]
    //.sort(() => Math.random() - 0.5)

  const Shuffling = () =>{
    
    setLetterMatrix(pairOfLetters);  
    setActive(true);
    setNumber(letterarray[Math.floor(Math.random()*3)])
  }

  const Restart = () =>{
    setOpen([])  
  }
  
  useEffect(() => {
    
    
    
    const firstMatched = letterMatrix[open[0]];
      if(letterMatrix.letter === number){
      setMatched([...matched, firstMatched.letter]);
      //console.log("win")
      console.log(firstMatched.letter, number);
      }
      // console.log(open);
      // console.log(number);
      // console.log(letterMatrix.letter);


      if (open < 1) return;

    if (open.length === 1) setTimeout(() => setOpen([]), 1000);
    
  }, [open]);
  
  function flipCard(index) {
    setOpen((opened) => [...opened, index]);
  }

  //console.log(matched);

  return (
      <div className='w-full h-[100vh] flex justify-center items-center flex-col bg-[#0E5E6F]'>
      <div className={`${!active ? "hidden" : "block"}`}>{number}</div>
      <button onClick={Shuffling} className={`${active ? "hidden" : "block"} text-[48px]`}>
        Start
      </button>
      <button 
        className={`${!active ? "hidden" : "block"}`}
        onClick={Restart}>
        Restart
      </button>
        <div className="grid grid-cols-3 gap-[20px]">
          {letterMatrix.map((item, index) => {
             let flippedCard = false;

          if (open.includes(index)) flippedCard = true;
          if(matched.includes(letterMatrix.letter)) flipCard = true;
            return (
            <div 
              className={`${flippedCard ? "flipped" : ""} w-[100px] h-[100px] rounded-[20px] cursor-pointer`}
              onClick={() => flipCard(index)}
              key={index}
            >
              <div className="inner">
                <div className="front" 
                onClick={() => setNumber(letterarray[Math.floor(Math.random()*3)])}
                >
                  {item.letter}
                </div>
                <div className="back"></div>
              </div>

              
            </div>
            );
          })}
        </div>
      </div>
  )
}

export default App
