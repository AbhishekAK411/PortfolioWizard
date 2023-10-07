import Typewriter from "typewriter-effect";

const Navbar = () => {
    return (
        <>
            <nav className="cursor-gray w-full h-[70px] flex justify-between">
                <section className="w-[35%] h-full flex justify-end">
                    <section className="w-[65%] h-full flex items-center justify-center">
                        <p className="text-xl font-jetMono text-[#673AB7]"><Typewriter options={{autoStart: true, loop: false}} onInit={(typewriter) => {typewriter.typeString('Abhishek Ashok Kumar').pauseFor(1000).start()}} /></p>
                    </section>
                </section>
                <section className="w-[40%] h-full flex items-center justify-evenly mr-14">
                    <section className="cursor-black group w-[20%] h-[60%]  flex flex-col items-center justify-center"><p className="text-base font-jetMono text-[#673AB7]">Home</p><section className="group-hover:w-[40%] group-hover:duration-500 group-hover:border-[#673AB7] w-0 border-white border"></section></section>
                    <section className="cursor-black group w-[20%] h-[60%]  flex flex-col items-center justify-center mr-5"><p className="text-base font-jetMono text-[#673AB7]">Projects</p><section className="group-hover:w-[80%] group-hover:duration-500 group-hover:border-[#673AB7] w-0 border-white border"></section></section>
                    <section className="cursor-black group w-[20%] h-[60%]  flex flex-col items-center justify-center"><p className="text-base font-jetMono text-[#673AB7]">Experience</p><section className="group-hover:w-[90%] group-hover:duration-500 group-hover:border-[#673AB7] w-0 border-white border"></section></section>
                    <section className="cursor-black group w-[20%] h-[60%]  flex flex-col items-center justify-center"><p className="text-base font-jetMono text-[#673AB7]">Contact</p><section className="group-hover:w-[60%] group-hover:duration-500 group-hover:border-[#673AB7] w-0 border-white border"></section></section>
                </section>
            </nav>
        </>
    )
}

export default Navbar;