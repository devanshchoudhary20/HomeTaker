'use client'

import Image from "next/image";
import {useRouter} from "next/navigation";


export default function Homepage() {


    const router = useRouter();


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 bg-blue-50 w-full">
                <div className="flex items-center justify-center top-2 ">
                    <Image
                        alt="Your Company"
                        src="/images/homedo.png"
                        className=""
                        width={50}
                        height={50}
                    />
                    <h2 className="text-lg font-bold">Homedo</h2>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-16">


                    <h1 className="my-8 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Organise Your Cleaning Routine </h1>
                    <Image
                        alt="Your Company"
                        src="/images/file.png"
                        className=""
                        width={400}
                        height={400}
                    />
                    <button
                        onClick={() => router.push('/home')}
                        className="mt-8 w-full bg-teal-500 text-white py-3 rounded-md text-lg font-semibold"
                    >
                        Open App
                    </button>
                </div>

            </div>
        </>
    )
}
