import workImage1 from '../assets/Screenshot 2025-07-05 094024.png';
import workImage2 from '../assets/Screenshot 2025-02-14 170557.png';
import workImage3 from '../assets/Screenshot 2025-07-06 112418.png';
import workImage4 from '../assets/Screenshot 2025-07-06 112335.png';

function Work() {
    return (
        <div className="bg-black min-h-screen px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="https://uday2508-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage1}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-2 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Portfolio</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A sleek, minimal black-themed portfolio site built on React and framer motion to showcase personal work.
Vibe: Professional, dark, clean.

                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage2}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-2 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Gamenext</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                       A bold, interactive site with a dark black-red theme and horizontal scrolling game gallery.
Vibe : Energetic, edgy, gamified.

                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-18">
                <div className="w-full lg:w-[70%] flex justify-center mb-6 lg:mb-0">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className="block transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                    >
                        <img
                            src={workImage3}
                            alt="Work Example"
                            className="object-cover rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-2 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Annapravah</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk text-wrap">
                       A soft, warm-toned site built to connect home cooks with students and working professionals.Vibe: Homely, soothing, functional.


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
                            className="object- rounded-xl shadow-2xl w-full h-56 sm:h-80 md:h-[50vh] lg:h-[80vh] max-w-[100vw] border-2 border-neutral-800"
                        />
                    </a>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col justify-center">
                    <h3 className="text-white text-5xl font-FamiljenGrotesk mb-1">Peerverse</h3>
                    <p className="text-gray-300 text-lg font-FamiljenGrotesk">
                        A clean, professional platform for college students to network, share resources, and connect around events and interests.
Vibe: Organized, smart, youth-centric.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Work;