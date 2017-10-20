import React from 'react'
import Api from '../../utils/api'

import { Button, Form, Input } from 'antd'

class GamesForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.saveGame = this.saveGame.bind(this)
  }

  saveGame (event) {
    event.preventDefault()

    const name = document.getElementById('player-name').value

    Api('POST', '/games', {
      data: { player: name }
    })
      .then(results => {
        console.log(results)

        const { game } = results

        this.setState({
          msg: 'Game saved successfully for player ' + game.player,
          error: false
        })
      })
      .catch(error => {
        let errorMessage = error.data.message

        errorMessage = error.data.message
          ? error.data.message
          : error.data.errors.player
            ? error.data.errors.player.msg
            : error.data.errors.msg

        console.log(errorMessage)

        this.setState({
          error: errorMessage,
          msg: false
        })
      })
  }

  render () {
    console.log('RENDER FORM')

    const { msg, error, loading } = this.state

    return (
      <div className='game-form'>
        <p>{msg || error}</p>
        <form onSubmit={this.saveGame}>
          <Input style={{ width: '250px' }} id='player-name' type='text' placeholder='player' />
          <Button loading={loading} htmlType='submit'>Save</Button>
        </form>
      </div>
    )
  }
}

export default GamesForm
