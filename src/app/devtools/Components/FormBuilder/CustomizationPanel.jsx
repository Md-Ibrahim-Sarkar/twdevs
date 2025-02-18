'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomizationPanel = ({ selectedElement, onUpdateElement, currentTheme, onThemeChange }) => {
  const [mounted, setMounted] = useState(false);
  const [localElement, setLocalElement] = useState(null);
  const [activeTab, setActiveTab] = useState('properties');

  useEffect(() => {
    setMounted(true);
    if (selectedElement) {
      setLocalElement({
        ...selectedElement,
        validation: selectedElement.validation || {
          pattern: '',
          minLength: '',
          maxLength: '',
        },
      });
    }
  }, [selectedElement]);

  if (!mounted || !localElement) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Select an element to customize its properties
        </p>
      </div>
    );
  }

  const handleChange = (field, value) => {
    if (!localElement) return;
    const updatedElement = {
      ...localElement,
      [field]: value,
    };
    setLocalElement(updatedElement);
    onUpdateElement(updatedElement);
  };

  const handleValidationChange = (field, value) => {
    if (!localElement) return;
    const updatedElement = {
      ...localElement,
      validation: {
        ...localElement.validation,
        [field]: value,
      },
    };
    setLocalElement(updatedElement);
    onUpdateElement(updatedElement);
  };

  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 md:space-y-6"
    >
      <div className="flex border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab('properties')}
          className={`px-4 py-2 ${activeTab === 'properties'
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          Properties
        </button>
        <button
          onClick={() => setActiveTab('validation')}
          className={`px-4 py-2 ${activeTab === 'validation'
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          Validation
        </button>
      </div>

      {activeTab === 'properties' ? (
        <div>
          <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mb-3 md:mb-4">
            Element Properties
          </h3>
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                Label
              </label>
              <input
                type="text"
                value={localElement.label || ''}
                onChange={(e) => handleChange('label', e.target.value)}
                className="w-full px-2 md:px-3 py-1.5 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                Placeholder
              </label>
              <input
                type="text"
                value={localElement.placeholder || ''}
                onChange={(e) => handleChange('placeholder', e.target.value)}
                className="w-full px-2 md:px-3 py-1.5 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
              />
            </div>

            {localElement.type === 'select' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                  Options (one per line)
                </label>
                <textarea
                  value={localElement.options.join('\n')}
                  onChange={(e) => handleChange('options', e.target.value.split('\n'))}
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base min-h-[100px]"
                />
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={localElement.required || false}
                onChange={(e) => handleChange('required', e.target.checked)}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Required field
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {['text', 'email', 'password', 'tel'].includes(localElement.type) && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pattern (RegEx)
                </label>
                <input
                  type="text"
                  value={localElement.validation?.pattern || ''}
                  onChange={(e) => handleValidationChange('pattern', e.target.value)}
                  placeholder="e.g., [A-Za-z]+"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Min Length
                  </label>
                  <input
                    type="number"
                    value={localElement.validation?.minLength || ''}
                    onChange={(e) => handleValidationChange('minLength', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Length
                  </label>
                  <input
                    type="number"
                    value={localElement.validation?.maxLength || ''}
                    onChange={(e) => handleValidationChange('maxLength', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <div>
        <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mb-3 md:mb-4">
          Theme Settings
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md text-sm md:text-base ${currentTheme === theme.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomizationPanel; 