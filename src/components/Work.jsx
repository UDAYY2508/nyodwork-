import workImage1 from '../assets/Screenshot 2025-07-05 094024.png';
import workImage2 from '../assets/Screenshot 2025-02-14 170557.png';
import workImage3 from '../assets/Screenshot 2025-07-06 112418.png';
import workImage4 from '../assets/edu-bg.svg';

function Work() {
    return (
        <div className="bg-black min-h-screen px-4 py-10">
            
            {/* Portfolio */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a 
                        href="https://uday2508-portfolio.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group relative rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800"
                    >
                        <div className="relative transition-transform duration-500 ease-in-out group-hover:scale-120">
                            <img
                                src={workImage1}
                                alt="Work Example"
                                className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-500 ease-in-out"></div>
                        </div>
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Portfolio</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A sleek, minimal black-themed portfolio site built on React and Framer Motion to showcase personal work. 
                        <br />
                        Vibe: Professional, dark, clean.
                    </p>
                </div>
            </div>

            {/* Gamenext */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a 
                        href="https://gamenxt.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group relative rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800"
                    >
                        <div className="relative transition-transform duration-500 ease-in-out group-hover:scale-120">
                            <img
                                src={workImage2}
                                alt="Work Example"
                                className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-500 ease-in-out"></div>
                        </div>
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Gamenext</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A bold, interactive site with a dark black-red theme and horizontal scrolling game gallery. 
                        <br />
                        Vibe: Energetic, edgy, gamified.
                    </p>
                </div>
            </div>



            {/* Peerverse */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a 
                        href="https://edupluse.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group relative rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800"
                    >
                        <div className="relative transition-transform duration-500 ease-in-out group-hover:scale-120">
                            <img
                                src={workImage4}
                                alt="Work Example"
                                className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-500 ease-in-out"></div>
                        </div>
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">EduPluse</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A platform to sell and buy educational resources.<br />
                        Vibe: Collaborative, smart, empowering.
                    </p>
                </div>
            </div>
                        {/* Annapravah */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group relative rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800"
                    >
                        <div className="relative transition-transform duration-500 ease-in-out group-hover:scale-120">
                            <img
                                src={workImage3}
                                alt="Work Example"
                                className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition duration-500 ease-in-out"></div>
                        </div>
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Annapravah</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A soft, warm-toned site built to connect home cooks with students and working professionals. 
                        <br />
                        Vibe: Homely, soothing, functional.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Work;
