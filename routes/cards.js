const express = require('express')
const { reset } = require('nodemon')

// const { eventDays, capitalise, validateDay } = require('../helpers')
const db = require('../db/dbfunctions')

const router = express.Router()
module.exports = router

// GET /cards/id
router.get('/:id', async (req, res) => {
  const cardInfo = await db.getCardById(req.params.id)
  console.log('cardInfo', cardInfo)
  res.render('showCard', cardInfo)
})

router.get('/select', async (req, res) => {
  const id = Number(req.body.id)
  console.log(id)
  const cardInfo = await db.getCardById(req.body.id + 1)
  // const cardsLength = await db.getCardsLength()
  res.render(`/${id + 1}`, cardInfo)
  // if (id === cardsLength) {
  //   console.log('cardsLength:', cardsLength)
  //   res.redirect('/result')
  // } else {
  //   console.log('in else')
  //   res.redirect(`/cards/${id + 1}`)
  // }
})

// POST /select -> /cards/id+1
router.post('/select', async (req, res) => {
  const id = Number(req.body.id)
  const cardsLength = await db.getCardsLength()
  await db.editCard(id, { selected: 1 })
  console.log('cardsLength', cardsLength)
  // if last card redirect to results
  // else redirect to next id
  if (id === cardsLength) {
    console.log('cardsLength:', cardsLength)
    res.redirect('/result')
  } else {
    console.log('in else')
    res.redirect(`/cards/${id + 1}`)
  }
})

// POST cards/not-select -> /cards/id+1
router.post('/not-select', async (req, res) => {
  const id = Number(req.body.id)
  const cardsLength = await db.getCardsLength()
  await db.editCard(id, { selected: 0 })
  // if last card redirect to results
  // else redirect to next id
  if (id === cardsLength) {
    console.log('here', id)

    res.redirect('/result')
  } else {
    console.log('here', id)
    res.redirect(`/cards/${id + 1}`)
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

// router.get('/select', async (req, res) => {
//   res.redirect('/results')
// })
