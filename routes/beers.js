const router = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const models = require('../models')

//GET /api/v1/beers
router.get('/', checkAuth, async (req, res) => {
  const beers = await models.Beer.findAll({
    order: [['name', 'ASC']],
  })
  res.json(beers)
})
//POST /api/v1/beers
router.post('/', checkAuth, async (req, res) => {
  const { name, style, abv, ibu, color } = req.body
  if (!name) {
    return res.status(400).json({ error: 'missing beer name' })
  }
  if (!style) {
    return res.status(400).json({ error: 'missing beer style' })
  }
  if (!abv) {
    return res.status(400).json({ error: 'missing beer abv' })
  }
  if (!ibu) {
    return res.status(400).json({ error: 'missing beer ibu' })
  }
  if (!color) {
    return res.status(400).json({ error: 'missing beer color' })
  }
  const beer = await models.Beer.create({
    name,
    style,
    abv,
    ibu,
    color,
  })
  res.status(200).json(beer)
})
// DELETE /api/v1/beers/:id
router.delete('/:id', checkAuth, async (req, res) => {
  //find beer using id
  const beer = await models.Beer.findByPk(req.params.id)
  //if no beer send 404
  if (!beer) {
    res.status(404).json({ error: 'cannot find beer with id ' + req.params.id })
    return
  }
  //destroy beer
  await beer.destroy()
  res.status(200).json({ beer })
})
//Patch /api/v1/beers/:id
router.patch('/:id', async (req, res) => {
  const { name, style, abv, ibu, color } = req.body

  const beer = await models.Beer.findByPk(req.params.id)
  if (!beer) {
    res.status(400).json({ error: 'cannot find beer with id ' + req.params.id })
    return
  }
  await beer.update({
    name: name || beer.name,
    style: style || beer.style,
    abv: abv || beer.abv,
    ibu: ibu || beer.ibu,
    color: color || beer.color,
  })
  res.status(200).json(beer)
})

module.exports = router
