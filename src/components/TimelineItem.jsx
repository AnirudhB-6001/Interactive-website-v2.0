import React from "react";

const TimelineItem = ({ item }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
    <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
    <h4 className="text-lg text-gray-800">
      {item.role} at {item.company}
    </h4>
    <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
      {item.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export default TimelineItem;
