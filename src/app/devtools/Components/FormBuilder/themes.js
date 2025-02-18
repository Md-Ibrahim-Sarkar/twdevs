export const themes = {
  default: {
    form: 'bg-white dark:bg-gray-800 shadow-sm',
    input: `bg-white dark:bg-gray-700 
      border border-gray-300 dark:border-gray-600 
      text-gray-900 dark:text-gray-100 
      focus:border-blue-500 dark:focus:border-blue-400 
      focus:ring-0 outline-none`,
    label: 'text-gray-700 dark:text-gray-300 font-medium',
    button: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm',
  },
  minimal: {
    form: 'bg-gray-50 dark:bg-gray-900',
    input: `bg-transparent 
      border-b-2 border-gray-200 dark:border-gray-700 
      text-gray-800 dark:text-gray-200
      focus:border-blue-500 dark:focus:border-blue-400 
      focus:ring-0 outline-none`,
    label: 'text-gray-600 dark:text-gray-400 text-sm',
    button: 'bg-gray-800 hover:bg-gray-700 text-white',
  },
  modern: {
    form: 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900',
    input: `bg-white/80 dark:bg-gray-700/80 
      border border-blue-200 dark:border-blue-900 
      text-blue-900 dark:text-blue-100
      shadow-sm backdrop-blur-sm
      focus:border-blue-500 dark:focus:border-blue-400 
      focus:ring-0 outline-none`,
    label: 'text-blue-800 dark:text-blue-200 font-medium',
    button: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  },
  classic: {
    form: 'bg-yellow-50 dark:bg-gray-800',
    input: `bg-white dark:bg-gray-700 
      border-2 border-yellow-200 dark:border-yellow-900 
      text-yellow-900 dark:text-yellow-100
      focus:border-yellow-500 dark:focus:border-yellow-400 
      focus:ring-0 outline-none`,
    label: 'text-yellow-800 dark:text-yellow-200 font-serif',
    button: 'bg-yellow-600 hover:bg-yellow-700 text-white',
  },
};

export const getThemeClasses = (theme = 'default', elementType) => {
  const themeStyles = themes[theme] || themes.default;
  const baseClasses = {
    input: `w-full px-4 py-2 rounded-lg transition-all
      placeholder-gray-400 dark:placeholder-gray-500
      disabled:opacity-50 disabled:cursor-not-allowed`,
    label: 'block text-sm mb-2 select-none',
    button: 'w-full px-4 py-2 rounded-lg transition-colors font-medium',
    form: 'p-4 rounded-lg transition-colors',
  };

  // Special handling for checkbox input
  if (elementType === 'input' && theme === 'checkbox') {
    return `h-5 w-5 rounded border-gray-300 
      text-blue-600 transition-colors
      focus:ring-0 focus:ring-offset-0 
      focus:border-blue-500 dark:focus:border-blue-400
      disabled:opacity-50 disabled:cursor-not-allowed`;
  }

  return `${baseClasses[elementType] || ''} ${themeStyles[elementType] || ''}`;
}; 