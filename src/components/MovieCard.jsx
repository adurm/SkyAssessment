import Image from "next/image";
import { ClockIcon } from "@heroicons/react/solid";

export default function MovieCard({ movie }) {

    // Map provider to their logo image
    function providerToLogo(provider) {
        const url = (provider == "Sky Cinema") ? "https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt14ddad55e439896e/5edfe4a708d08473f007bbf3/Sky_Cinema_PRIMARY_RGB.png" : "https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt767f697209ea1e62/5fad1c444e40cf53001f624d/Sky_Kids_PRIMARY_RGB.png";
        return <Image src={url} width={200} height={40}/>
    }

    function capitalise(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Turn seconds to hours and minutes
    function displayMovieDuration(duration) {
        const h = Math.floor(duration / 3600);
        let m = Math.floor(duration % 3600 / 60);
        const s = Math.floor(duration % 3600 % 60);
        if (s > 0) {
            m += 1;
        }
        const hDisplay = h > 0 ? h + "h " : "";
        const mDisplay = m > 0 ? m + "m" : "";
        
        return hDisplay + mDisplay;
    }

    const viewsDisplay = (viewType) => (
        <div className="flex">
            <div className="flex space-x-1">
                <div>
                    {Object.keys(movie[viewType]).map((tv, idx) => 
                        <p key={idx} className="font-skybold text-right">{tv.toUpperCase()}</p>
                    )}
                </div>
                <div>
                    {Object.keys(movie[viewType]).map((tv, idx) => 
                        <p key={idx}>{movie[viewType][tv]}</p>
                    )}
                </div>
            </div>
        </div>
    );


    return <div className="m-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 border border-gray-400 rounded-lg">
        <div className="relative w-full object-cover object-center overflow-hidden rounded-lg rounded-b-none">
            <div className="absolute bottom-3 left-3 z-50">
                {providerToLogo(movie.provider)}
            </div>
            <Image src={movie.videoImage} layout="responsive" width={300} height={380}/>
        </div>
        <div className="p-4 rounded-b-lg">
            <p className="leading-relaxed mb-3 text-sm">{movie.description}</p>
            <p className="text-2xl font-skybold mb-1">{movie.name}</p>
            <div className="flex items-center flex-wrap">
                <span className="inline-flex items-center leading-none text-sm">
                    {movie.genre.sort().map((genre, idx) => 
                        <b key={idx} className="mr-2">{capitalise(genre)}</b>
                    )}
                </span>
                <span className="mr-3 inline-flex items-center ml-auto text-sm">
                    <ClockIcon className="mx-1 h-4"/> {displayMovieDuration(movie.duration)}
                </span>
            </div>
            <div className="border-t border-red-300 my-3" />
            <div className="text-xs flex justify-center space-x-6 underline">
                <span>Previous Views</span>
                <span>Current Views</span>
            </div>
            <div className="text-xs flex justify-center space-x-4">
                {viewsDisplay("prevTotalViews")}
                {viewsDisplay("totalViews")}
            </div>
        </div>
    </div>

}
