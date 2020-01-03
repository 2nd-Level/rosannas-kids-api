// Update with your config settings.

module.exports = {

  development: {
    
    client: 'sqlite3',
  
    connection: {
      filename: './data/rosannaskids.db3',
    },
    useNullAsDefault: true,
    migrations: {
    directory: './data/migrations'

    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
