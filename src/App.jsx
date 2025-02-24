// import { useState } from "react";

// function App() {
//   const xona = {
//     nomi: "Microsoft",
//     partalar: [
//       {
//         stullar: [
//           {
//             id: 1,
//             name: "Nazirov",
//             age: "18",
//             rang: "green",
//           },
//           {
//             id: 2,
//             name: "Abdulaziz",
//             age: "18",
//             rang: "gray",
//           },
//           {
//             id: 3,
//             name: null,
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//       {
//         stullar: [
//           {
//             id: 1,
//             name: "Muhammad",
//             age: "16",
//             rang: "green",
//           },
//           {
//             id: 2,
//             name: null,
//             rang: "green",
//           },
//           {
//             id: 3,
//             name: "Jahongir",
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//       {
//         stullar: [
//           {
//             id: 1,
//             name: null,

//             rang: "green",
//           },
//           {
//             id: 2,
//             name: null,
//             rang: "green",
//           },
//           {
//             id: 3,
//             name: null,
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//       {
//         stullar: [
//           {
//             id: 1,
//             name: "Ozodbek",
//             age: "18",
//             rang: "green",
//           },
//           {
//             id: 2,
//             name: "Samandar",
//             age: 16,
//             rang: "green",
//           },
//           {
//             id: 3,
//             name: null,
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//       {
//         stullar: [
//           {
//             id: 1,
//             name: "Abdulloh",
//             age: 18,
//             rang: "gray",
//           },
//           {
//             id: 2,
//             name: "Bahrom",
//             age: 18,
//             rang: "green",
//           },
//           {
//             id: 3,
//             name: "Asadbek",
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//       {
//         stullar: [
//           {
//             id: 1,
//             name: null,
//             rang: "green",
//           },
//           {
//             id: 2,
//             name: null,

//             rang: "green",
//           },
//           {
//             id: 3,
//             name: null,
//             rang: "green",
//           },
//         ],
//         rang: "amber",
//       },
//     ],
//   };
//   const [random, setRandom] = useState({
//     partaRandomIndex: Math.floor(Math.random() * xona.partalar.length),
//     stulRandomIndex: Math.floor(Math.random() * 3),
//   });
//   const [chempions, setChempions] = useState([]);
//   const chempion_name =
//     xona.partalar[random.partaRandomIndex].stullar[random.stulRandomIndex].name;

//   let count = 0;

//   xona.partalar.forEach((parta) => {
//     parta.stullar.forEach((stul) => {
//       if (stul.name) {
//         count++;
//       }
//     });
//   });

//   return (
//     <div className=" text-center">
//       <div>
//         <span className="font-bold">Xona Nomi: </span>
//         {xona.nomi}
//       </div>
//       <div>
//         <span className="font-bold">Partalar Soni: </span>
//         {xona.partalar.length}
//       </div>
//       <div>
//         <span className="font-bold">Xonada bor Oquvchilar soni: </span>
//         {count}
//       </div>
//       <div>
//         <span className="font-bold">Yutgan Parta: </span>
//         {random.partaRandomIndex + 1}
//       </div>
//       <div>
//         <span className="font-bold">Yutgan Stul: </span>
//         {random.stulRandomIndex + 1}
//       </div>
//       <div>
//         <span className="font-bold">Yutgan Oquvchi: </span>
//         {chempion_name}
//       </div>

//       <div className="grid grid-cols-2 gap-6 w-[600px]  mx-auto my-10">
//         {xona.partalar.map((parta, partaIndex) => {
//           return (
//             <div key={partaIndex} className="flex flex-col gap-1 ">
//               <div
//                 className={`   h-18 ${
//                   partaIndex === random.partaRandomIndex &&
//                   parta.stullar[random.stulRandomIndex].name
//                     ? `bg-red-500`
//                     : `bg-amber-200`
//                 }   font-bold text-white  rounded`}
//               >
//                 {partaIndex + 1}
//               </div>
//               <div className="flex gap-1">
//                 {parta.stullar.map((stul, stulIndex) => {
//                   return (
//                     <div
//                       key={stulIndex}
//                       className={` ${
//                         stul.name ? "h-8" : "h-4"
//                       } text-white w-full overflow-hidden text-ellipsis text-center ${
//                         random.partaRandomIndex === partaIndex &&
//                         random.stulRandomIndex === stulIndex &&
//                         stul.name
//                           ? `bg-red-500`
//                           : `bg-green-500`
//                       }  rounded `}
//                     >
//                       {stul.name && stul.name}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button
//         onClick={() => {
//           setRandom({
//             partaRandomIndex: Math.floor(Math.random() * xona.partalar.length),
//             stulRandomIndex: Math.floor(Math.random() * 3),
//           });

//           setChempions(chempions.concat(chempion_name))
//         }}
//         className="text-center w-48 bg-red-500 p-2 rounded-2xl text-white"
//       >
//         RANDOM
//       </button>
//       <div>{chempions.map((item)=>{
//         return <div>{item}</div>
//       })}</div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const xona = {
    nomi: "Microsoft",
    partalar: [
      {
        stullar: [
          { id: 1, name: "Nazirov", age: "18", rang: "green" },
          { id: 2, name: "Abdulaziz", age: "18", rang: "gray" },
          { id: 3, name: null, rang: "green" },
        ],
        rang: "amber",
      },
      {
        stullar: [
          { id: 1, name: "Muhammad", age: "16", rang: "green" },
          { id: 2, name: null, rang: "green" },
          { id: 3, name: "Jahongir", rang: "green" },
        ],
        rang: "amber",
      },
      {
        stullar: [
          { id: 1, name: null, rang: "green" },
          { id: 2, name: null, rang: "green" },
          { id: 3, name: null, rang: "green" },
        ],
        rang: "amber",
      },
      {
        stullar: [
          { id: 1, name: "Ozodbek", age: "18", rang: "green" },
          { id: 2, name: "Samandar", age: 16, rang: "green" },
          { id: 3, name: null, rang: "green" },
        ],
        rang: "amber",
      },
      {
        stullar: [
          { id: 1, name: "Abdulloh", age: 18, rang: "gray" },
          { id: 2, name: "Bahrom", age: 18, rang: "green" },
          { id: 3, name: "Asadbek", rang: "green" },
        ],
        rang: "amber",
      },
      {
        stullar: [
          { id: 1, name: null, rang: "green" },
          { id: 2, name: null, rang: "green" },
          { id: 3, name: null, rang: "green" },
        ],
        rang: "amber",
      },
    ],
  };
  const [random, setRandom] = useState({
    partaRandomIndex: Math.floor(Math.random() * xona.partalar.length),
    stulRandomIndex: Math.floor(Math.random() * 3),
  });
  const [chempions, setChempions] = useState({});
  const chempion_name =
    xona.partalar[random.partaRandomIndex].stullar[random.stulRandomIndex].name;

  let count = 0;

  xona.partalar.forEach((parta) => {
    parta.stullar.forEach((stul) => {
      if (stul.name) {
        count++;
      }
    });
  });

  return (
    <div className="text-center">
      <div>
        <span className="font-bold">Xona Nomi: </span>
        {xona.nomi}
      </div>
      <div>
        <span className="font-bold">Partalar Soni: </span>
        {xona.partalar.length}
      </div>
      <div>
        <span className="font-bold">Xonada bor Oquvchilar soni: </span>
        {count}
      </div>
      <div>
        <span className="font-bold">Yutgan Parta: </span>
        {random.partaRandomIndex + 1}
      </div>
      <div>
        <span className="font-bold">Yutgan Stul: </span>
        {random.stulRandomIndex + 1}
      </div>
      <div>
        <span className="font-bold">Yutgan Oquvchi: </span>
        {chempion_name || "Ism yo'q"}
      </div>

      <div className="grid grid-cols-2 gap-6 w-[600px] mx-auto my-10">
        {xona.partalar.map((parta, partaIndex) => (
          <div key={partaIndex} className="flex flex-col gap-1">
            <div
              className={`h-18 ${
                partaIndex === random.partaRandomIndex &&
                parta.stullar[random.stulRandomIndex].name
                  ? "bg-red-500"
                  : "bg-amber-200"
              } font-bold text-white rounded`}
            >
              {partaIndex + 1}
            </div>
            <div className="flex gap-1">
              {parta.stullar.map((stul, stulIndex) => (
                <div
                  key={stulIndex}
                  className={`${
                    stul.name ? "h-8" : "h-4"
                  } text-white w-full overflow-hidden text-ellipsis text-center ${
                    random.partaRandomIndex === partaIndex &&
                    random.stulRandomIndex === stulIndex &&
                    stul.name
                      ? "bg-red-500"
                      : "bg-green-500"
                  } rounded`}
                >
                  {stul.name || ""}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setRandom({
            partaRandomIndex: Math.floor(Math.random() * xona.partalar.length),
            stulRandomIndex: Math.floor(Math.random() * 3),
          });

          if (chempion_name) {
            setChempions((prev) => ({
              ...prev,
              [chempion_name]: (prev[chempion_name] || 0) + 1,
            }));
          }
        }}
        className="text-center w-48 bg-red-500 p-2 rounded-2xl text-white"
      >
        RANDOM
      </button>

      <div className="mt-5">
        <h2 className="font-bold">Yutgan O'quvchilar:</h2>
        {Object.entries(chempions).length > 0 ? (
          Object.entries(chempions).map(([name, count]) => (
            <div key={name}>
              {name} - {count} marta yutdi
            </div>
          ))
        ) : (
          <div>Hali hech kim yutmadi</div>
        )}
      </div>
    </div>
  );
}

export default App;