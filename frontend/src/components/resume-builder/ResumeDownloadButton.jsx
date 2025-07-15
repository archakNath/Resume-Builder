import React from "react";
import {
  Download,
} from "lucide-react";

const ResumeDownloadButton = () => {
  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview");
    const content = element.outerHTML;

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Resume PDF</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
          body {
            font-family: 'Helvetica', sans-serif;
            padding: 2rem;
            background-color: white;
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;

    const response = await fetch("http://localhost:5000/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      onClick={downloadPDF}
      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
    >
      <Download size={16} />
      Download PDF
    </button>
  );
};

export default ResumeDownloadButton;
