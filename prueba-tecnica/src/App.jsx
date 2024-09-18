import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import './App.css'

export function App () {
  const { data, loading, error } = useFetch('https://catfact.ninja/fact')

  function primeraPalabra (text) {
    if (!text) return ''

    let formaPalabra = ''

    for (let i = 0; i < text.length; i++) {
      if (/^[a-zA-Z]$/.test(text[i])) {
        formaPalabra += text[i]
      } else {
        return formaPalabra
      }
    }
  }

  return (
    <>
      <h1>App gatitos 🐱‍👤</h1>

      <a>
        {error && <div>Error:{error} </div>}
        {loading && <div>Loading...</div>}
        {data?.fact}

      </a>
      <br /><br />
      <p>La primera palabra del parrafto es: {primeraPalabra(data?.fact)}  </p>

    </>
  )
}
