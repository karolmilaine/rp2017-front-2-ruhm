import React from 'react'

import WordsForm from './WordsForm'
import GamesForm from './GamesForm'
import List from './List'

import { Layout, Menu } from 'antd'
const { Header, Content } = Layout

class Words extends React.Component {
  componentDidMount () {
    console.log('laetud')
    this.props.getWords()
  }

  render () {
    console.log('RENDER WORDS')
    console.log(this.props)

    const { saveWord, list: { data }, form } = this.props

    return (
      <div id='words'>
        <Header>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
      >
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content id='content'>
          <h1>Words</h1>
          <br />
          <WordsForm saveWord={saveWord} form={form} />
          <br />
          <GamesForm />
          <br />
          <List words={data} />
        </Content>
      </div>
    )
  }
}

export default Words
