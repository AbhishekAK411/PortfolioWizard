const Card = ({textIndex}) => {
    return (
        <>
            <section className="w-full h-full mx-auto bg-gray-100 rounded-xl shadow-2xl">
                <section className="flex items-center p-3">
                    <section className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
                    </section>
                    <section className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
                    </section>
                    <section className="px-1">
                        <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Card;