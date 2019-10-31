const Exercise = require('../models/exercise');

const exerciseController = {};

exerciseController.show = async (_, res) => {
    await Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(`Error: ${err}`)); 
}

exerciseController.showOne = async (req, res) => {
    await Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(`Error ${err}`));
}

exerciseController.add = async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    await newExercise.save()
    .then(() => res.json('Exercise Added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}

exerciseController.update = async (req, res) => {
    await Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username,
        exercise.description = req.body.description,
        exercise.duration = Number(req.body.duration),
        exercise.date = Date.parse(req.body.date)

        exercise.save()
        .then(() => res.json('Exercise Updated'))
        .catch(err => res.status(400).json(`Error ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
}

exerciseController.remove = async (req, res) => {
    await Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = exerciseController;