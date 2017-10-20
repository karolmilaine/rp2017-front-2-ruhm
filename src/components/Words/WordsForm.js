import React from 'react'

import { Button, Form, Input } from 'antd'

class WordsForm extends React.Component {
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value
    this.props.saveWord(name)
  }

  render () {
    console.log('RENDER FORM')

    const { form: { message, error, loading } } = this.props

    return (
      <div className='word-form'>
        <p>{message || error}</p>
        <form onSubmit={this.formSubmit}>
          <Input style={{ width: '250px' }} id='name' type='text' placeholder='word' />
          <Button loading={loading} htmlType='submit'>Save</Button>
        </form>
      </div>
    )
  }
}

export default Form.create()(WordsForm)
