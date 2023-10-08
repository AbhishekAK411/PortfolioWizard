import { useState } from "react";
import htmlIcon from "../../../Images/Icons/HTML.png";
import cssIcon from "../../../Images/Icons/CSS.png";
import jsIcon from "../../../Images/Icons/JS.png";
import reactIcon from "../../../Images/Icons/React.png";
import tailwindIcon from "../../../Images/Icons/Tailwind.png";
import flutterIcon from "../../../Images/Icons/Flutter.png";
import dartIcon from "../../../Images/Icons/Dart.png";
import expressIcon from "../../../Images/Icons/Express-js.png";
import nodeIcon from "../../../Images/Icons/Nodejs.png";
import mongoIcon from "../../../Images/Icons/Mongo.png";
import mysqlIcon from "../../../Images/Icons/Mysql.png";
import Card from "../../Codecard/Card";

const imageArray = [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, flutterIcon, dartIcon, expressIcon, nodeIcon, mongoIcon, mysqlIcon];

const Skill = () => {

    const [icon, setIcon] = useState(8);
    const [textIndex, setTextIndex] = useState(8);
    const handleIconChange = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        setIcon(randomIndex);
        setTextIndex(randomIndex);
    }

    return (
        <>
            <section className="mt-5 w-full h-[650px] flex items-center justify-evenly">
                <section className="w-[48%] h-full">
                    <Card textIndex={textIndex} />
                </section>
                <section className="relative w-[45%] h-full flex items-center justify-center">
                    <section className="animate-spin-slow duration-700 absolute w-[500px] h-[500px] border-blue-gray-700 border-4 rounded-full">
                        <section className="absolute top-36 right-1 w-[25px] h-[25px] bg-blue-gray-700 rounded-full"></section>
                    </section>
                    <section className="animate-spin-medium absolute w-[400px] h-[400px] border-blue-gray-700 border-2 rounded-full">
                        <section className="absolute top-36 right-[-3px] w-[15px] h-[15px] bg-blue-gray-700 rounded-full"></section>
                    </section>
                    <section className="animate-spin-fast absolute w-[300px] h-[300px] border-blue-gray-700 border rounded-full">
                        <section className="absolute top-36 right-[-5px] w-[10px] h-[10px] bg-blue-gray-700 rounded-full"></section>
                    </section>
                    <section onClick={handleIconChange} className="object-contain flex items-center justify-center overflow-hidden absolute w-[200px] h-[200px] rounded-full">
                        <img src={imageArray[icon]} alt="icons" />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Skill;