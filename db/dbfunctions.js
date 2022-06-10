const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCardById,
  editCard,
  addCard,
  deleteCard,
}

function getCardById(id,db = connection) {
  return db('cards').where('id', id).first()
}

//function editCard(db = connection) {}
function editCard(id, updatedCardInfo,db = connection) {
  return db('cards')
    .where('id', id)
    .update(updatedCardInfo)

    .catch((err) => {
      console.error(err.message)
    })
}

function addCard(db = connection) {}

function deleteCard(db = connection) {}
