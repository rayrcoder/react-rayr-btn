import "font-awesome/css/font-awesome.min.css";
import 'react-rayr-btn/src/RayrBtn.scss';
import './app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrBtn, RayrBtnGroup} from 'react-rayr-btn';

function App() {
    return (
        <div className={'container'}>
            <h2>基础用法</h2>
            <div className={'item'}>
                <RayrBtn>默认按钮</RayrBtn>
                <RayrBtn type={'primary'} className={'test'}>主要按钮</RayrBtn>
                <RayrBtn type={'warning'} onClick={(e) => {
                    alert('hello!')
                }}>警告按钮</RayrBtn>
                <RayrBtn type={'primary'} size="sm">次要按钮</RayrBtn>
                <RayrBtn type={'primary'} size="xs">信息按钮</RayrBtn>
            </div>
            <div className={'item'}>
                <RayrBtn>朴素按钮</RayrBtn>
                <RayrBtn type={'primary'} inverse="true">主要按钮</RayrBtn>
                <RayrBtn type={'warning'} inverse="true">警告按钮</RayrBtn>
                <RayrBtn type={'primary'} inverse="true" size="sm">次要按钮</RayrBtn>
                <RayrBtn type={'primary'} inverse="true" size="xs">信息按钮</RayrBtn>
            </div>
            <h2>禁用状态</h2>
            <div className={'item'}>
                <RayrBtn disabled>默认按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} className={'test'}>主要按钮</RayrBtn>
                <RayrBtn disabled type={'warning'} onClick={(e) => {
                    alert('hello!')
                }}>警告按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} size="sm">次要按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} size="xs">信息按钮</RayrBtn>
            </div>
            <div className={'item'}>
                <RayrBtn disabled>朴素按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} inverse="true">主要按钮</RayrBtn>
                <RayrBtn disabled type={'warning'} inverse="true">警告按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} inverse="true" size="sm">次要按钮</RayrBtn>
                <RayrBtn disabled type={'primary'} inverse="true" size="xs">信息按钮</RayrBtn>
            </div>
            <h2>图标按钮</h2>
            <div className={'item'}>
                <RayrBtn icon="plus">新增</RayrBtn>
                <RayrBtn type={'primary'} className={'test'} icon="download">导出</RayrBtn>
                <RayrBtn type={'warning'} icon="search">查询</RayrBtn>
                <RayrBtn type={'primary'} icon="check">确定</RayrBtn>
                <RayrBtn type={'primary'} icon="plus">新增车辆</RayrBtn>
                <RayrBtn type={'primary'} inverse="true" icon="close">取消</RayrBtn>
                <RayrBtn type={'primary'} inverse="true" icon="refresh">重置</RayrBtn>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
