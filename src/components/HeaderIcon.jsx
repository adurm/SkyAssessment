import Link from "next/link"

export default function HeaderIcon({ title, url, Icon }) {

    return (
        <Link href={url}>
            <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 text-red-500 hover:text-indigo-600 hover:transition-colors hover:duration-500">
                <Icon className="h-8 mb-1" />
                <p className="opacity-0 group-hover:opacity-100 tracking-widest font-skybold">{title}</p> 
            </div>
        </Link>
    )
}