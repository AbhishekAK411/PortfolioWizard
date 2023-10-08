import Typewriter from "typewriter-effect";
import { IconButton } from "@material-tailwind/react";
import profileImage from "../../Images/Profile/abhishekProfile.png";

const Profile = () => {
    return (
        <>
            <section className="w-full h-[750px] backdrop-blur-sm bg-center bg-fixed bg-no-repeat bg-cover bg-[url('Images/Background/1586337.jpg')] flex justify-around items-center">
                    <section className="w-[53%] h-[90%] flex items-center justify-center">
                        <section className="w-[60%] h-[80%] flex flex-col gap-y-2 ">
                            <section className="w-full h-[15%] flex items-center">
                                <p className="text-xl font-jetMono">Hello <span className="text-[#673AB7]">&lt;/&gt;</span></p>
                            </section>
                            <section className="w-full h-[20%] flex">
                                <p className="text-6xl font-bold font-jetMono">I'm </p>
                                <p className="text-6xl font-bold ml-5 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-[#673AB7]"><Typewriter options={{autoStart: true, loop: true}} onInit={(typewriter) => typewriter.typeString('Developer').pauseFor(1000).deleteAll().typeString('Linux Administrator').pauseFor(1000).deleteAll().typeString('Progammer').pauseFor(1000).deleteAll().typeString('Experienced').pauseFor(1300).start()} /></p>
                            </section>
                            <section className="w-[150%] h-[25%]">
                                <p className="text-blue-gray-900 font-jetMono font-semibold">
                                    Seasoned System Engineer with 2+ years of experience in Linux System Administration, corporate network setup, and server configuration. Skilled in Javascript app development, Database Administration, and Full Stack & Flutter development. Pro at performance monitoring, issue resolution, and enhancing system efficiency.
                                </p>
                            </section>
                            <section className="w-full h-[20%] flex items-center">
                                <IconButton variant="filled" size="lg" className="animate-bounce rounded-full bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10" ripple={true}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc7c7" viewBox="0 0 256 256"><path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path><path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path></svg></IconButton>
                                <IconButton variant="filled" size="lg" className="animate-bounce rounded-full ml-5 bg-blue-900" color="blue" ripple={true}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc7c7" viewBox="0 0 256 256"><path d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z" opacity="0.2"></path><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg></IconButton>
                            </section>
                        </section>
                    </section>
                    <section className="w-[45%] h-[90%] flex items-center justify-center">
                        <section className="w-[65%] h-[65%] border-black border rounded-full bg-black shadow-mac flex items-center justify-center">
                            <section className="w-[95%] h-[95%] rounded-full bg-white flex items-center justify-center overflow-hidden pt-2">
                                <img className="w-full h-full" src={profileImage} alt="" />
                            </section>
                        </section>
                    </section>
                </section>
        </>
    )
}

export default Profile;