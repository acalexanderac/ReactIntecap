import React, { useMemo, useState } from "react";
const About = () => {
    const [word, setWord] = useState("");

    const isPalindrome = useMemo(() => {
        return word === word.split("").reverse().join("");
    }, [word]);

    return (
        <div className="App">
            <form>
                <h1>Palíndromos</h1>
                <div>
                    <label>Palabra a Verificar </label>
                </div>
                <div>
                    <h2>Solo Minúsculas</h2>
                    <input value={word} onChange={(e) => setWord(e.target.value)} />
                </div>
            </form>
            <h4>Es un Palíndromo :{isPalindrome ? "SI" : "No"}</h4>
        </div>
    );
}
export default About