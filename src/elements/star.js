import { useState } from "react";



const Star = () => {

  const [rate, setRate] = useState(0);

  
  
  return (
    <div style = { {width : '200px', height: '40px', margin : '15px auto'} }>
                {Array.from({ length: 5 }, (item, idx) => {
                return (
                <div
                    key={idx}
                    onClick={() => {
                    setRate(idx + 1);
                    }}
                    style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    float : 'left',
                    textAlign : 'center',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    backgroundColor: rate < idx + 1 ? "darkgray" : "#f9844a",
                    }}
                >
                
                </div>
                );
            })}
            </div>
    
  );
};



export default Star;