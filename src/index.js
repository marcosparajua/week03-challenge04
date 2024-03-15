/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from './component';
import { Header } from './header';
import { Main } from './main';
import { Card } from './card';
import { series } from './data';
import './style.css';

new Header('.main-title', 'My Series');
new Main('.main');
series.forEach((serie) => {
  const { name, creator, year, poster } = serie;

  new Card('.container', name, creator, year, poster);
});
