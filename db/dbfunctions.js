const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCardsLength,
  getCardById,
  changeSelectedValue,
  editCard,
  addCard,
  deleteCard,
}

function getCardsLength(db = connection) {
  return db('cards').max('id')
}

function getCardById(id, db = connection) {
  return db('cards').where('id', id).first()
}

function changeSelectedValue(id, value, db = connection) {
  return db('cards').where('id', id).update('selected', value)
}

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
