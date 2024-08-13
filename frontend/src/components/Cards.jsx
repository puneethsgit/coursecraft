import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3" style={{ width: "350px" }}>
        {" "}
        {/* Fixed width for the card */}
        <div
          className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white"
          style={{ height: "100%" }}
        >
          {" "}
          {/* Ensures the card stretches to container height */}
          <figure>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "200px", objectFit: "cover" }}
            />{" "}
            {/* Adjusted height and objectFit */}
          </figure>
          <div className="card-body" style={{ height: "220px" }}>
            {" "}
            {/* Fixed height for the card body */}
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="px-2 py-1 cursor-pointer rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white ">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
