const express = require('express')
const router = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

// GET /api/v1/drafts
router.get('/', checkAuth, async (req, res) => {
  const drafts = await models.Draft.findAll({
    order: [['id', 'ASC']],
  })
  res.json(drafts)
})
//PATCH /api/v1/drafts/:id
router.patch('/:id', checkAuth, async (req, res) => {
  //get draft from db using id
  const draft = await models.Draft.findByPk(req.params.id)
  if (!draft) {
    res.status(404).json({ error: 'cannot find draft with id' + req.params.id })
  }
  await draft.update({
    name: req.body.name || draft.name,
    style: req.body.style || draft.style,
    abv: req.body.abv || draft.abv,
    ibu: req.body.ibu || draft.ibu,
    color: req.body.color || draft.color,
  })
  res.status(200).json(draft)
})

module.exports = router
