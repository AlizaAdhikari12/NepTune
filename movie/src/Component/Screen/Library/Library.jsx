import { useState, useEffect } from "react";
import apiClient from "../../../../spotify";

export const Library = () => {
  const [playList, setPlayList] = useState([]);
  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlayList(response.data.items);
    }).catch(error=>{
        console.error("error while fetching data",error);
    })
   
  }, []);

  return (
    <>
      {playList.length === 0
        ? "sorry not data"
        : playList.map((item) => {
            return(
                <div key={item.id}>
                {item.name}
                </div>
            )          
          })}
      <h2>Libary</h2>
    </>
  );
};

        
