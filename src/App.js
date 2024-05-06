import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        console.log(data.slip.advice);
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(function() {
        getAdvice();
    }, []);

    return ( <
        >
        <
        div className = "container" > { " " } <
        span className = "heading" > Here is your Advice < /span>{" "} <
        p className = "paraAdvice" > { `" ${advice} " ` } < /p>{" "} <
        button className = "buttonAdvice"
        onClick = { getAdvice } > { " " }
        Get Advice { " " } <
        /button>{" "} <
        Message count = { count }
        />{" "} < /
        div > { " " } <
        />
    );
}

function Message(props) {
    return ( <
        >
        <
        p >
        You have read < strong > { props.count } < /strong> Pices of Advice{" "} < /
        p > { " " } <
        />
    );
}