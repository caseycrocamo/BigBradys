import React from "react";
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Contact(){
    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="border-4 border-dashed border-gray-200 rounded-lg">
                {/* Header */}
                <div className="bg-warm-gray-50">
                    <div className="py-16 px-4 sm:px-6 lg:px-8 flex">
                        <div className="relative z-10 max-w-7xl mx-auto pr-4 ">
                            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                                Get in touch
                            </h1>
                            <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                                From howling our praises to barking at the mailman, we would love to hear from you!
                            </p>
                        </div>
                        <img className="w-1/4" src={"/Icons/basenji.svg"} />
                    </div>
                </div>

                {/* Contact section */}
                <section className="relative bg-white" aria-labelledby="contactHeading">
                    <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
                    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 id="contactHeading" className="sr-only">
                                Contact us
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Contact information */}
                                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-purple to-purple-dark sm:px-10 xl:p-12">
                                    {/* Decorative angle backgrounds */}
                                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={343}
                                            height={388}
                                            viewBox="0 0 343 388"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear1"
                                                    x1="254.553"
                                                    y1="107.554"
                                                    x2="961.66"
                                                    y2="814.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={359}
                                            height={339}
                                            viewBox="0 0 359 339"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear2"
                                                    x1="192.553"
                                                    y1="28.553"
                                                    x2="899.66"
                                                    y2="735.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={160}
                                            height={678}
                                            viewBox="0 0 160 678"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear3"
                                                    x1="192.553"
                                                    y1="325.553"
                                                    x2="899.66"
                                                    y2="1032.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff" />
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Contact information</h3>
                                    <p className="mt-6 text-base text-purple-lightest max-w-3xl">
                                        For business inquiries, call or email:
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt>
                                        <dd className="flex text-base text-purple-lightest">
                                            <PhoneIcon className="flex-shrink-0 w-6 h-6 text-purple-lightest" aria-hidden="true" />
                                            <span className="ml-3">+1 (858) 442-0224</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-purple-lightest">
                                            <MailIcon className="flex-shrink-0 w-6 h-6 text-purple-lightest" aria-hidden="true" />
                                            <span className="ml-3">chris@bigbradys.com</span>
                                        </dd>
                                    </dl>
                                    <ul className="mt-8 flex space-x-12" role="list">
                                        <li>
                                            <a className="text-purple-lightest hover:text-white" href="https://facebook.com/bigbradys">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-purple-lightest hover:text-white" href="https://twitter.com/bigbradys">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact form */}
                                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                                    <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="dog_name" className="block text-sm font-medium text-warm-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="dog_name"
                                                    id="dog_name"
                                                    autoComplete="dog-name"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="first_name" className="block text-sm font-medium text-warm-gray-900">
                                                Owner's First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    id="first_name"
                                                    autoComplete="given-name"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last_name" className="block text-sm font-medium text-warm-gray-900">
                                                Owner's Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    id="last_name"
                                                    autoComplete="family-name"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                                                Owner's Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                                                    Owner's Phone Number
                                                </label>
                                                <span id="phone-optional" className="text-sm text-warm-gray-500">
                                                  Optional
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                    aria-describedby="phone-optional"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                                                Subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between">
                                                <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                                                    Message
                                                </label>
                                                <span id="message-max" className="text-sm text-warm-gray-500">
                          Max. 500 characters
                        </span>
                                            </div>
                                            <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-purple-light focus:border-purple border border-warm-gray-300 rounded-md"
                            aria-describedby="message-max"
                            defaultValue={''}
                        />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button
                                                type="submit"
                                                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-light hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-light sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}