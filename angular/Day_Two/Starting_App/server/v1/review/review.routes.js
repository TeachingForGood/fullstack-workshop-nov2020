const express = require('express');
const reviewController = require('./review.controller');
const authCheck = require('../../v2/user/auth.middleware');
const router = express.Router();

router.post('/', authCheck, reviewController.createNewReview);
router.get('/:id', reviewController.getReviewById);
router.get('/', reviewController.getAllReviews);
router.delete('/:id', reviewController.deleteReviewById);
router.patch('/:id', reviewController.updateReviewById);

module.exports = router;
