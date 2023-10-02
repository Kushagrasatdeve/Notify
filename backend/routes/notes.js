const express = require('express')
const Note = require('../models/noteModel')
const {
    createNote,
    getNotes,
    getNote,
    note, 
    updateNote,
} = require('../controllers/noteController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// Get all notes
router.get('/', getNotes)

// Get a single notes
router.get('/:id', getNote)

// POST a new notes
router.post('/', createNote)

// Delete a note
router.delete('/:id', note)

// Update a note
router.patch('/:id', updateNote)

module.exports = router