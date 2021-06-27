import { DotsVerticalIcon } from '@heroicons/react/solid'
import Card from "../Components/Card";
import React from "react";
import IngredientList from "../Components/IngredientList";
import {MeatIngredientList} from "../Constants/Ingredients/MeatIngredientList";

const essentials = [
    { name: 'Water', initials: 'W', bgColor: 'bg-blue-600' },
    { name: 'Proteins', initials: 'P', bgColor: 'bg-red-600' },
    { name: 'Fats', initials: 'F', bgColor: 'bg-yellow-500' },
    { name: 'Carbohydrates', initials: 'C', bgColor: 'bg-green-500' },
    { name: 'Vitamins and Minerals', initials: 'VM', bgColor: 'bg-purple-500' },
]

function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export default function About(){
    return (
        <div>
            <div className="px-4">
                <div className="relative bg-indigo-800">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">At Big Brady's we believe in real food.</h1>
                        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                            So our dog food is made out of human-grade ingredients you recognize and trust.
                        </p>
                        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                            It's simple really.
                        </p>
                        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                            Real food for real dogs.
                        </p>
                    </div>
                </div>
                <Card header={"The Essentials"}
                      body={(
                          <div>
                              <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">For optimum health, dogs require</h2>
                              <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                  {essentials.map((essential) => (
                                      <li key={essential.name} className="col-span-1 flex shadow-sm rounded-md">
                                          <div
                                              className={classNames(
                                                  essential.bgColor,
                                                  'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                                              )}
                                          >
                                              {essential.initials}
                                          </div>
                                          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                              <div className="flex-1 px-4 py-2 text-sm truncate">
                                                  <p className="text-gray-900 font-medium">
                                                      {essential.name}
                                                  </p>
                                              </div>
                                          </div>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      )} />
                <Card header={"Meat"} body={(
                    <IngredientList ingredients={MeatIngredientList}/>
                )} />
            </div>
        </div>
    );
}