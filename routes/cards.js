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

// GET /cards/4/edit
router.get('/:id/edit', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const cardInfo = await db.getCardById(id)
    res.render('editCard', cardInfo)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// POST /cards/4/edit
router.post('/:id/edit', async (req, res) => {
  try {
    const id = req.params.id
    const updatedCardInfo = req.body

    await db.editCard(id, updatedCardInfo)
    res.redirect('/cards')
  } catch (err) {
    res.status(500).send(err.message)
  }
})
