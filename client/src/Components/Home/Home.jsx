import Navbar from "../Global/Navbar";
import Experience from "../Layout/ExperienceLayout/Experience";
import Skill from "../Layout/SkillLayout/Skill";
import Profile from "../Profile/Profile";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="cursor-gray w-full min-h-screen">
                <Profile />
                <Skill />
                <Experience />
            </main>
        </>
    )
}

export default Home;