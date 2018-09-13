// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import Accordion, { AccordionPanel } from './'

// CSS.
import './demo.css'
import './index.css'

// Define class.
class Demo extends React.Component {
  render () {
    const selected = {
      1: true
    }
    // Expose UI.
    return (
      <Accordion selected={selected} handleClick={() => {}}>
        <AccordionPanel label='Item 1'>
          <p>
            Content for "Item 1"
          </p>
        </AccordionPanel>
        <AccordionPanel label='Item 2'>
          <p>
            Content for "Item 2"
          </p>
        </AccordionPanel>
        <AccordionPanel label='Item 3'>
          <p>
            Content for "Item 3"
          </p>
        </AccordionPanel>
      </Accordion>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
