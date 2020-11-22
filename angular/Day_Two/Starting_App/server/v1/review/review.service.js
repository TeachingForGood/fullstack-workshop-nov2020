// implementing JSON db with lowdb
const low = require('lowdb');
const { nanoid } = require('nanoid');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

/**
 * Create new movie review.
 */
const createNewReview = async (reviewData) => {
  const dbRecord = {
    id: nanoid(),
    RVW_TTL: reviewData.title,
    RVW_RTNG: reviewData.rating,
    RVW_CMNTS: reviewData.comments
  };
  db.get('reviews')
    .push(dbRecord)
    .write();
}

/**
 * Fetch 1 movie review by ID.
 */
const getReviewById = async (id) => {
  return db.get('reviews').filter({ id }).value();
}

/**
 * Fetch all movie review in database.
 */
const getAllReviews = async () => {
  return db.get('reviews').value();
}

/**
 * Update 1 movie review by ID.
 */
const updateReviewById = async (id, reviewData) => {
  db.get('reviews')
    .find({ id })
    .assign(reviewData)
    .write();
}

/**
 * Delete 1 movie review by ID.
 */
const deleteReviewById = async (id) => {
  db.get('reviews')
    .remove({ id })
    .write();
}

module.exports = {
  createNewReview,
  getReviewById,
  getAllReviews,
  updateReviewById,
  deleteReviewById
}
