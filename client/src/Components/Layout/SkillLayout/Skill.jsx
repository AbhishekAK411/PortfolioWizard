import { useEffect } from "react";
import Card from "../../Codecard/Card";
import { useState } from "react";

const Skill = () => {
    const [skillIndex, setSkillIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            const textIndex = Math.floor(Math.random() * 7);
            setSkillIndex(textIndex);
        }, 5000);

        return () => clearInterval(interval);
    });
    
    return (
        <>
            <section className="mt-10 w-full flex items-center justify-evenly">
                <section className="w-[90%] h-full">
                    <Card textIndex={skillIndex} />
                </section>
            </section>
        </>
    )
}

export default Skill;