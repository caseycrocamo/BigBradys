import React from "react";
export default function Card(props:any){
    let header:string = props.header;
    let body:any = props.body;
    return (
        <div className="max-w-7xl py-6">
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                    {header}
                </div>
                <div className="px-4 py-5 sm:p-6">
                    {body}
                </div>
            </div>
        </div>
    )
}