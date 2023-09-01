import { useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
    const [rockBands, setRockBands] = useState([
        { name: "Queen", id: 1 },
        { name: "Led Zeppelin", id: 2 },
        { name: "The Rolling Stones", id: 3 },
        { name: "The Beatles", id: 4 },
        { name: "AC/DC", id: 5 },
        { name: "Pink Floyd", id: 6 },
        { name: "Nirvana", id: 7 },
        { name: "Guns N' Roses", id: 8 },
        { name: "The Who", id: 9 },
        { name: "Metallica", id: 10 },
    ]);

    function addNewRockBack() {
        console.log("add new Rock Band");
        const newRockBand = {
            id: crypto.randomUUID(),
            name: "new Rock Band",
        };
        setRockBands((prevRockBands) => [...prevRockBands, newRockBand]);
    }
    return (
        <ol>
            {rockBands.map((rockBand) => (
                <RockBand name={rockBand.name} key={rockBand.id} />
            ))}
            <button onClick={addNewRockBack}>Add new Rock Band</button>
        </ol>
    );
}

export default RockBandList;
