const catchError = require("../utils/catchError");
const Tema = require("../models/Tema");

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const temas = await Tema.findAll();
  return res.json(/* valor a retornar */ temas);
});

const create = catchError(async (req, res) => {
  const { name, artist, genre, release_year } = req.body;
  const tema = await Tema.create({
    name,
    artist,
    genre,
    release_year,
  });
  return res.status(201).json(tema);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const tema = await Tema.findByPk(id);
  return res.json(tema);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Tema.destroy({ where: { id: id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { name, artist, genre, release_year } = req.body;
  const tema = await Tema.update(
    {
      name,
      artist,
      genre,
      release_year,
    },
    { where: { id: id }, returning: true }
  );
  return res.json(tema[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
