
const { Brand } = require('../models');


const getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (err) {
    next(err);
  }
};


const getById = async (req, res, next) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json(brand);
  } catch (err) {
    next(err);
  }
};


const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    res.status(201).json(brand);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { name } = req.body;
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    brand.name = name;
    await brand.save();
    res.json(brand);
  } catch (err) {
    next(err);
  }
};

const deleteBrand = async (req, res, next) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    await brand.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBrands,
  getById,
  create,
  update,
  deleteBrand,
};
