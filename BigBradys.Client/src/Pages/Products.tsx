import Card from "../Components/Card";
import React from "react";

const products = [
    { name: 'Meatballs', size: '~1 oz each', bgColor: 'bg-blue-600', description: 'Approximately 1 ounce, one or two meatballs are the perfect sized meal for your littlest fur-babies, or a healthy snack or topper for your bigger pups.' },
    { name: 'Brady Burgers', size: '~3 oz each', bgColor: 'bg-yellow-500', description: 'Coming in around 3 ounces each, 1-3 Brady Burgers make a meal for medium-sized dogs.' },
    { name: 'Meatloaf', size: '~1 lb', bgColor: 'bg-red-600', description: 'Our Big Dog Meatloaf weighs in at approximately 1 pound for big dogs with big appetites.' },
    { name: 'Bulk Tin', size: '6 lbs', bgColor: 'bg-purple-500', description: 'This six-pound portion comes in a reusable, returnable tin. Buy in bulk and save!' },
];

const flavors = [
    { name: 'Original – Beef and Chicken', bgColor: 'bg-red-600' },
    { name: 'Turkey', bgColor: 'bg-yellow-500' },
    { name: 'Chicken', bgColor: 'bg-green-500' },
    { name: 'Pork', bgColor: 'bg-blue-600' },
    { name: 'Beef', bgColor: 'bg-green-500' },
    { name: 'Salmon', bgColor: 'bg-purple-500' },
    { name: 'Lamb', bgColor: 'bg-red-600' },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Products() {
    return (
        <div>
            <div className="px-4">
                <div className="relative bg-purple-dark">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
                            alt="Happy dog"
                        />
                        <div className="absolute inset-0 bg-purple-dark mix-blend-multiply bg-opacity-40" aria-hidden="true" />
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Our Products
                        </h1>
                        <p className="mt-6 text-xl text-purple-lightest max-w-3xl">
                            Hand-made with love, our dog food comes in a variety of sizes and flavors to fit every pup's needs.
                        </p>
                        <p className="mt-6 text-xl text-purple-lightest max-w-3xl">
                            From tiny meatballs for your littlest pups to bulk tins for big appetites.
                        </p>
                    </div>
                </div>

                <Card header={"Sizes"} body={(
                    <div>
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Choose the perfect portion for your pup</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                            {products.map((product) => (
                                <li key={product.name} className="col-span-1 flex shadow-sm rounded-md">
                                    <div
                                        className={classNames(
                                            product.bgColor,
                                            'flex-shrink-0 w-3 rounded-l-md'
                                        )}
                                    >&nbsp;</div>
                                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md">
                                        <div className="flex-1 px-4 py-3 text-sm">
                                            <p className="text-gray-900 font-medium">{product.name}</p>
                                            <p className="text-purple-light font-semibold text-xs">{product.size}</p>
                                            <p className="text-gray-500 mt-1">{product.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )} />

                <Card header={"Flavors"} body={(
                    <div>
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Available in seven delicious flavors</h2>
                        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {flavors.map((flavor) => (
                                <li key={flavor.name} className="col-span-1 flex shadow-sm rounded-md">
                                    <div
                                        className={classNames(
                                            flavor.bgColor,
                                            'flex-shrink-0 w-3 rounded-l-md'
                                        )}
                                    >&nbsp;</div>
                                    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                        <div className="flex-1 px-4 py-2 text-sm truncate">
                                            <p className="text-gray-900 font-medium">{flavor.name}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )} />

                <Card header={"Ingredients"} body={(
                    <div>
                        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">What's inside every batch</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            Meat of choice, organ mix (liver & heart), kale, spinach, broccoli, carrots, yams, ground flax seed, eggs, ground garbanzo beans, oysters, ground sunflower seeds, dried egg yolk, ground pumpkin seeds, powdered egg shell (calcium carbonate), kelp powder.
                        </p>
                        <p className="mt-4 text-purple-light font-semibold">
                            🌿 All natural, wholesome ingredients your dog will love!
                        </p>
                    </div>
                )} />

                <Card header={"Ready to Order?"} body={(
                    <div className="text-center py-4">
                        <p className="text-gray-600 text-lg">
                            Call or text Chris: <a href="tel:8584420224" className="text-purple-light font-semibold hover:underline">(858) 442-0224</a>
                        </p>
                    </div>
                )} />
            </div>
        </div>
    )
}