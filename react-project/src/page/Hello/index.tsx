/* eslint-disable */

import React from 'react'
import './index.scss'
import logo from 'src/logo.svg'

import { VueInReact } from 'vuera'
import Content from '@emp/vueComponents/Content'
import HelloDEMO from '@emp/react-base/components/Demo'


const VueComponent = VueInReact(Content)

const Hello = ({ title = 'Hello EMP' }: { title: string }) => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
      <HelloDEMO />
      <div className="vue-component">
        <VueComponent title="React use Remote Vue Component" />
      </div>
    </div>
  )
}

export default Hello
