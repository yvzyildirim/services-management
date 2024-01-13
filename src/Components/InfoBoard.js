import React from "react";

export const InfoBoard = ({icon, title, description, button}) =>{
  return(
    <section className="flex flex-col justify-center items-center   w-full h-full py-6">
      <div className="w-24 h-24 border border-dashed border-primary rounded-full flex justify-center items-center text-4xl text-primary">{icon}</div>
      <span className="text-lg font-semibold mt-4">{title}</span>
      <span className="test-md mt-2">{description}</span>
    </section>
  )
}