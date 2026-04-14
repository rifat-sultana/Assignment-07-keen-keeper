

const Stats = () => {
  return (

    <div className="max-w-5xl mx-auto">

    <div className=" bg-gray-100 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
      
      <div className="bg-white shadow rounded-xl p-5 text-center ">
        <h2 className="text-2xl font-bold"> 12 </h2>
        <p className= " text-[#64748B] text-sm"> Total Friends </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h2 className="text-2xl font-bold"> 3 </h2>
        <p className="text-[#64748B] text-sm"> On Track </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h2 className="text-2xl font-bold"> 6 </h2>
        <p className="text-[#64748B] text-sm"> Need Attention </p>
      </div>

      <div className="bg-white shadow rounded-xl p-5 text-center">
        <h2 className="text-2xl font-bold">12</h2>
        <p className="text-[#64748B] text-sm">Interactions This Month</p>
      </div>   
    </div>

    {/* divider */}
    <hr className="col-span-4 my-8 border-gray-300" />
     
     </div>
  );
};

export default Stats;

