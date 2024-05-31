import React from 'react'

function ColomnGroup({}) {
  return (
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-3xl font-semibold mb-2">Find Dev and IT professionals to <br /> 
      scale your business.</h3>
      <div className="grid md:grid-cols-2 gap-4">
      <div className="flex items-center">
        <img src={vector1} />
        <span className="text-[#202229] ml-2">989 Skills</span>
      </div>
      <div className="flex items-center mb-2">
        <img src={vector2} />
        <span className="text-[#202229] ml-2">45 Sub-Categories</span>
      </div>
      <div className="flex items-center mb-2">
        <img src={vector3} />
        <span className="text-[#202229] ml-2">1011 Profiles</span>
      </div>
      </div>
    </div>
    <div>
      
    <div className="bg-white p-4 shadow-lg rounded-lg">
        <p className="mb-4">IT & Development</p>
        <div className="flex flex-row">
          <div className="flex flex-col items-center m-2">
            <img src={shopify} alt="Shopify Developer" />
            <p className="text-center font-bold">Shopify Developer</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src={magneto} alt="Magento Developer" />
            <p className="text-center font-bold">Magento Developer</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src={data} alt="Data Scientist" />
            <p className="text-center font-bold">Data Scientist</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src={webflow} alt="Webflow Developer" />
            <p className="text-center font-bold">Webflow Developer</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src={dotnet} alt=".NET Developer" />
            <p className="text-center font-bold">.NET Developer</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img src={next} alt="next" />
          </div>
        </div>

    </div>
      
    </div>
  </div>
  )
}

export default ColomnGroup;