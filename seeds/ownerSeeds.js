
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('owner_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('owner_table').insert([
        {
          id: 1,
          feedback_id: 1,
          first_name: 'John',
          last_name: 'Smith',
          photo: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          location: 'Newtown',
          email: 'rjrferens@gmail.com',
          user_id: 1,
        },
        {
          id: 2,
          feedback_id: 2,
          first_name: 'James',
          last_name: 'Jenkins',
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          location: 'Aro Valley',
          email: 'jamesjenkins@gmail.com',
          user_id: 2,
        },
        {
          id: 3,
          feedback_id: 3,
          first_name: 'Tabby',
          last_name: 'Walker',
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          location: 'Melrose',
          email: 'sebastiankloogh@gmail.com',
          user_id: 3,
        },
        {
          id: 4,
          feedback_id: 4,
          first_name: 'Riccardo',
          last_name: 'Schofield',
          photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          location: 'Island Bay',
          email: 'riccardoschofield@gmail.com',
          user_id: 4,
        },
      ]);
    });
};
