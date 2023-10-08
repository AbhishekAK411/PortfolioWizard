import Navbar from "../Global/Navbar";
import Profile from "../Profile/Profile";

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="cursor-gray w-full min-h-screen">
                <Profile />
            </main>
        </>
    )
}

export default Home;