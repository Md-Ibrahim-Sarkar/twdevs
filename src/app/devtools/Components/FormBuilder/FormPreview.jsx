'use client';

import { useState, useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { FaGripVertical, FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { getThemeClasses } from './themes';

const FormElement = ({ element, onSelect, onDelete, isPreview, theme }) => {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  const validateField = (value) => {
    if (element.required && !value) {
      return 'This field is required';
    }
    if (element.validation?.pattern && !new RegExp(element.validation.pattern).test(value)) {
      return 'Invalid format';
    }
    if (element.validation?.minLength && value.length < element.validation.minLength) {
      return `Minimum length is ${element.validation.minLength}`;
    }
    if (element.validation?.maxLength && value.length > element.validation.maxLength) {
      return `Maximum length is ${element.validation.maxLength}`;
    }
    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValue(newValue);
    if (isPreview) {
      const validationError = validateField(newValue);
      setError(validationError);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: element.id });

  if (!mounted) {
    return null;
  }

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const baseInputClasses = `${getThemeClasses(theme, 'input')} 
    ${isPreview ? 'cursor-default' : 'cursor-pointer'}
    ${error ? 'border-red-500' : ''}`;

  const renderElement = () => {
    const commonProps = {
      id: element.id,
      name: element.label.toLowerCase().replace(/\s+/g, '_'),
      required: element.required,
      disabled: !isPreview,
      onChange: handleChange,
      value: value,
      'aria-invalid': !!error,
      'aria-describedby': error ? `${element.id}-error` : undefined,
    };

    switch (element.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'tel':
        return (
          <input
            type={element.type}
            placeholder={element.placeholder}
            className={baseInputClasses}
            {...commonProps}
            {...(element.validation?.pattern && { pattern: element.validation.pattern })}
            {...(element.validation?.minLength && { minLength: element.validation.minLength })}
            {...(element.validation?.maxLength && { maxLength: element.validation.maxLength })}
          />
        );
      case 'select':
        return (
          <select
            className={baseInputClasses}
            {...commonProps}
          >
            <option value="">Select an option</option>
            {element.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 
                  ${error ? 'border-red-500' : ''} 
                  ${isPreview ? 'cursor-pointer' : 'cursor-default'}`}
                {...commonProps}
                value="true"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor={element.id}
                className={`text-sm ${getThemeClasses(theme, 'label')} ${element.required ? 'required' : ''
                  }`}
              >
                {element.label}
                {element.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {element.placeholder && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {element.placeholder}
                </p>
              )}
            </div>
          </div>
        );
      case 'file':
        return (
          <input
            type="file"
            className={baseInputClasses}
            required={element.required}
            disabled={isPreview}
            onClick={() => !isPreview && onSelect(element)}
          />
        );
      case 'date':
        return (
          <input
            type="date"
            className={baseInputClasses}
            required={element.required}
            disabled={isPreview}
            onClick={() => !isPreview && onSelect(element)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={`group relative p-4 rounded-lg shadow-sm border 
        ${isPreview ? 'border-transparent' : 'border-gray-200 dark:border-gray-700 cursor-pointer'} 
        mb-4 transition-all hover:shadow-md ${getThemeClasses(theme, 'form')}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={!isPreview ? { scale: 1.01 } : {}}
      onClick={() => !isPreview && onSelect(element)}
    >
      {!isPreview && (
        <div className="absolute right-2 top-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-gray-400 hover:text-gray-600 cursor-move"
            title="Drag to reorder"
          >
            <FaGripVertical />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(element);
            }}
            className="p-1 text-blue-400 hover:text-blue-600"
            title="Edit element"
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(element.id);
            }}
            className="p-1 text-red-400 hover:text-red-600"
            title="Delete element"
          >
            <FaTrash />
          </button>
        </div>
      )}

      {element.type !== 'checkbox' && (
        <label className={`block mb-2 ${getThemeClasses(theme, 'label')}`}>
          {element.label}
          {element.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderElement()}
      {error && isPreview && (
        <p
          id={`${element.id}-error`}
          className="mt-1 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </motion.div>
  );
};

const FormPreview = ({ elements, onSelectElement, onDeleteElement, previewMode, theme }) => {
  const [mounted, setMounted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!previewMode) return;

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      console.log('Form data:', data);
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-[400px] p-4 rounded-lg ${getThemeClasses(theme, 'form')}`}
    >
      {elements.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className={getThemeClasses(theme, 'label')}>
            {previewMode
              ? 'No form elements to preview'
              : 'Drag and drop form elements here'}
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {elements.map((element) => (
            <FormElement
              key={element.id}
              element={element}
              onSelect={onSelectElement}
              onDelete={onDeleteElement}
              isPreview={previewMode}
              theme={theme}
            />
          ))}
          {elements.length > 0 && previewMode && (
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-lg transition-colors ${getThemeClasses(theme, 'button')}`}
            >
              Submit
            </button>
          )}
        </form>
      )}
    </motion.div>
  );
};

export default FormPreview;