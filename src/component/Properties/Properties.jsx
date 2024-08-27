import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProperty from "../SingleProperty/SingleProperty";

const Properties = () => {
  const properties = useLoaderData();

  return (
    <div className="container mx-auto mt-4 ">
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Category</h2>
            <p className="font-serif text-xl dark:text-gray-600">
              We are dedicated to providing world-class service
            </p>
            <div>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Price</a></li>
    <li><a>Date</a></li>
  </ul>
</div>
            </div>
            {/* category */}
            <div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Electronics</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Footwear</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Office Supplies</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Home Appliances</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Accessories</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
            </div>
            {/* category */}
          </div>
          
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <SingleProperty
                key={property.id}
                property={property}
              ></SingleProperty>
            ))}
          </div>
        </div>
      </section>
      <div className="p-5 space-x-2  flex justify-center">
      
  <button className=" btn btn-outline btn-warning">Previous</button>
  <button className="btn btn-outline btn-warning  ">Next</button>

      </div>
    </div>
  );
};

export default Properties;
