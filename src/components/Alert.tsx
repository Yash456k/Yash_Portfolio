import React from "react";

interface AlertProps {
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ title, description }) => (
  <div
    className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 text-xs sm:text-sm"
    role="alert"
  >
    <p className="font-bold">{title}</p>
    <p>{description}</p>
  </div>
);

export default Alert;
