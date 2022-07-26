import { HomeIcon, TrendingUpIcon, FilmIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
    
    return (
        <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <Link href="/">
                <Image className="object-contain cursor-pointer sm:hover:scale-105 hover:z-50"
                    src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt2f321ebb56b27d0f/5edfe2938ad0af2c8e529fcf/Sky_Master_Brand_Logo_SMALL_RGB.png"
                    width={200} 
                    height={100}
                />
            </Link>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderIcon title="HOME" url="/" Icon={HomeIcon}/>
                <HeaderIcon title="MOVIES" url="/movies" Icon={FilmIcon}/>
                <HeaderIcon title="ANALYTICS" url="/analytics" Icon={TrendingUpIcon}/>
            </div>
        </div>
    )
}