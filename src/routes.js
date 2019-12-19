const express = require('express')
const router = express.Router()
const controller = require('./controllers/todos')

/**
 * GET /
 * Home page.
 */
router.get('/', controller.getHome)

/**
 * GET /todos/add
 * Add task page.
 */
router.get('/todos/add', controller.getAdd)

/**
 * POST /todos/add
 * Add task
 */
router.post('/todos/add', controller.postAdd)

/**
 * GET /todos/:id
 * Remove task.
 */
router.get('/todos/:id', controller.getRemove)

module.exports = router