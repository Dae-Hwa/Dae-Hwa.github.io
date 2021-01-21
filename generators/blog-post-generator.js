const fs = require('fs');
const {inputRequired, getCurrentDate, getCurrentDateTime} = require('./utils');

const authors = JSON.parse(fs.readFileSync('./data/author.json'));

module.exports = plop => {
  plop.setGenerator('blog post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title?',
        validate: inputRequired('title')
      },
      {
        type: 'list',
        name: 'author',
        message: 'The author of blog post?',
        choices: authors.map(author => ({name: author.id, value: author.id}))
      },
      {
        type: 'input',
        name: 'tags',
        message: 'tags? (separate with coma)'
      },
      {
        type: 'confirm',
        name: 'draft',
        message: 'It\'s a draft?'
      }
    ],
    actions: data => {
      // Set current date
      data.createdDate = `${getCurrentDateTime()}`

      // Parse tags as yaml array

      data.tags = data.tags || "etc";

      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(',').join('\n  - ')}`;
      }

      return [
        {
          type: 'add',
          path: `../data/blog/${getCurrentDate()}--{{dashCase title}}/index.md`,
          templateFile: 'templates/blog-post-md.template'
        }
      ];
    }
  });
};
