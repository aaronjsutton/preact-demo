import { h, render } from 'preact';
import { Clock } from './components/clock';
const App = h(Clock, null);
window.addEventListener('DOMContentLoaded', () => {
  render(App, document.getElementById('app'));
});