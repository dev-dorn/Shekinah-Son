import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div className="h-96 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        src="https://www.google.com/maps?q=Kutus,%20Kirinyaga,%20Kenya&z=14&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      />
    </div>
  );
};

export default MapEmbed;

