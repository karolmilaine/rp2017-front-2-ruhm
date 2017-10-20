import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'antd'

import './Home.scss'

import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

const Home = () => {
  return (
    <div id='home'>
      <div>
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

        <Content>
          <h1>Welcome!</h1>
          <Link id='button' to='/words'>
            <Button>Words</Button>
          </Link>
        </Content>
      </div>
    </div>
  )
}

export default Home
