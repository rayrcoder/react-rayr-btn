# RayrBtn

## Features 
* A simple btn for Web Dashboard Admin

## Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
* Server-side Rendering
* [Electron](http://electron.atom.io/)

## Install

```bash
npm install react-rayr-btn --save
```

## Usage

```jsx
import {RayrBtn} from 'react-rayr-btn';
ReactDOM.render(
    <div>
        <RayrBtn type={'primary'}>常态</RayrBtn>
        <RayrBtn type={'primary'}>点击我</RayrBtn>
        <RayrBtn type={'primary'} disabled={true}>禁用</RayrBtn>
    </div>
, document.getElementById('app'));
```

And import style manually:

```jsx
import 'react-rayr-btn/src/RayrBtn.scss';
```

## Development

```bash
$ git clone https://github.com/rayrcoder/react-rayr-btn.git
$ npm install
$ npm start
```

## Params 
* type: '' | default | primary | danger
* disabled: '' | true | false
* size: '' | md | lg | sm

## DEMO 
* type: '' | default | primary | danger
* disabled: '' | true | false
* size: '' | md | lg | sm
* onClick: function 

```jsx
<RayrBtn type={'danger'} size={'sm'} disabled={true}>主按钮</RayrBtn>
```
