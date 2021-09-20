export default function Home() {
    return (
        <>
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow pt-6 lg:pb-6 lg:px-5 max-w-7xl">
                <div className="relative overflow-hidden lg:border-4 border-dashed border-gray-200 rounded-lg">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>


                        <main className="mx-auto max-w-7xl px-8 sm:px-6">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl md:pt-10 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Feed your best friend</span>{' '}
                                    <span className="block text-purple-light xl:inline">the best food.</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Big Brady's hand-made dog food. Made with meat, veggies and love ♡.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-light hover:bg-purple md:py-4 md:text-lg md:px-10"
                                        >
                                            Order now!
                                        </a>
                                    </div>
                                    <div className="rounded-md shadow mt-5 sm:mt-0 sm:ml-6">
                                        <a
                                            href="/about"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-72 w-full object-cover md:h-96 lg:w-full lg:h-full"
                            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                            alt="cute dog bounding through the grass"
                        />
                    </div>
                </div>
            </div>
            {/* /End replace */}
        </>
    )
}
