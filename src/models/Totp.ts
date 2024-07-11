import mongoose, { Document, Model, Schema } from "mongoose";

interface ITotp extends Document {
  email: string;
  secret: string;
  twoFactorEnabled: boolean;
}

const TotpSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  secret: { type: String, required: true },
  twoFactorEnabled: { type: Boolean, default: false },
});

const Totp: Model<ITotp> =
  mongoose.models.Totp || mongoose.model<ITotp>("Totp", TotpSchema);

export default Totp;
