const express = require('express')

// const { eventDays, capitalise, validateDay } = require('../helpers')
const db = require('../db/dbfunctions')

const router = express.Router()
module.exports = router

// GET /cards/id
router.get('/:id', async (req, res) => {
  const cardInfo = await db.getCardById(req.params.id)
  console.log(cardInfo)
  res.render('./cards', cardInfo)
})

// POST /id/select -> /cards/id+1
router.post('/:id/select', async (req, res) => {
  const id = req.params.id
  const cardsLength = await db.getCardsLength()
  await db.editCard(id, { selected: 1 })
  // if last card redirect to results
  // else redirect to next id
  if (id === cardsLength) {
    res.redirect('/result')
  } else {
    res.redirect(`/:${id + 1}`)
  }
})

// POST /id/not-select -> /cards/id+1
router.post('/:id/not-select', async (req, res) => {
  const id = req.params.id
  const cardsLength = await db.getCardsLength()
  await db.editCard(id, { selected: 0 })
  // if last card redirect to results
  // else redirect to next id
  if (id === cardsLength) {
    res.redirect('/result')
  } else {
    res.redirect(`/:${id + 1}`)
  }
})
