import { ExclamationIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { alertSettings } from '../Constants/alertSettings';
import { alertType } from '../Domain/enum';
export default function Alert(props:any) {
  const type:alertType = props.alertType;
  console.log(type);
  let settings:any;
  switch(type){
    case alertType.success:
      settings = alertSettings.success;
      break;
    case alertType.failure:
      settings = alertSettings.failure;
      break;
  }
  let containerClass = `rounded-md bg-${settings.backgroundColor}-50 p-4`;
  return (
    <div className="absolute top-0 left-0 z-10">
      <div className={containerClass}>
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                totam eius aperiam dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}