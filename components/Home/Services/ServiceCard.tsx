import React from 'react'
import Image from 'next/image'

type Props={
    icon:string,
    name:string,
    description:string
};


const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div>
      <Image src={icon} alt={name} width={60} height={60}/>
        <h1 className="text-xl mt-6 md:text-2xl text-gray-200 font-bold">{name}</h1>
        <p className=" text-gray-300 mt-6">{description}</p>
    </div>
  )
}

export default ServiceCard
