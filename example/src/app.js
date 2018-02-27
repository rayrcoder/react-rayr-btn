import 'react-rayr-btn/src/RayrBtn.scss';
import './app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrBtn, RayrBtnGroup} from 'react-rayr-btn';

function App() {
    return (
        <div className={'container'}>
            <h2>按钮组件</h2>
            <div className={'item'}>
                <div className={'title'}>Primary Button</div>
                <RayrBtn type={'primary'} className={'test'}>常态</RayrBtn>
                <RayrBtn type={'primary'} onClick={(e) => {
                    console.log(e);
                    alert('hello!')
                }}>点击我</RayrBtn>
                <RayrBtn type={'primary'} disabled={true}>禁用</RayrBtn>
            </div>
            <div className={'item'}>
                <div className={'title'}>Danger Button</div>
                <RayrBtn type={'danger'}>危险</RayrBtn>
                <RayrBtn type={'danger'}>点击我</RayrBtn>
                <RayrBtn type={'danger'} disabled={true}>危险</RayrBtn>
            </div>
            <div className={'item'}>
                <div className={'title'}>Default Button</div>
                <RayrBtn>默认</RayrBtn>
                <RayrBtn>点击我</RayrBtn>
                <RayrBtn disabled={true}>默认</RayrBtn>
            </div>
            <div className={'item'}>
                <div className={'title'}>small Button</div>
                <RayrBtn type={'primary'} size={'sm'}>主按钮</RayrBtn>
                <RayrBtn type={'primary'} size={'sm'}>点击我</RayrBtn>
                <RayrBtn type={'primary'} size={'sm'} disabled={true}>主按钮</RayrBtn>
            </div>
            <div className={'item'}>
                <div className={'title'}>small Button</div>
                <RayrBtn type={'danger'} size={'sm'}>主按钮</RayrBtn>
                <RayrBtn type={'danger'} size={'sm'}>点击我</RayrBtn>
                <RayrBtn type={'danger'} size={'sm'} disabled={true}>主按钮</RayrBtn>
            </div>
            <div className={'item'}>
                <div className={'title'}>small Button</div>
                <RayrBtn size={'sm'}>次操作</RayrBtn>
                <RayrBtn size={'sm'}>点击我</RayrBtn>
                <RayrBtn size={'sm'} disabled={true}>次操作</RayrBtn>
            </div>
            <h2>基础按钮组</h2>
            <div className={'item2'}>
                <RayrBtnGroup>
                    <RayrBtn>创建</RayrBtn>
                    <RayrBtn>发布</RayrBtn>
                    <RayrBtn>删除</RayrBtn>
                </RayrBtnGroup>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
