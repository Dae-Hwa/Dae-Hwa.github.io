/* eslint-disable no-undef, max-nested-callbacks */
const fs = require('fs');
// 아바타에 사용되던거
// const path = require('path');
const matter = require('gray-matter');
const _ = require('lodash');
const authors = require('../data/author.json');

describe('data integrity', () => {
  describe('authors', () => {
    // 아바타, 트위터 사용하지 않음
    // const requiredFields = ['id', 'bio', 'avatar', 'twitter', 'github'];
    const requiredFields = ['id', 'bio', 'github'];

    authors.forEach(author => {
      describe(`${author.id}`, () => {
        // Check required fields
        requiredFields.forEach(field => {
          it(`should have ${field} field`, () => {
            expect(Object.keys(author).includes(field)).toBeTruthy();
          });
        });

        // Check if avatar image is in the repo
        // it('should have avatar image in the repo', () => {
        //   const avatarPath = path.join('data/', author.avatar);
        //   expect(fs.existsSync(avatarPath)).toBeTruthy();
        // });
      });
    });
  });

  describe('blog posts', () => {
    const posts = fs.readdirSync('data/blog');
    const validators = [
      {key: 'title', validator: _.isString},
      {key: 'createdDate', validator: date => _.isDate(new Date(date))},
      {key: 'updatedDate', validator: date => _.isDate(new Date(date))},
      {key: 'author', validator: author => _.map(authors, 'id').includes(author)},
      {key: 'tags', validator: _.isArray},
      {key: 'draft', validator: _.isBoolean}
    ];

    posts.forEach(post => {
      describe(`${post}`, () => {
        const {data} = matter.read(`data/blog/${post}/index.md`);
        validators.forEach(field => {
          it(`should have correct format for ${field.key}`, () => {
            expect(field.validator(data[field.key], post)).toBeTruthy();
          });
        });
      });
    });
  });
});
