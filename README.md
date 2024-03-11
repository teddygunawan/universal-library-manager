# Nuxt 3 + Koa Starter Typescript
A simple starter for Nuxt 3 with separate Koa backend server. Production script to be added later.

## Setup
1. The starter uses [PNPM](https://www.npmjs.com/package/pnpm) by default.

2. Install dependencies:
`
    pnpm install --recursive
`

## Development Server

Start the development server 
Nuxt Frontend: `http://localhost:3000`
Koa Backend: `http://localhost:3001`

`
pnpm run dev
`

To start specific server, utilize pnpm --filter.
`pnpm run --filter nuxt-frontend dev`

## Unit Test
Uses vitest for nuxt-frontend and uses jest for the backend
`pnpm run test`


## Production
TBD