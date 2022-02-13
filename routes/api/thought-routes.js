const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at api/thoughts - tested and work
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id - tested and work
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST at api/thoughts/:thoughtId/reactions - tested and work
router.route('/:thoughtId/reactions').post(addReaction);

// Set up DELETE at api/thoughts/:thoughtId/reactions/:reactionId - tested and work
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;