
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dog_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog_table').insert([
        {
          id: 1, 
          owner_id: 1, 
          feedback_id: 1, 
          name: "D'Angelo", 
          breed: 'Vizsla', 
          sex: 'Male', 
          age: 'Senior', 
          size: 'Large', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let D'Angelo near food.",
          photo: 'https://images.pexels.com/photos/2652703/pexels-photo-2652703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Kelburn Vets',
          vet_contact: '04 475 9539',
        },
        {
          id: 2, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Crumpet', 
          breed: 'Border Collie', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '60-90mins',
          good_with_other_dogs: 'Yes',
          special_requirements: 'Please no treats!',
          photo: 'https://images.pexels.com/photos/772832/pexels-photo-772832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 3, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Johnny', 
          breed: 'Jack Russell Terrier', 
          sex: 'Male', 
          age: 'Puppy', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Johnny does not like the ocean",
          photo: 'https://images.pexels.com/photos/1750538/pexels-photo-1750538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Pet Doctors Thorndon',
          vet_contact: '04 4732674',
        },
        {
          id: 4, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Luna', 
          breed: 'Boston Terrier', 
          sex: 'Female', 
          age: 'Adolescent', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let Luna near food or kids",
          photo: 'https://images.pexels.com/photos/2449536/pexels-photo-2449536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          vet_name: 'Pet Doctors Thorndon',
          vet_contact: '04 4732674',
        },
        {
          id: 5, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Cooper', 
          breed: 'Beagle', 
          sex: 'Male', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '45-60mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Cooper loves meeting new dogs and chasing sticks",
          photo: 'https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          vet_name: 'Pet Doctors Thorndon',
          vet_contact: '04 4732674',
        },
        {
          id: 6, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Toast', 
          breed: 'Westie, Schnauzer, Poodle cross ', 
          sex: 'Female', 
          age: 'Puppy', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "I love baby Toast, she is my favourite pup, do you love Toast too?",
          photo: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 7, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Ebony', 
          breed: 'Pug', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Ebony likes to take a break every 5 mins",
          photo: 'https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 8, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Deno', 
          breed: 'Unknown', 
          sex: 'Male', 
          age: 'Senior', 
          size: 'Medium', 
          activity_requirements: '60-90mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "He's happiest at the beach with a tennis ball",
          photo: 'https://images.pexels.com/photos/612813/pexels-photo-612813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 9, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Rocky', 
          breed: 'Rottweiler', 
          sex: 'Male', 
          age: 'Adolescent', 
          size: 'Medium', 
          activity_requirements: '45-60mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let Rocky near food",
          photo: 'https://images.pexels.com/photos/264005/pexels-photo-264005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 10, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Luka', 
          breed: 'Dachshund', 
          sex: 'Male', 
          age: 'Adult', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Luka loves meeting new friends",
          photo: 'https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 11, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Peaches', 
          breed: 'Pit Bull', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Peaches loves running on the beach",
          photo: 'https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 12, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Jedi', 
          breed: 'German Shepherd', 
          sex: 'Male', 
          age: 'Adult', 
          size: 'Large', 
          activity_requirements: '60-90mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Please don't let Jedi chew on sticks",
          photo: 'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          vet_name: 'SPCA Vet Clinic - Wellington',
          vet_contact: '04-389 8044',
        },
        {
          id: 13, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Jack', 
          breed: 'Dalmatian', 
          sex: 'Male', 
          age: 'Puppy', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let Jack near food",
          photo: 'https://images.pexels.com/photos/3763313/pexels-photo-3763313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 14, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Lola', 
          breed: 'Chow Chow', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Lola loves playing ball and with other dogos",
          photo: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=800',
          vet_name: 'Pet Doctors Thorndon',
          vet_contact: '04 4732674',
        },
        {
          id: 15, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Bear', 
          breed: 'Bernese Mountain', 
          sex: 'Male', 
          age: 'Senior', 
          size: 'Large', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'No',
          special_requirements: "He's an old man and doesn't like other dogs",
          photo: 'https://images.pexels.com/photos/1058498/pexels-photo-1058498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          vet_name: 'Pet Doctors Thorndon',
          vet_contact: '04 4732674',
        },
        {
          id: 16, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Bean', 
          breed: 'Chocolate Lab', 
          sex: 'Female', 
          age: 'Adolescent', 
          size: 'Medium', 
          activity_requirements: '60-90mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let Bean near food",
          photo: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 17, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Duke', 
          breed: 'Golden Retriever ', 
          sex: 'Male', 
          age: 'Puppy', 
          size: 'Medium', 
          activity_requirements: '45-60mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Happiest when in the forest",
          photo: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 18, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Sadie', 
          breed: 'Corgi', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "No treats please",
          photo: 'https://images.pexels.com/photos/2737393/pexels-photo-2737393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 22, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Sage', 
          breed: 'Shih Tzu', 
          sex: 'Female', 
          age: 'Adult', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Loves the park",
          photo: 'https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 23, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Borris', 
          breed: 'Boxer', 
          sex: 'Male', 
          age: 'Adult', 
          size: 'Large', 
          activity_requirements: '60-90mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Loves a stick",
          photo: 'https://images.pexels.com/photos/1294062/pexels-photo-1294062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Karori Veterinary Clinic',
          vet_contact: '04-476 3555',
        },
        {
          id: 26, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Hattie', 
          breed: 'Border Terrier', 
          sex: 'Female', 
          age: 'Senior', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'No',
          special_requirements: "Don't let Hattie near other dogs",
          photo: 'https://images.pexels.com/photos/2013662/pexels-photo-2013662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 29, 
          owner_id: 2, 
          feedback_id: 2, 
          name: 'Wilkie', 
          breed: 'Unknown', 
          sex: 'Male', 
          age: 'Adult', 
          size: 'Medium', 
          activity_requirements: '45-60mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Loves other dogs and kids",
          photo: 'https://images.pexels.com/photos/1078090/pexels-photo-1078090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          vet_name: 'Tasman St Vet Centre',
          vet_contact: '04-385 7773',
        },
        {
          id: 30, 
          owner_id: 3, 
          feedback_id: 3, 
          name: 'Jake', 
          breed: 'Animated', 
          sex: 'Does it matter?', 
          age: 'Adult', 
          size: 'Small', 
          activity_requirements: '30-45mins',
          good_with_other_dogs: 'Yes',
          special_requirements: "Don't let Jake near food",
          photo: 'https://images.adagio.com/images2/custom_blends/139293.jpg',
          vet_name: 'Pendleton Ward',
          vet_contact: '0800838383',
        },
      ]);
    });
};
