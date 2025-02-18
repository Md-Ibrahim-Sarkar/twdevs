'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegCopy, FaTimes } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'react-hot-toast';

const CodePreviewModal = ({ code, onClose }) => {
  const [includeValidation, setIncludeValidation] = useState(true);
  const [copied, setCopied] = useState(false);

  const parseFormElements = (formCode) => {
    // Match all form elements including divs with any class
    let formElements = formCode.match(/<div[^>]*>[\s\S]*?<\/div>/g) || [];

    return formElements
      .map(element => {
        // Try to find label and input in the current element
        const label = element.match(/<label[^>]*>(.*?)<\/label>/)?.[1]?.trim() || '';
        const input = element.match(/<input[^>]*>/)?.[0] || '';

        // Skip if no input found
        if (!input) return null;

        // Extract input attributes
        const type = input.match(/type="([^"]*?)"/)?.[1] || 'text';
        const name = input.match(/name="([^"]*?)"/)?.[1] || '';
        const placeholder = input.match(/placeholder="([^"]*?)"/)?.[1] || '';
        const required = input.includes('required');
        const pattern = input.match(/pattern="([^"]*?)"/)?.[1];

        // Determine input type
        const isCheckbox = type === 'checkbox';
        const isFile = type === 'file';
        const isDate = type === 'date';

        // Return null if no name (invalid element)
        if (!name) return null;

        // If no label found, generate one from name
        const finalLabel = label || name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');

        return {
          label: finalLabel,
          type,
          name,
          placeholder,
          required,
          pattern,
          isCheckbox,
          isFile,
          isDate
        };
      })
      .filter(Boolean); // Remove null entries
  };

  const generateReactCode = (formFields) => {
    return `import React, { useState } from 'react';

export default function GeneratedForm() {
  const [formData, setFormData] = useState({
    ${formFields.map(field => {
      if (field.isCheckbox) return `${field.name}: false`;
      if (field.isFile) return `${field.name}: null`;
      if (field.isDate) return `${field.name}: ''`;
      return `${field.name}: ''`;
    }).join(',\n    ')}
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form data:', Object.fromEntries(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4">
      ${formFields.map(field => {
      if (field.isCheckbox) {
        return `
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            id="${field.name}"
            type="checkbox"
            name="${field.name}"
            checked={formData.${field.name}}
            onChange={handleChange}
            ${field.required ? 'required' : ''}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
      </div>`;
      }

      if (field.isFile) {
        return `
      <div className="space-y-1">
        <label htmlFor="${field.name}" className="block text-sm font-medium text-gray-700">
          ${field.label}${field.required ? ' *' : ''}
        </label>
        <input
          id="${field.name}"
          type="file"
          name="${field.name}"
          onChange={handleChange}
          ${field.required ? 'required' : ''}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
        />
      </div>`;
      }

      if (field.isDate) {
        return `
      <div className="space-y-1">
        <label htmlFor="${field.name}" className="block text-sm font-medium text-gray-700">
          ${field.label}${field.required ? ' *' : ''}
        </label>
        <input
          id="${field.name}"
          type="date"
          name="${field.name}"
          value={formData.${field.name}}
          onChange={handleChange}
          ${field.required ? 'required' : ''}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
        />
      </div>`;
      }

      const label = field.label.replace('');
      return `
      <div className="space-y-1">
        <label htmlFor="${field.name}" className="block text-sm font-medium text-gray-700">
          ${label}${field.required ? ' *' : ''}
        </label>
        <input
          id="${field.name}"
          type="${field.type}"
          name="${field.name}"
          value={formData.${field.name}}
          onChange={handleChange}
          ${field.placeholder ? `placeholder="${field.placeholder}"` : ''}
          ${field.required ? 'required' : ''}
          ${field.pattern ? `pattern="${field.pattern}"` : ''}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300"
        />
      </div>`;
    }).join('\n      ')}
      
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}`;
  };

  const getFormattedCode = () => {
    // Extract the entire form content including the form tag
    const formContent = code.match(/<form[\s\S]*?>([\s\S]*?)<\/form>/)?.[1] || '';

    // Parse form elements
    let formFields = parseFormElements(formContent);

    // If no fields found, try parsing the entire code
    if (formFields.length === 0) {
      formFields = parseFormElements(code);
    }

    // If still no fields found, check if we have any input elements directly
    if (formFields.length === 0) {
      const inputs = code.match(/<input[^>]*>/g) || [];
      formFields = inputs.map(input => {
        const type = input.match(/type="([^"]*?)"/)?.[1] || 'text';
        const name = input.match(/name="([^"]*?)"/)?.[1] || '';
        const placeholder = input.match(/placeholder="([^"]*?)"/)?.[1] || '';
        const required = input.includes('required');
        const pattern = input.match(/pattern="([^"]*?)"/)?.[1];
        const isCheckbox = type === 'checkbox';
        const isFile = type === 'file';
        const isDate = type === 'date';
        const label = name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ');

        return { label, type, name, placeholder, required, pattern, isCheckbox, isFile, isDate };
      }).filter(field => field.name);
    }

    return generateReactCode(formFields);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFormattedCode());
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code!');
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <SiReact className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              React Form Code
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Include Validation
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={includeValidation}
                  onChange={(e) => setIncludeValidation(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <button
              onClick={handleCopy}
              className={`p-2 text-white rounded-md transition-colors ${copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              title="Copy code"
            >
              <FaRegCopy className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-600 transition-colors"
              title="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-auto p-4 max-h-[calc(90vh-80px)]">
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            showLineNumbers
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            {getFormattedCode()}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodePreviewModal;
