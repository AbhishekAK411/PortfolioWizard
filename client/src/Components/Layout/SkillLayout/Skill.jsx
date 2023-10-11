import Card from "../../Codecard/Card";

const Skill = () => {
    return (
        <>
            <section className="mt-10 w-full h-[650px] flex items-center justify-evenly">
                <section className="w-[90%] h-full">
                    <Card />
                </section>
                {/* <section className="relative w-[45%] h-full flex items-center justify-center">
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
                </section> */}
            </section>
        </>
    )
}

export default Skill;