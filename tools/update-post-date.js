#!/usr/bin/env node

const fs = require('fs');
const slash = require('slash');
const matter = require('gray-matter');
const {getCurrentDateTime} = require('../generators/utils');

// Get files given by lint-staged (*.md files into staged)
process.argv.slice(3).forEach(dirtyPath => {
  // Make sure it will works on windows
  const path = slash(dirtyPath);

  // Only parse blog posts
  if (!path.includes('/data/blog/')) {
    return;
  }

  // Get file from file system and parse it with gray-matter
  const orig = fs.readFileSync(path, 'utf-8');
  const parsedFile = matter(orig);

  // Set current date and update `updatedDate` data
  const updatedDate = getCurrentDateTime();
  const updatedData = Object.assign({}, parsedFile.data, {updatedDate});

  // Recompose content and updated data
  const updatedContent = matter.stringify(parsedFile.content, updatedData);

  // Update file
  fs.writeFileSync(path, updatedContent, {encoding: 'utf-8'});
});
