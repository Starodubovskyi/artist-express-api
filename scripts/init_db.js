const fs = require('fs');
const { MongoClient } = require('mongodb');

// JSON file paths
const userFile = 'user.json';
const themeSettingsFile = 'default_settings.json';
const pagesFile = 'pages.json';
const menusFile = 'menus.json';

// Generate a user from JSON file
const generateUser = () => {
  const user = JSON.parse(fs.readFileSync(userFile));

  // Your logic to generate a user
  // ...

  return user;
};

// Introduce ThemeSettings with default settings
const introduceThemeSettings = () => {
  const themetSettings = JSON.parse(fs.readFileSync(themeSettingsFile));

  console.log('ThemeSettings introduced');
  return themetSettings;
};

// Insert pages into MongoDB
const insertPages = () => {
  const pages = JSON.parse(fs.readFileSync(pagesFile));

  const client = new MongoClient('mongodb://localhost:27017');

  try {
    client.connect((err) => {
      if (err) {
        console.log('Error connecting to MongoDB:', err);
        return;
      }

      const db = client.db('your-database-name');
      const collection = db.collection('pages');

      // Insert pages
      collection.insertMany(pages, (err, result) => {
        if (err) {
          console.log('Error inserting pages into MongoDB:', err);
        } else {
          console.log(`${result.insertedCount} pages inserted into MongoDB`);
        }

        // Close the connection
        client.close();
      });
    });
  } catch (err) {
    console.log('Error inserting pages into MongoDB:', err);
  }
};

// Insert menus into MongoDB
const insertMenus = () => {
  const menus = JSON.parse(fs.readFileSync(menusFile));

  const client = new MongoClient('mongodb://localhost:27017');

  try {
    client.connect((err) => {
      if (err) {
        console.log('Error connecting to MongoDB:', err);
        return;
      }

      const db = client.db('your-database-name');
      const collection = db.collection('menus');

      // Insert menus
      collection.insertMany(menus, (err, result) => {
        if (err) {
          console.log('Error inserting menus into MongoDB:', err);
        } else {
          console.log(`${result.insertedCount} menus inserted into MongoDB`);
        }

        // Close the connection
        client.close();
      });
    });
  } catch (err) {
    console.log('Error inserting menus into MongoDB:', err);
  }
};

// Execute the script
function runScript() {
  try {
    generateUser();
    introduceThemeSettings();
    insertPages();
    insertMenus();
    console.log('Script executed successfully');
  } catch (err) {
    console.log('Error executing script:', err);
  }
}

runScript();
