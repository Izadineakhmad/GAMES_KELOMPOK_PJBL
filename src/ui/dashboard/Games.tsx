import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { organic, anorganic, b3, park } from "@/assets";

type TrashType = "organic" | "anorganic" | "b3";

const trashTypes: TrashType[] = ["organic", "anorganic", "b3"];

const trashEmojis: Record<TrashType, string[]> = {
  organic: ["🍌", "🥩", "🌿", "🍂", "🥦" ],
  anorganic: ["🍼",  "🪥", "🧴 ", "🥤 ", "🪣 "],
  b3: ["🛢️", "🧤", "🔋", "💡", "🧽"],
};
const binImage = {organic, anorganic, b3}

export default function TrashGameWithPhysics() {
  const [indexEmoji, setIndexEmoji] = useState<number>(0) 
  const [trashes, setTrashes] = useState<TrashType[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [disableAnimation, setDisableAnimation] = useState<string>('');
  const [remainingTrash, setRemainingTrash] = useState<TrashType[]> (trashTypes);
  const trashKey = useRef<number>(0);
  const binRef = useRef<(HTMLDivElement | null)[]>([]);
  const trashRef = useRef<(HTMLDivElement | null)[]>([]);

  // generate 3 sampah acak
  const generateTrashes = () => {
    const indexes = Array.from({ length : trashTypes.length }, (_, i) => i);
      for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
      } 
    const indexesArray =Array.from(indexes, mapFn => trashTypes[mapFn])
    setTrashes(indexesArray);
    console.log(indexEmoji)
    trashKey.current += 1; // reset posisi
  };
  
  const startGame = () => {
    setScore(0);
    setIndexEmoji(0);
    setGameOver(false);
    setRemainingTrash(trashTypes)
    generateTrashes();
  };
  
  // cek collision untuk tiap sampah
  const checkCollision = (trashIndex: number) => {
    const trashEl = trashRef.current[trashIndex];
    if (!trashEl) return;
    const trashRect = trashEl.getBoundingClientRect();
    binRef.current.forEach((binEl, index) => {
      if (!binEl) return;
      const binRect = binEl.getBoundingClientRect();
      
      const overlap =
        trashRect.left < binRect.right &&
        trashRect.right > binRect.left &&
        trashRect.top < binRect.bottom &&
        trashRect.bottom > binRect.top;

        if (overlap) {
          const binType = trashTypes[index];
          if (binType === trashes[trashIndex]) {
            // benar ✅
            setScore((prev) => prev + 1);
            setRemainingTrash(prev => prev.filter(trashFilter => trashFilter != trashes[trashIndex]));
            // ganti sampah ini dengan baru
            if ((score + 1) % 3 == 0 ) {
              trashKey.current += 1
              setIndexEmoji(indexEmoji == trashEmojis['organic'].length - 1 ?  0 : indexEmoji + 1 )
              generateTrashes()
              setRemainingTrash(trashTypes)
            } 
        } else {
          setGameOver(true);
        }
      }
    });
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    console.log(remainingTrash)
  }, [remainingTrash]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      {gameOver ? (
        <div className="text-center">
          <h1 className={`text-3xl font-bold ${gameOver && 'animate-pulse'}`}>♻️ Physics Trash Game</h1>
          <p className="text-xl  animate-bounce">Score: {score}</p>
          <p className="text-red-600 text-xl mb-2">Game Over!</p>
          <button
            onClick={startGame}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Restart
          </button>
        </div>
      ) : (
        <div className="relative w-full max-w-lg h-[450px]  rounded-lg overflow-hidden bg-cover shadow-inner shadow-teal-400 backdrop-blur-2xl bg-no-repeat bg-bottom-left" style={{backgroundImage: `url('${park}')`}}>
          <div className="flex flex-col items-center text-white drop-shadow-md drop-shadow-black my-4">
            <h1 className={`text-3xl font-bold ${gameOver && 'animate-pulse bg-red-500/'}`} style={{backgroundColor: 'red 50%, transparent'}}>♻️ Physics Trash Game</h1>
           <div className="relative ">
             <p className="text-xl">Score: {score}</p>
             <p key={score} className={`text-xl ${score ? 'animate-muncul' : ''} whitespace-nowrap opacity-0 absolute top-0 left-20`}>+1 Point</p>
           </div>
          </div>
          {/* 3 Sampah draggable */}
          <div className=" flex justify-around ">
          {trashes.map((trash, index) => (
            <motion.div
              key={`${trashKey.current}-${index}`}
              ref={(el) => {
                trashRef.current[index] = el;
              }}
              className={`trash-item-${index}  text-6xl cursor-grab drop-shadow-accent drop-shadow-md ${disableAnimation == trash ? '' : 'animate-shake'} ${!remainingTrash.includes(trash) ? ' invisible' : ''} `}
              drag
              dragMomentum={false}
              dragElastic={0.2}
              onDrag={() => {
                setDisableAnimation(trash)
              }}
              onDragEnd={() => {
                checkCollision(index);
                setDisableAnimation('')
              }}
            >
              {trashEmojis[trash][indexEmoji]}
            </motion.div>
          ))}
          </div>

          {/* Tempat sampah */}
          <div className="absolute bottom-4 w-full flex justify-around">
            {trashTypes.map((type, index) => (
              <div
                key={index}
                ref={(el) => {
                  binRef.current[index] = el;
                }}
                className={`w-20 h-32  rounded-lg flex items-center justify-center text-sm font-semibold bg-cover drop-shadow-2xl`}
                style={{backgroundImage: `url(${binImage[type]})`}}
              >
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}