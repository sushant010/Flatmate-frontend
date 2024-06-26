import React from 'react'

function MainAbout() {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
                    <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
                        <div>
                            <p className="mb-2 underline decoration-4 underline-offset-2 decoration-slice decoration-purple-600  text-xs font-semibold tracking-wide uppercase">
                                Platform Offers
                            </p>
                            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                                Our tailored itineraries promise -
                            </h5>
                            <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                                convenience, speed, and budget-friendly options. Get ready for adventure without the hassle! 🌎
                            </p>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium bg-gradient-to-r from-blue-500 to-pink-400 tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Login to see our offers!
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2 bg-yellow-300">
                        <div>

                            <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl text-gray-700">
                                Get the Best Deal Assured! Craft Your Lease Agreement Quickly and Affordably Online.
                            </h5>

                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex bg-blue-500 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAbout