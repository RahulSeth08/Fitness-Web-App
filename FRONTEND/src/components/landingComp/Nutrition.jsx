import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import nutrition1 from "../../assets/nutrition1.jpg";
import nutrition2 from "../../assets/nutrition2.jpg";

export  function Nutrition() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const nutritionTips = [
    {
      title: "Balanced Macronutrients",
      content: "Aim for a balance of carbohydrates, proteins, and healthy fats in each meal to support overall health and fitness goals.",
    },
    {
      title: "Hydration is Key",
      content: "Drink at least 8 glasses of water daily. Proper hydration supports metabolism, nutrient transport, and overall body function.",
    },
    {
      title: "Eat the Rainbow",
      content: "Incorporate a variety of colorful fruits and vegetables to ensure a wide range of vitamins, minerals, and antioxidants.",
    },
    {
      title: "Portion Control",
      content: "Use smaller plates and practice mindful eating to avoid overeating. Listen to your body's hunger and fullness cues.",
    },
    {
      title: "Lean Proteins",
      content: "Include lean protein sources like chicken, fish, tofu, or legumes in your meals to support muscle growth and repair.",
    },
    {
      title: "Whole Grains",
      content: "Choose whole grains over refined grains for more fiber, vitamins, and minerals. They also help maintain steady blood sugar levels.",
    },
    {
      title: "Healthy Fats",
      content: "Incorporate sources of healthy fats like avocados, nuts, seeds, and olive oil to support hormone function and nutrient absorption.",
    },
    {
      title: "Meal Timing",
      content: "Spread your meals throughout the day to maintain energy levels and support metabolism. Don't skip breakfast!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Nutrition Guide</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <img
              src= {nutrition2}
              alt="Healthy meal preparation"
              className="rounded-lg shadow-2xl w-full object-cover h-[89vh]"
            />
            {/* <img
              src= "{nutrition1}"
              alt="Fruits and vegetables"
              className="rounded-lg shadow-2xl w-full object-cover"
            /> */}
          </div>
          <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold mb-6">Essential Nutrition Tips</h3>
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
              {nutritionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-semibold">{tip.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-600"
                    >
                      {tip.content}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
