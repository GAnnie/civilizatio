/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import "./app.less";
import React from 'react';

import {Provider} from 'redux-viewmodel';
import RootViewModel from './viewmodels/root';

import AppRoot from './views/root';

window.addEventListener('load', ()=>{
    React.render(
        <Provider viewModel={RootViewModel.instance} viewClass={AppRoot}>
        </Provider>
    , document.body);
})
