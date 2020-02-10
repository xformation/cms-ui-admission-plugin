import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {gQLClient} from '../../graphQLClient';

import TabPage from './TabPage';
import '../../css/tabs.css';
import '../../css/dark.css';

export default function init() {
  setTimeout(function() {
    ReactDOM.render(
      <ApolloProvider client={gQLClient}>
        <TabPage />
      </ApolloProvider>,
      document.getElementById('admissionContainer')
    );
  }, 100);
}
