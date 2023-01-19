import { Game } from './entities/Community'
import { Types } from 'mongoose'
import ProductCategory from './entities/ProductCategory'
import Product from './entities/Product'
import { GAMES } from './const'
import AnimalCode from './entities/AnimalCode'
import User from './entities/User'
import Admin from './entities/Admin'
import ReservationCode from './entities/Service'
import Location from './entities/Location'
import Animal from './entities/Animal'

export const test = async () => {
  await User.deleteMany()
  await Animal.deleteMany()
  await Animal.insertMany([
    {
      _id: new Types.ObjectId('635c088531e05da80c7faf6a'),
      age: 20,
      name: 'Stefano Volpe',
      type: 'fox',
      userId: '635c088531e05da80c7faf61',
      picture: null,
    },
    {
      _id: new Types.ObjectId('635c088531e05da80c7faf6b'),
      age: 2,
      name: 'lalalal',
      type: 'dog',
      userId: '635c088531e05da80c7faf61',
      picture: {
        filename: "pappa.png",
        mimetype: "image/png",
        size: 1033
      },
    },
  ])
  await User.insertMany([
    {
      email: 'mattia@ah.com',
      username: 'mattia',
      password: 'mattia',
      firstName: 'mattia',
      lastName: 'girolimetto',
      phone: '3333333333',
      description: 'ciao',
      profilePicture: null,
      animals: [],
    },
    {
      _id: new Types.ObjectId('635c088531e05da80c7faf61'),
      email: 'man@ah.com',
      username: 'erikMan',
      password: 'erik',
      firstName: 'erik',
      lastName: 'koci',
      description: 'ciao',
      phone: '3333333333',
      profilePicture: null,
      animals: ['635c088531e05da80c7faf6a','635c088531e05da80c7faf6b'],
    },
    {
      email: 'lele@ah.com',
      username: 'lele',
      password: 'gabriele',
      firstName: 'gabriele',
      lastName: 'crestanello',
      phone: '3333333333',
      description: 'ciao',
      profilePicture: null,
      animals: [],
    },
  ])

  await Product.deleteMany()
  await Product.insertMany([
    {
      _id: new Types.ObjectId('62f425273418f02b236b58b0'),
      name: 'dog food',
      description: 'dog for every food',
      price: 69,
      categoryId: '62f3c0540ac73a2bc4764da8',
      image: {
        filename: "pappa.png",
        mimetype: "image/png",
        size: 1033
      },
      alt: 'dog',
      animalTargets: ['0'],
      colors: ['black', 'white'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2L', '3L'],
      highlights: ['great', 'confort', 'animal', 'hot', 'cold'],
      details: 'perfect for burn cat',
    },
    {
      _id: new Types.ObjectId('62f425273418f02b236b58b1'),
      name: 'cool T-shirt',
      description: 'so fresh',
      price: 420,
      categoryId: '62f3c0540ac73a2bc4764da7',
      colors: ['white', 'red'],
      types: ['man', 'child', 'woman'],
      image: {
        filename: "62f425273418f02b236b58b1",
        mimetype: "image/png",
        size: 1033
      },
      alt: 'shirt',
      animalTargets: ['human'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2L', '3L'],
      highlights: ['beauty', 'confort', 'human', 'cold'],
      details: 'perfect for burn human',
    },
    {
      _id: new Types.ObjectId('62f425273418f02b236b58b4'),
      name: 'Grattaculo',
      description: 'so fresh',
      price: 1550,
      categoryId: '62f3c0540ac73a2bc4764da7',
      types: ['man', 'child', 'woman'],
      image: { filename:'62f425273418f02b236b58b4' },
      alt: 'shirt',
      animalTargets: ['human'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2L', '3L'],
      highlights: ['beauty', 'confort', 'human', 'cold'],
      details: 'perfect for burn human',
    },
    {
      _id: new Types.ObjectId('62f425273418f02b236b58b5'),
      name: 'Pupazzo papero strano',
      description: 'so fresh',
      price: 10000000,
      categoryId: '62f3c0540ac73a2bc4764da7',
      colors: ['white', 'red'],
      types: ['man', 'child', 'woman'],
      image: {filename:'62f425273418f02b236b58b5'},
      alt: 'shirt',
      animalTargets: ['dog', 'cat'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2L', '3L'],
      highlights: ['beauty', 'confort', 'human', 'cold'],
      details: 'perfect for burn human',
    },
    {
      _id: new Types.ObjectId('62f425273418f02b236b58b6'),
      name: 'sapone per cani',
      description: 'so fresh',
      price: 10,
      categoryId: '62f3c0540ac73a2bc4764da7',
      colors: ['white', 'red'],
      types: ['man', 'child', 'woman'],
      image: {filename:'62f425273418f02b236b58b6'},
      alt: 'shirt',
      animalTargets: ['dog'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2L', '3L'],
      highlights: ['beauty', 'confort', 'human', 'cold'],
      details: 'perfect for burn human',
    },
  ])
}

export const initAdmin = async () => {
  await Admin.deleteMany()
  await Admin.insertMany([
    {
      username: 'admin',
      password: 'secret',
    },
  ])
}

export const initGames = async () => {
  await Game.deleteMany()
  await Game.insertMany(GAMES)
}

export const initProductCategories = async () => {
  await ProductCategory.deleteMany()
  await ProductCategory.insertMany([
    {
      name: 'wearing',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764da7'),
    },
    {
      name: 'food',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764da8'),
    },
    {
      name: 'health',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764da9'),
    },
    {
      name: 'accessories',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764daa'),
    },
    {
      name: 'puppies',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764dab'),
    },
    {
      name: 'entertainment',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764dac'),
    },
    {
      name: 'beauty',
      _id: new Types.ObjectId('62f3c0540ac73a2bc4764dad'),
    },
  ])
}

export const initAnimalCodes = async () => {
  await AnimalCode.deleteMany()
  await AnimalCode.insertMany([
    { code: 0, value: 'Dog' },
    { code: 1, value: 'Cat' },
    { code: 2, value: 'Fox' },
    { code: 3, value: 'Duck' },
    { code: 4, value: 'Bunny' },
    { code: 5, value: 'Koala' },
    { code: 6, value: 'Panda' },
    { code: 7, value: 'Shiba' },
    { code: 8, value: 'Lizard' },
  ])
}
export const initReservationCodes = async () => {
  await ReservationCode.deleteMany()
  await ReservationCode.insertMany([
    {
      _id: new Types.ObjectId('137a10397c883b752202e441'),
      title: 'Find Partner',
      description:
        "Introducing the ultimate matchmaking service for animals! Our state-of-the-art technology takes into consideration factors such as breed, personality, and compatibility to help you find the perfect partner for your furry friend. We've got you covered.",
      color: 'red',
    },
    {
      _id: new Types.ObjectId('237a10397c883b752202e442'),
      title: 'Help animals',
      description:
        "Introducing our animal assistance service, dedicated to helping animals in need. Our mission is to provide support and resources for animals of all kinds, whether they are stray, abandoned, or simply in need of a helping hand. We are the best in this sector!",
      color: 'green',
    },
    {
      _id: new Types.ObjectId('337a10397c883b752202e443'),
      title: 'Psychologist',
      description:
        "Our animal psychology service offers a unique approach to understanding and improving the well-being of animals. Our team of trained and experienced animal psychologists specialize in providing behavioral and emotional support for a wide range of animals.",
      color: 'indigo',
    },
    {
      _id: new Types.ObjectId('437a10397c883b752202e444'),
      title: 'Dog Sitter',
      description:
        "Introducing our top-rated dog sitting service for pet owners in need of a reliable and caring sitter for their furry friend. Our team of experienced dog sitters provide a safe and comfortable environment for your dog while you're away. All animal smile.",
      color: 'coral',
    },
    {
      _id: new Types.ObjectId('537a10397c883b752202e445'),
      title: 'Veterinary',
      description:
        "Welcome to our comprehensive veterinary service for animals. Our team of highly trained and experienced veterinarians and staff are dedicated to providing the best possible care for your furry friend. We have many professional certification in this sector",
      color: 'blue',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e446'),
      title: 'Pension',
      description:
        "Introducing our luxury animal pension service, where your pet can enjoy a comfortable and stress-free vacation while you're away. Our facilities offer spacious and well-appointed accommodations for a wide range of animals. from sleeping to have fun!",
      color: 'orange',
    },
    {
      _id: new Types.ObjectId('737a10397c883b752202e447'),
      title: 'Wash Animal',
      description:
        "Introducing our premium animal grooming service, where the care and comfort of your pet is our top priority. Our team of expert groomers use the latest techniques and high-quality products to keep your animal looking and feeling their best.",
      color: 'brown',
    },
    {
      _id: new Types.ObjectId('837a10397c883b752202e448'),
      title: 'Home visit',
      description:
        "Introducing our in-home animal care service, where we bring professional care to the comfort of your own home. Our team of trained and experienced animal caregivers provide a wide range of services to meet the needs of your pet, including all services.",
      color: 'pink',
    },
    {
      _id: new Types.ObjectId('937a10397c883b752202e449'),
      title: 'Grooming',
      description:
        "Introducing our luxury animal grooming service, where we pamper your pet with the highest quality grooming services. Our team of expert groomers use the latest techniques and high-quality products to keep your animal looking and feeling their best.",
      color: 'deeppink',
    },
  ])
}

export const initLocationCodes = async () => {
  await Location.deleteMany()
  await Location.insertMany([
    {
      _id: new Types.ObjectId('637a10397c883b752202e442'),
      address: { country: 'Rimini', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Rimini',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e443'),
      address: { country: 'Mestre', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Mestre',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e444'),
      address: { country: 'Bologna', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Bologna',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e445'),
      address: { country: 'Riccione', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Riccione',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e446'),
      address: { country: 'Palermo', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Palermo',
    },
    {
      _id: new Types.ObjectId('637a10397c883b752202e447'),
      address: { country: 'Roma', city: 'mirabilandia', street: 'via casa', zip: 47832 },
      name: 'Roma',
    },
  ])
}
