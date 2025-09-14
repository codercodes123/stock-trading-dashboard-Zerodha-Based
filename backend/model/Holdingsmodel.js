// Import `model` function from mongoose
// `model()` is used to create and retrieve models
const { model } = require('mongoose');

// Import HoldingsSchema from the schemas folder
// This schema defines the document structure for "holdings" collection
const { HoldingsSchema } = require('../schemas/HoldingsSchema');

// Create a Mongoose model for the "holdings" collection
// - "holdings" → name of the collection in MongoDB (Mongoose will pluralize it if needed)
// - HoldingsSchema → schema that enforces structure of documents in this collection
const HoldingsModel = model("holdings", HoldingsSchema);

// Export the model so it can be used in other files (controllers, services, etc.)
module.exports = { HoldingsModel };
