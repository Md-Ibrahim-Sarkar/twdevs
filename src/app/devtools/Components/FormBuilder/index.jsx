'use client';

import { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import FormElementPanel from './FormElementPanel';
import FormPreview from './FormPreview';
import CustomizationPanel from './CustomizationPanel';
import { FaCode, FaEye, FaSave, FaUndo, FaList, FaCog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';

// Add CodePreviewModal with dynamic import to avoid SSR issues
const CodePreviewModal = dynamic(() => import('./CodePreviewModal'), {
  ssr: false
});

const FormBuilder = () => {
  const [isClient, setIsClient] = useState(false);
  const [formElements, setFormElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');
  const [showMobilePanel, setShowMobilePanel] = useState(null); // 'elements', 'preview', or 'customize'
  const [showCodePreview, setShowCodePreview] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle element selection
  const handleElementSelect = (element) => {
    setSelectedElement(element);
    setShowMobilePanel('customize');
  };

  // Handle element update
  const handleElementUpdate = (updatedElement) => {
    const newElements = formElements.map((el) =>
      el.id === updatedElement.id ? updatedElement : el
    );
    setFormElements(newElements);
  };

  // Handle element deletion
  const handleElementDelete = (elementId) => {
    const newElements = formElements.filter((el) => el.id !== elementId);
    setFormElements(newElements);
    if (selectedElement?.id === elementId) {
      setSelectedElement(null);
    }
  };

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
    // Apply theme-specific styles
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Toggle preview mode
  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
    if (!previewMode) {
      setSelectedElement(null);
      setShowMobilePanel(null);
    }
  };

  // Save form state
  const saveForm = () => {
    const formState = {
      elements: formElements,
      theme: currentTheme,
      lastModified: new Date().toISOString()
    };
    localStorage.setItem('formBuilderState', JSON.stringify(formState));
    toast.success('Form saved successfully!');
  };

  // Load saved form state
  useEffect(() => {
    const savedState = localStorage.getItem('formBuilderState');
    if (savedState) {
      const { elements, theme } = JSON.parse(savedState);
      setFormElements(elements);
      setCurrentTheme(theme);
    }
  }, []);

  // Handle drag and drop
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = formElements.findIndex((el) => el.id === active.id);
      const newIndex = formElements.findIndex((el) => el.id === over.id);
      const newElements = [...formElements];
      const [movedElement] = newElements.splice(oldIndex, 1);
      newElements.splice(newIndex, 0, movedElement);
      setFormElements(newElements);
    }
  };

  const addFormElement = (elementType) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type: elementType,
      label: `New ${elementType}`,
      placeholder: `Enter ${elementType}`,
      required: false,
      options: elementType === 'select' ? ['Option 1', 'Option 2'] : [],
      validation: {
        required: false,
        pattern: '',
        minLength: '',
        maxLength: '',
      },
    };
    setFormElements([...formElements, newElement]);
    setSelectedElement(newElement);
    setShowMobilePanel('customize');
  };

  const generateCode = () => {
    const formCode = `
import React, { useState } from 'react';

export default function GeneratedForm() {
  const [errors, setErrors] = useState({});

  const validateField = (name, value, validation = {}) => {
    if (validation.required && !value) {
      return 'This field is required';
    }
    if (validation.pattern && !new RegExp(validation.pattern).test(value)) {
      return 'Invalid format';
    }
    if (validation.minLength && value.length < validation.minLength) {
      return \`Minimum length is \${validation.minLength}\`;
    }
    if (validation.maxLength && value.length > validation.maxLength) {
      return \`Maximum length is \${validation.maxLength}\`;
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate all fields
    const newErrors = {};
    let hasErrors = false;

    ${formElements.map(element => `
    // Validate ${element.label}
    const ${element.id}Error = validateField(
      '${element.label}',
      data['${element.label.toLowerCase().replace(/\s+/g, '_')}'],
      ${JSON.stringify(element.validation)}
    );
    if (${element.id}Error) {
      newErrors['${element.id}'] = ${element.id}Error;
      hasErrors = true;
    }
    `).join('\n    ')}

    setErrors(newErrors);
    if (!hasErrors) {
      console.log('Form data:', data);
      // Handle form submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
      ${formElements
        .map((element) => {
          const validationAttrs = element.validation
            ? `
              ${element.validation.pattern ? `pattern="${element.validation.pattern}"` : ''}
              ${element.validation.minLength ? `minLength="${element.validation.minLength}"` : ''}
              ${element.validation.maxLength ? `maxLength="${element.validation.maxLength}"` : ''}`
            : '';

          switch (element.type) {
            case 'text':
            case 'email':
            case 'password':
            case 'tel':
              return `
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            ${element.label}${element.required ? ' *' : ''}
          </label>
          <input
            type="${element.type}"
            name="${element.label.toLowerCase().replace(/\s+/g, '_')}"
            placeholder="${element.placeholder}"
            ${element.required ? 'required' : ''}
            ${validationAttrs}
            className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent \${
              errors['${element.id}'] ? 'border-red-500' : 'border-gray-300'
            }\`}
          />
          {errors['${element.id}'] && (
            <p className="mt-1 text-sm text-red-500">
              {errors['${element.id}']}
            </p>
          )}
        </div>`;
            case 'select':
              return `
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            ${element.label}${element.required ? ' *' : ''}
          </label>
          <select
            name="${element.label.toLowerCase().replace(/\s+/g, '_')}"
            ${element.required ? 'required' : ''}
            className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent \${
              errors['${element.id}'] ? 'border-red-500' : 'border-gray-300'
            }\`}
          >
            <option value="">Select an option</option>
            ${element.options
                  .map(
                    (option) => `<option value="${option}">${option}</option>`
                  )
                  .join('\n            ')}
          </select>
          {errors['${element.id}'] && (
            <p className="mt-1 text-sm text-red-500">
              {errors['${element.id}']}
            </p>
          )}
        </div>`;
            case 'checkbox':
              return `
        <div className="flex items-center">
          <input
            type="checkbox"
            name="${element.label.toLowerCase().replace(/\s+/g, '_')}"
            ${element.required ? 'required' : ''}
            className={\`h-4 w-4 text-blue-500 focus:ring-blue-500 \${
              errors['${element.id}'] ? 'border-red-500' : 'border-gray-300'
            } rounded\`}
          />
          <label className="ml-2 block text-sm text-gray-700">
            ${element.label}${element.required ? ' *' : ''}
          </label>
          {errors['${element.id}'] && (
            <p className="ml-6 text-sm text-red-500">
              {errors['${element.id}']}
            </p>
          )}
        </div>`;
            default:
              return '';
          }
        })
        .join('\n      ')}
      
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}`;

    setGeneratedCode(formCode);
    setShowCodePreview(true);
  };

  const resetForm = () => {
    if (confirm('Are you sure you want to reset the form? All changes will be lost.')) {
      setFormElements([]);
      setSelectedElement(null);
      setCurrentTheme('default');
      toast.success('Form reset successfully!');
    }
  };

  if (!isClient) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900"></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />

      {/* Header - Made responsive */}
      <div className="mb-8 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Tailwind Form Builder
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create beautiful, responsive forms with Tailwind CSS. Drag and drop elements,
          customize styles, and export clean code.
        </p>
      </div>

      {/* Main Content - Made responsive */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 ${showMobilePanel ? 'mb-16' : ''
        }`}>
        {/* Form Elements Panel */}
        <motion.div
          className={`lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 order-2 lg:order-1 ${showMobilePanel === 'elements' ? 'block' : 'hidden lg:block'
            }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FormElementPanel onAddElement={addFormElement} />
        </motion.div>

        {/* Form Preview */}
        <motion.div
          className={`lg:col-span-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 order-1 lg:order-2 ${showMobilePanel === 'preview' || !showMobilePanel ? 'block' : 'hidden lg:block'
            }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Form Preview
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={togglePreviewMode}
                className={`p-2 rounded-lg ${previewMode ? 'bg-green-500' : 'bg-blue-500'
                  } text-white transition-colors`}
                title={previewMode ? 'Edit Mode' : 'Preview Mode'}
              >
                <FaEye />
              </button>
              <button
                onClick={generateCode}
                className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                title="Generate Code"
              >
                <FaCode />
              </button>
              <button
                onClick={saveForm}
                className="p-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                title="Save Form"
              >
                <FaSave />
              </button>
              <button
                onClick={resetForm}
                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                title="Reset Form"
              >
                <FaUndo />
              </button>
            </div>
          </div>

          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
              <FormPreview
                elements={formElements}
                onSelectElement={handleElementSelect}
                onDeleteElement={handleElementDelete}
                previewMode={previewMode}
                theme={currentTheme}
              />
            </SortableContext>
          </DndContext>
        </motion.div>

        {/* Customization Panel */}
        <motion.div
          className={`lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 order-3 ${showMobilePanel === 'customize' ? 'block' : 'hidden lg:block'
            }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <CustomizationPanel
            selectedElement={selectedElement}
            onUpdateElement={handleElementUpdate}
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
        </motion.div>
      </div>

      {/* Mobile Action Bar - Visible only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg lg:hidden">
        <div className="flex justify-around">
          <button
            onClick={() => setShowMobilePanel(prev => prev === 'elements' ? null : 'elements')}
            className={`p-2 rounded-lg ${showMobilePanel === 'elements' ? 'bg-blue-600' : 'bg-blue-500'
              } text-white`}
            title="Elements"
          >
            <FaList />
          </button>
          <button
            onClick={() => setShowMobilePanel(prev => prev === 'preview' ? null : 'preview')}
            className={`p-2 rounded-lg ${showMobilePanel === 'preview' ? 'bg-green-600' : 'bg-green-500'
              } text-white`}
            title="Preview"
          >
            <FaEye />
          </button>
          <button
            onClick={() => setShowMobilePanel(prev => prev === 'customize' ? null : 'customize')}
            className={`p-2 rounded-lg ${showMobilePanel === 'customize' ? 'bg-purple-600' : 'bg-purple-500'
              } text-white`}
            title="Customize"
          >
            <FaCog />
          </button>
        </div>
      </div>

      {/* Add the modal */}
      <AnimatePresence>
        {showCodePreview && (
          <CodePreviewModal
            code={generatedCode}
            onClose={() => setShowCodePreview(false)}
            onCopy={() => {
              navigator.clipboard.writeText(generatedCode);
              toast.success('Code copied to clipboard!');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormBuilder; 