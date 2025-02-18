const FormElement = ({ element, onSelect, onDelete, isPreview, theme }) => {
  const { type, label, name, placeholder, validation = {} } = element;

  if (type === 'checkbox') {
    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            id={name}
            name={name}
            required={validation.required}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  }

  if (type === 'date') {
    return (
      <div className="space-y-1">
        <label htmlFor={name} className={`block text-sm font-medium ${getThemeClasses(theme, 'label')}`}>
          {label.replace('New ', '')} {validation.required && '*'}
        </label>
        <input
          type="date"
          id={name}
          name={name}
          required={validation.required}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${getThemeClasses(theme, 'input')
            }`}
        />
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <label htmlFor={name} className={`block text-sm font-medium ${getThemeClasses(theme, 'label')}`}>
        {label.replace('New ', '')} {validation.required && '*'}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={validation.required}
        pattern={validation.pattern}
        minLength={validation.minLength}
        maxLength={validation.maxLength}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${getThemeClasses(theme, 'input')
          }`}
      />
    </div>
  );
};

export default FormElement; 