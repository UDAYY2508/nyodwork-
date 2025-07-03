function Work() {
    return (  
        <div className="flex h-screen items-center bg-black px-8">
            <div className=" flex justify-center pl-10 items-center">
                <img
                    src="/src/assets/Screenshot 2025-07-03 092153.png"
                    alt="Work"
                    className="object-fill"
                    style={{ width: "110vw", height: "90vh" }}
                />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-start pl-8">
                <p className="text-lg text-gray-300 ">
                    <span className="font-FamiljenGrotesk text-5xl">portfolio</span><br />
                    This is the description for the work section. Add more details here as needed.
                </p>
            </div>
        </div>
    );
}

export default Work;
