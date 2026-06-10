const errorHandler = (err, req, res, next) => {
  console.error('🔥', err.message);

  // CastError = id không hợp lệ (ví dụ '123' thay vì ObjectId)
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  // ValidationError = sai schema (thiếu field, sai type...)
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ message: messages.join(', ') });
  }

  res.status(500).json({ message: err.message || 'Server error' });
};

module.exports = errorHandler;