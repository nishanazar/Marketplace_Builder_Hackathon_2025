import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import {Checkout }from "./checkout"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, Checkout]
}
