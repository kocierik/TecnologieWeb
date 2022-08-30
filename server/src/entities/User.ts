import { Schema, model } from 'mongoose'

interface IUser {
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string,
  animals: string[]
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  phone: {type: String, required: true},
  animals: {type: [String], required: true, default: []}
})

const User = model<IUser>('User', userSchema)

export default User
