// components/CalendlyWidget.js
import React, { useEffect } from 'react';

const CalendlyWidget = ({ link }: { link: string }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .calendly-inline-widget {
        min-width: 320px;
        height: 700px;
      }
    `;

    const head = document.querySelector('head');
    head?.appendChild(style);

    // Load Calendly script
    const script = document.createElement('script');
    script?.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head?.appendChild(script);

    return () => {
      head?.removeChild(style);
      head?.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Here will be the Calendly widget */}
      <div className="calendly-inline-widget" data-url={link}></div>
    </div>
  );
};

export default CalendlyWidget;
