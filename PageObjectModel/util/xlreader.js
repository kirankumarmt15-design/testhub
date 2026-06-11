// PageObjectModel/util/xlreader.js

import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';

export async function readExcel(fileName, sheetName) {
    const filePath = path.join(
        process.cwd(),
        'testdata',
        fileName
    );

    // Verify file exists
    if (!fs.existsSync(filePath)) {
        throw new Error(
            `Excel file not found: ${filePath}`
        );
    }

    const workbook = xlsx.readFile(filePath);

    const sheet = workbook.Sheets[sheetName];

    // Verify sheet exists
    if (!sheet) {
        throw new Error(
            `Sheet "${sheetName}" not found in "${fileName}"`
        );
    }

    const data = xlsx.utils.sheet_to_json(sheet);

    // Optional: ensure sheet contains data
    if (data.length === 0) {
        throw new Error(
            `Sheet "${sheetName}" in "${fileName}" is empty`
        );
    }

    return data;
}