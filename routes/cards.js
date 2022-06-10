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
