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
      <React.Fragment>
        <h1>@t7/accordion</h1>

        <p>
          <a href='https://github.com/t7-components/accordion/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <h2>
          Using &#60;Accordion&#62; as a container and &#60;AccordionPanel&#62; for content
        </h2>
        <h3>(For demonstration purposes Item 2 has been pre-selected)</h3>

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
      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
