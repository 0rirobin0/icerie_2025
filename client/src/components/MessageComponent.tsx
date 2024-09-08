import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const MessageCard: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-6">
            <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-5xl ">
                <div className="flex items-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Message</h1>
                    <svg width="40" height="40" className='ml-5' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                        <rect width="40" height="40" fill="url(#pattern0_696_822)" />
                        <defs>
                            <pattern id="pattern0_696_822" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_696_822" transform="scale(0.0078125)" />
                            </pattern>
                            <image id="image0_696_822" width="128" height="128" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>

                </div>

                {/* Profile and Text */}
                <div className="flex items-center mb-6">
                    {/* Next.js Image component */}
                    <Image
                        src="/logoNavBar.png" // Replace with actual image path or URL
                        alt="Md Farhad Rabbi"
                        width={64}  // Increased width of the image
                        height={64} // Increased height of the image
                        className="rounded-full mr-4" // Tailwind CSS classes
                    />
                    <div>
                        <h3 className="font-bold text-gray-800 text-3xl">Md Farhad Rabbi</h3>
                        <p className="text-xl text-gray-500">Conference Chair, 2025</p>
                    </div>
                </div>

                {/* Message Content */}
                <div className="h-60 overflow-y-auto pr-2 scrollbar-hide">
                    <p className="text-gray-700 text-justify">
                        “The International Conference on Advanced Research in Computer, Electrical, and Software Engineering (ARCES) is a prestigious platform for research in computer, software, and electrical engineering. <br />
                        <br />The key aspect of ARCES is its encouragement of the necessary interaction between scientists, researchers, engineers, corporate executives, and academic students to bridge the gap between government, business, and academia. To develop this motivation, eminent scholars in pertinent domains provide keynote addresses, tutorials, workshops, exhibitions, and oral presentations. <br />
                        <br />Academic researchers will disclose the results and findings of laboratory-based investigations at this conference. To inform academia about recent developments and useful findings, industry professionals illustrate cutting-edge research in 4IR technologies. For discussions of recent developments in contemporary computing intelligence, the ARCES platform will also address regional and global challenges in the aforementioned fields.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;