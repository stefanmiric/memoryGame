let users = [
    {
      "name": "Frodo Baggins",
      "difficulty": "hard",
      "time": "0:01"
    },
    {
      "name": "Smeagol Gollum",
      "difficulty": "easy",
      "time": "0:15"
    }
  ];
  
  db.createCollection('users');
  const usersCollection = db.getCollection('users');
  
  for (let user of users)
    usersCollection.insert(user);
  