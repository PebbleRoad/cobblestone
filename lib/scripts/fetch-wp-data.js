const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const WPAPI = require('wpapi');
const wp = new WPAPI({endpoint: 'http://PROJECT-WP-INSTANCE.com/wp-json'});
const dest = path.join(__dirname, '../src/data/wp');

console.log(`\nStarting fetch-wp-data.js\n`);

///
// Clean the destination folder
///
console.log(`Cleaning ${dest}`);
rimraf(`${dest}/**/*`, () => {

  ///
  // Get list of post types
  ///
  console.log(`Retrieving list of custom post types`);
  wp.types().get((err, data) => {
    const POST_TYPES = data;

    for (type in POST_TYPES) {
      ///
      // Fetch and save posts for each post type
      ///
      console.log(`Fetching ${type} posts`)
      
      wp[type].get((err, data) => {
        if (err) console.error(err);

        data.forEach(post => {
          fs.writeFileSync(`${dest}/${type}/${post.slug}.json`, JSON.stringify(post), 'utf-8', (err) => {
            if (err) return console.log(err);
            console.log(`Fetched and saved ${post.slug}`);
          })
        });
      });
    }
  });
});
