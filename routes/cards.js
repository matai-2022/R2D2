const express = require('express')

// const { eventDays, capitalise, validateDay } = require('../helpers')
const db = require('../db/dbfunctions')

const router = express.Router()
module.exports = router

// GET /cards/id
router.get('/:id', async (req, res) => {
  const cardInfo = await db.getCardById(req.params.id)
  res.render('./cards', cardInfo)
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
    const { id, name, image } = req.body

   
    await db.updatedCarInfo(id, name, image)
    res.redirect('/cards')
  } catch (err) {
    res.status(500).send(err.message)
  }
})