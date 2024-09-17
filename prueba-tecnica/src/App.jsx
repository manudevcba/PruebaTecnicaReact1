import React from 'react'
import { useFetch } from './useFetch'
import './App.css'

export function App () {
  const { data } = useFetch('https://catfact.ninja/fact')

  return (
    <>
      <h1>App gatitos 🐱‍👤</h1>
      <h2> {data?.fact} </h2>

    </>
  )
}
