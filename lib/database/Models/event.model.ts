import { Schema, model, models } from "mongoose";

export interface Ievent extends Document {
  name: string;
  description?: string;
  category: { _id: string; name: string };
  organiser: { _id: string; firstName: string; lastName: string };
  venue: string;
  StartTime?: Date;
  createdAt?: Date;
  endTime?: Date;
  price: string;
  isFree?: boolean;
}

const eventSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  organiser: { type: Schema.Types.ObjectId, ref: "user" },
  venue: { type: String, required: true },
  StartTime: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  price: { type: String, required: true },
  isFree: { type: Boolean, default: false },
});

const event = models.event || model("Event", eventSchema);

export default event;
