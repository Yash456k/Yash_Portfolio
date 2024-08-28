import React, { useState } from "react";
import { Palette } from "lucide-react";

const colorSets = [
  {
    name: "Warm Terracotta",
    primary: "#cd5c5c",
    secondary: "#e9967a",
    gradient: ["#cd5c5c", "#e9967a"],
  },
  {
    name: "Rich Mahogany",
    primary: "#8b4513",
    secondary: "#deb887",
    gradient: ["#8b4513", "#cd853f"],
  },
  {
    name: "Earthy Sienna",
    primary: "#a0522d",
    secondary: "#ffa07a",
    gradient: ["#a0522d", "#d2691e"],
  },
  {
    name: "Muted Clay",
    primary: "#b8860b",
    secondary: "#f4a460",
    gradient: ["#b8860b", "#daa520"],
  },
  {
    name: "Desert Sand",
    primary: "#d2691e",
    secondary: "#ffdab9",
    gradient: ["#d2691e", "#f4a460"],
  },
  {
    name: "Autumn Leaf",
    primary: "#d2691e",
    secondary: "#ff8c00",
    gradient: ["#d2691e", "#ff8c00"],
  },
  {
    name: "Rustic Copper",
    primary: "#b87333",
    secondary: "#e6be8a",
    gradient: ["#b87333", "#cd7f32"],
  },
  {
    name: "Coffee Bean",
    primary: "#4a2f1d",
    secondary: "#a67b5b",
    gradient: ["#4a2f1d", "#6f4e37"],
  },
  {
    name: "Toasted Almond",
    primary: "#d2b48c",
    secondary: "#faebd7",
    gradient: ["#d2b48c", "#deb887"],
  },
  {
    name: "Spiced Pumpkin",
    primary: "#ff7518",
    secondary: "#ffa07a",
    gradient: ["#ff7518", "#ff8c00"],
  },
];

const ColorChanger = ({ currentColorSet, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Change color scheme"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Palette className="w-6 h-6" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden">
            {colorSets.map((colorSet, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  onColorChange(colorSet);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center">
                  <div
                    className="w-8 h-8 mr-3 rounded"
                    style={{
                      background: `linear-gradient(to right, ${colorSet.gradient[0]}, ${colorSet.gradient[1]})`,
                    }}
                  ></div>
                  <span className="text-sm font-medium">{colorSet.name}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorChanger;
