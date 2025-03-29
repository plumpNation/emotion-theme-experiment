import React from 'react';

const DynamicElement = ({ element = 'div', children, ...props }) => {
  // Create the element dynamically based on the element prop
  const Element = element;
  
  return (
    <Element {...props}>
      {children || `This is a dynamic <${element}> element`}
    </Element>
  );
};

// Example usage
const App = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Dynamic Element Examples</h2>
      
      <DynamicElement element="p" className="text-blue-600">
        This is a paragraph with blue text
      </DynamicElement>
      
      <DynamicElement element="button" className="bg-green-500 text-white px-4 py-2 rounded">
        This is a button
      </DynamicElement>
      
      <DynamicElement element="h3" className="text-purple-700 font-bold">
        This is a heading
      </DynamicElement>
      
      <DynamicElement element="blockquote" className="border-l-4 border-gray-300 pl-4 italic">
        This is a blockquote
      </DynamicElement>
      
      <DynamicElement element="pre" className="bg-gray-100 p-2 rounded">
        This is a preformatted text element
      </DynamicElement>
    </div>
  );
};

export default App;