import React, { useState, useEffect, useRef } from 'react';

interface EditableTextProps {
  value: string;
  onSave: (val: string) => void;
  isEditing: boolean;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onSave, 
  isEditing, 
  className = '', 
  tag: Tag = 'span',
  multiline = false
}) => {
  const [text, setText] = useState(value);
  
  useEffect(() => {
    setText(value);
  }, [value]);

  if (!isEditing) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag 
      className={`${className} outline-none border-2 border-transparent hover:border-primary/50 focus:border-primary rounded px-1 transition-colors bg-black/5 cursor-text`}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const newVal = e.currentTarget.innerText;
        setText(newVal);
        onSave(newVal);
      }}
    >
      {text}
    </Tag>
  );
};

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onSave: (url: string) => void;
  isEditing: boolean;
}

export const EditableImage: React.FC<EditableImageProps> = ({ 
  onSave, 
  isEditing, 
  className,
  ...props 
}) => {
  const [showInput, setShowInput] = useState(false);
  const [url, setUrl] = useState(props.src || '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUrl(props.src || '');
  }, [props.src]);

  const handleSave = () => {
    onSave(url);
    setShowInput(false);
  };

  return (
    <div className={`relative group ${className}`} ref={containerRef}>
      <img {...props} className="w-full h-full object-cover" alt={props.alt} />
      
      {isEditing && (
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => setShowInput(true)}>
          <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">Change Image</span>
        </div>
      )}

      {showInput && (
        <div className="absolute inset-x-0 bottom-0 p-2 bg-white shadow-xl z-50 flex gap-2 rounded-lg m-2 animate-fade-in-up">
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            className="flex-1 text-xs border border-gray-300 rounded px-2 py-1"
            placeholder="Image URL"
            autoFocus
          />
          <button 
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded text-xs"
          >
            ✓
          </button>
          <button 
            onClick={() => {
              setShowInput(false);
              setUrl(props.src || '');
            }}
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};