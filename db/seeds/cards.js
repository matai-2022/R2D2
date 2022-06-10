exports.seed = function (knex) {
  return knex('cards').insert([
    {
      id: 1,
      name: "Mr Wang's",
      image: '/images/mrwangs.jpg',
      selected: 0,
    },
    {
      id: 2,
      name: 'Doolan Brothers',
      image: '/images/doolanbrothers.jpg',
      selected: 0,
    },
    {
      id: 3,
      name: 'Flying Burrito',
      image: '/images/flyingburrito.jpg',
      selected: 0,
    },
    {
      id: 4,
      name: 'Domain',
      image: '/images/domain.jpg',
      selected: 0,
    },
    {
      id: 5,
      name: 'Carpark',
      image: '/images/carpark.jpg',
      selected: 0,
    },
    {
      id: 6,
      name: 'Trampoline Park',
      image: '/images/trampoline.jpg',
      selected: 0,
    },
    {
      id: 7,
      name: 'Newmarket Station',
      image: '/images/newmarketstation.jpg',
      selected: 0,
    },
  ])
}
