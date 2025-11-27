import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    relationship,
    message,
    date,
  }`

  return await client.fetch(query)
}

export async function getGallery() {
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    "image": image.asset->url,
    description,
    year,
    alt,
  }`

  return await client.fetch(query)
}
