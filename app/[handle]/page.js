import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import connect from '@/lib/mongodb';
import Newr from '@/utils/LinkSchema';

export default async function Page({ params }) {
    const handle = params.handle;
    console.log("Received handle:", handle);  // Log handle to check its value

    if (!handle) {
        console.log("Handle is missing");
        return notFound();
    }

    try {
        await connect();
        console.log("MongoDB connected successfully");

        // Case-insensitive query
        const item = await Newr.findOne({ handle: new RegExp(`^${handle}$`, 'i') });
        console.log("Fetched item:", item);  // Log the fetched item

        if (!item) {
            console.log("No item found for handle:", handle);
            return notFound();  // Return 404 if item is not found
        }

        // Prepare the links array based on the fields in the schema
        const links = [];
        if (item.link1) links.push(item.link1);
        if (item.link2) links.push(item.link2);
        if (item.link3) links.push(item.link3);

        return (
            <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10 px-6">
                <div className="flex justify-center flex-col items-center gap-6 w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
                    <img
                        src={item.pic}
                        alt="Profile"
                        className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                    <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">@{item.handle}</span>
                    <span className="desc w-full sm:w-80 text-center text-white text-sm sm:text-base">{item.desc}</span>
                    <div className="links w-full flex flex-col items-center mt-6 gap-4">
                        {links.map((linkItem, index) => (
                            <Link key={index} href={linkItem.link}>
                                <div className="bg-purple-100 text-purple-800 py-4 px-6 rounded-md shadow-lg w-full sm:w-[350px] lg:w-[400px] text-center font-semibold hover:bg-purple-300 transition duration-300">
                                    {linkItem.linktext}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return notFound();  // Return 404 if an error occurs during fetching
    }
}
