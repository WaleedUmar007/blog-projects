import Image from "next/image";
import image from "../public/sunset.jpg";
import {RiFlag2Line} from "react-icons/ri";

function BlogCard ({ title, description, link }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border">
            <div className="rounded-lg px-6 py-4" ><Image className="rounded-lg" src={image} alt="Sunset in the mountains"  height="150" width="300"/></div>
            {/* <Image className="w-full" src="/public/sunset.jpg" alt="Sunset in the mountains" layout={'fill'} /> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                     5 reasons we can do this job 
                </p>
            </div>

            <div className="px-6 pt-4 pb-2 flex space-between">
            <div className="rounded-md flex-grow">
            <div className="border-2 w-fit">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Keep Reading
                </span>
            </div>
                 
            </div>
            <div className="items-center">
                <RiFlag2Line className="text-gray-700 text-lg" />
            </div>
                
            </div>
        </div>
    )
}

export default BlogCard;