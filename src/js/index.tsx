import React from 'react';
import { render } from 'react-dom';

import '../less/main.less';

const AppContainer = () => <h2>Twitch Chat View</h2>;

const rootElement = document.querySelector('#root');

render(<AppContainer />, rootElement);
