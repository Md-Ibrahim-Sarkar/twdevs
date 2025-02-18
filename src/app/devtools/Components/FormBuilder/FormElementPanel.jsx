import { motion } from 'framer-motion';
import {
  FaFont, FaCheck, FaList, FaImage,
  FaCalendar, FaEnvelope, FaPhone, FaLock
} from 'react-icons/fa';

const FormElementPanel = ({ onAddElement }) => {
  const elements = [
    { type: 'text', icon: FaFont, label: 'Text Input' },
    { type: 'email', icon: FaEnvelope, label: 'Email' },
    { type: 'password', icon: FaLock, label: 'Password' },
    { type: 'checkbox', icon: FaCheck, label: 'Checkbox' },
    { type: 'select', icon: FaList, label: 'Select' },
    { type: 'file', icon: FaImage, label: 'File Upload' },
    { type: 'date', icon: FaCalendar, label: 'Date' },
    { type: 'tel', icon: FaPhone, label: 'Phone' },
  ];

  return (
    <div className="h-full">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Form Elements
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
        {elements.map((element) => (
          <motion.button
            key={element.type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddElement(element.type)}
            className="p-2 md:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors flex flex-col items-center gap-2"
          >
            <element.icon className="text-blue-500 text-lg md:text-xl" />
            <span className="text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center">
              {element.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FormElementPanel; 