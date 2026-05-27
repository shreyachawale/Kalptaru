import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    status: {
      type: String,
      enum: ['paid'],
      default: 'paid',
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentProvider: {
      type: String,
      default: 'dummy-razorpay',
    },
    paymentReference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

purchaseSchema.index({ student: 1, course: 1 }, { unique: true });

export const Purchase = mongoose.model('Purchase', purchaseSchema);
