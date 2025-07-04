import workImage1 from '../assets/Screenshot 2025-07-03 092153.png';
import workImage2 from '../assets/Screenshot 2025-02-14 170557.png';
import workImage3 from '../assets/Screenshot 2025-03-15 194329.png';
import workImage4 from '../assets/Screenshot 2025-07-04 153359.png';

function Work() {
    return (
        <div className="bg-black min-h-screen px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="https://your-link-1.com" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage1}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-4 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-2xl font-Boldonse mb-2">Portfolio</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        Portfolio is a collection of my work, showcasing various projects and skills. It includes detailed descriptions, technologies used, and links to live demos or repositories where applicable.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="https://your-link-2.com" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage2}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-4 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-2xl font-semibold mb-2 font-Boldonse tracking-wide">Gamenext</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        Gamenext is a gaming platform that offers a variety of games and interactive experiences. It showcases my skills in game development, including 3D modeling, animation, and programming.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="https://your-link-3.com" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage3}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-4 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-2xl font-semibold mb-2 font-Boldonse tracking-wider">Annapravah</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        Annapravah is a food distribution platform that streamlines the process of food donation and delivery to those in need.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="https://your-link-4.com" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage4}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-4 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-2xl font-semibold mb-2 font-Boldonse tracking-wider">Peerverse</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        Description for another project goes here. Add details about your role, technologies, and achievements.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Work;