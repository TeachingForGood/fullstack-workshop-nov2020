const reviewService = require('./review.service');

/**
 * Create new movie review.
 */
createNewReview = async (req, res) => {
  try {
    await reviewService.createNewReview(req.body);
    res.status(200).json({ success: true, message: 'Review created successfully.' });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ success: false, message: 'Create new review failed!' });
  }
}

/**
 * Fetch 1 movie review by ID.
 */
getReviewById = async (req, res) => {
  try {
    const result = await reviewService.getReviewById(req.params.id);
    res.status(200).json({ review: result });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ success: false, message: 'Create new review failed!' });
  }
}

/**
 * Fetch all movie review in database.
 */
getAllReviews = async (req, res) => {
  try {
    const results = await reviewService.getAllReviews();
    res.status(200).json({ reviews: results });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ success: false, message: 'Get all reviews failed!' });
  }
}

/**
 * Update 1 movie review by ID.
 */
updateReviewById = async (req, res) => {
  try {
    await reviewService.updateReviewById(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'Review updated successfully.' });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ success: false, message: 'Update review failed!' });
  }
}

/**
 * Delete 1 movie review by ID.
 */
deleteReviewById = async (req, res) => {
  try {
    await reviewService.deleteReviewById(req.params.id);
    res.status(200).json({ success: true, message: 'Review deleted successfully.' });
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ success: false, message: 'Delete review failed!' });
  }
}

module.exports = {
  createNewReview,
  getReviewById,
  getAllReviews,
  updateReviewById,
  deleteReviewById
}
