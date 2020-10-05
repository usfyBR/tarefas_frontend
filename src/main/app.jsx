import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Tarefas from '../tarefas/tarefas'
import About from '../../src/about/about'
import Menu from '../template/menu'

export default props => (
    <div>
        <Menu />
        <div className='container'>
            <Tarefas />
            <About />
        </div>
    </div>
)