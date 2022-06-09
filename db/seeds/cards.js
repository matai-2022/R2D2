exports.seed = function (knex) {
  return knex('cards').insert([
    {
      id: 1,
      name: "Mr Wang's",
      image: '',
      selected: 0,
    },
    {
      id: 2,
      name: 'Doolan Brothers',
      image: '',
      selected: 0,
    },
    {
      id: 3,
      name: 'Flying Burrito',
      image: '',
      selected: 0,
    },
    {
      id: 4,
      name: 'Domain',
      image: '',
      selected: 0,
    },
    {
      id: 5,
      name: 'Carpark',
      image: '',
      selected: 0,
    },
    {
      id: 6,
      name: 'Trampoline Park',
      image: '',
      selected: 0,
    },
    {
      id: 7,
      name: 'Newmarket Station',
      image: '',
      selected: 0,
    },
  ])
}
