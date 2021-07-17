import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {navigationItems} from "./Constants/NavigationItems";

const profile = ['Your Profile', 'Settings', 'Sign out']

function App() {
  return (
      <Router>
          <div className="min-h-screen bg-gray-100">
            <div className="navbar pb-32">
              <Disclosure as="nav" className="navbar border-b border-indigo-300 border-opacity-25 lg:border-none">
                {({ open }) => (
                    <>
                      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                          <div className="px-2 flex items-center lg:px-0">
                            <div className="flex-shrink-0">
                              <img
                                  className="block h-16"
                                  src="/logo.png"
                                  alt="Workflow"
                              />
                            </div>
                            <div className="hidden lg:block lg:ml-10">
                              <div className="flex space-x-4">
                                {navigationItems.map((item, itemIdx) =>
                                    <NavLink className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium" activeClassName="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium" key={itemIdx} to={item.route} exact>{item.name}</NavLink>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex lg:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                              <span className="sr-only">Open main menu</span>
                              {open ? (
                                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                              ) : (
                                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                              )}
                            </Disclosure.Button>
                          </div>
                        </div>
                      </div>

                      <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigationItems.map((item, itemIdx) =>
                              <NavLink className="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium" activeClassName="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium" key={itemIdx} to={item.route} exact>{item.name}</NavLink>
                          )}
                        </div>
                          <div className="mt-3 px-2 space-y-1">
                            {profile.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                                >
                                  {item}
                                </a>
                            ))}
                            
                          </div>
                      </Disclosure.Panel>
                    </>
                )}
              </Disclosure>
            </div>

            <main className="-mt-32">
              <div className="max-w-7xl mx-auto py-8 px-0 sm:px-6 lg:px-8">
                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the exact current URL.*/}
                <Switch>
                  {navigationItems.map((item, itemIdx) =>
                      <Route exact path={item.route} key={itemIdx}>
                        {item.component}
                      </Route>
                  )}
                </Switch>
              </div>
            </main>
          </div>
      </Router>
  );
}

export default App;
