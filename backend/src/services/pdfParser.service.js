import fs from "fs";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

export const extractTextFromPDF = async (filepath) => {
  if (!fs.existsSync(filepath)) {
    throw new Error(`File not found: ${filepath}`);
  }

  const buffer = fs.readFileSync(filepath);
  const data = await pdfParse(buffer);

  return data.text;
};
