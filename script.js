const fs = require("fs");
const path = require("path");

const inputDir = "./input";
const outputDir = "./output";

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files in the input directory recursively
const readDirRecursively = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fileList = [];
  for (const file of files) {
    if (file.isDirectory()) {
      fileList = [
        ...fileList,
        ...readDirRecursively(path.join(dir, file.name)),
      ];
    } else if (path.extname(file.name).toLowerCase() === ".xml") {
      fileList.push(path.join(dir, file.name));
    }
  }
  return fileList;
};

const inputFiles = readDirRecursively(inputDir);

// Process each input file
inputFiles.forEach((filePath) => {
  const outputFile = path.join(
    outputDir,
    path.relative(inputDir, filePath).replace(/\.xml$/, ".md")
  );

  // Read XML file
  const xml = fs.readFileSync(filePath, "utf-8");

  // Extract subtitles from XML file
  const subtitles = xml.match(/<p[^>]*>([\s\S]*?)<\/p>/g).map((p) => {
    let innerContent = p
      .replace(/<\/?p[^>]*>/g, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<span[^>]*>([\s\S]*?)<\/span>/g, "$1");

    if (!/[\s.]$/.test(innerContent)) {
      innerContent += " ";
    }

    if (!/^\s*-/.test(innerContent)) {
      innerContent = "- " + innerContent;
    }
    return innerContent.replace(/&amp;/g, "&");
  });

  // Join subtitles into a single string separated by newlines
  const markdown = subtitles.join("\n").replace(/\n{2,}/g, "\n");

  // Write markdown to output file
  const outputDirectory = path.dirname(outputFile);
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }
  fs.writeFileSync(outputFile, markdown);
  console.log(`File ${outputFile} written successfully.`);
});
