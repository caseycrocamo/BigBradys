import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Alert from "./Components/Alert";
import navigationItem from "./Constants/NavigationItem";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { alertType as alertTypes } from './Domain/enum';

const profile = ['Your Profile', 'Settings', 'Sign out']


function App() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const navigationItems:navigationItem[] = [
    new navigationItem("Home", "/", (<Home />)),
    new navigationItem("Our Food", "/about", (<About />)),
    new navigationItem("Contact Us", "/contact", (<Contact setAlertOpen={setAlertOpen} setAlertType={setAlertType}/>))
];
  return (
      <div>
      <Router>
          <div className="min-h-screen bg-purple bg-opacity-70">
            <div className="navbar pb-24 shadow">
              <Disclosure as="nav" className="navbar">
                {({ open }) => (
                    <>
                      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative h-24 flex items-center justify-between">
                          <div className="px-2 flex items-center lg:px-0">
                            <div className="flex-shrink-0">
                              <img
                                  className="block h-24"
                                  src="/logo.png"
                                  alt="Workflow"
                              />
                            </div>
                            <div className="hidden md:block md:ml-10">
                              <div className="flex space-x-4">
                                {navigationItems.map((item, itemIdx) =>
                                    <NavLink className="hover:bg-purple hover:bg-opacity-75 hover:text-white rounded-md py-2 px-3 text-sm font-medium" activeClassName="bg-purple text-white rounded-md py-2 px-2 text-sm font-medium" key={itemIdx} to={item.route} exact>{item.name}</NavLink>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex md:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="bg-purple p-2 rounded-md inline-flex items-center justify-center text-white hover:text-white hover:bg-purple hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple focus:ring-purple=lightest">
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

                      <Disclosure.Panel className="lg:hidden space-x-2">
                        <div className="px-4 pt-2 pb-3 space-y-1">
                          {navigationItems.map((item, itemIdx) =>
                              <NavLink className="hover:bg-purple hover:bg-opacity-75 hover:text-white rounded-md py-2 px-2 mx-2 text-sm font-medium" activeClassName="bg-purple text-white rounded-md py-2 px-3 text-sm font-medium" key={itemIdx} to={item.route} exact>{item.name}</NavLink>
                          )}
                        </div>
                          <div className="mt-3 px-2 space-y-1 align-right">
                            {profile.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block rounded-md py-2 px-3 text-base font-medium hover:bg-purple hover:text-white hover:bg-opacity-75"
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
                        {item.jsx}
                      </Route>
                  )}
                </Switch>
              </div>
            </main>
          </div>
      </Router>
      {alertOpen && (<Alert alertType={alertType}/>)}
    
    </div>
  );
}

export default App;
