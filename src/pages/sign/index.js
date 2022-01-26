import { Page } from '@ali/kylin-framework';
import SignView from './components/sign-view.vue';
import store from './store';
import FastClick from 'fastclick';

FastClick.attach(document.body);

class IndexPage extends Page {

  initOptions() {
    return {
      store
    };
  }

  render() {
    return <SignView></SignView>;
  }
}

// eslint-disable-next-line no-new
new IndexPage('#app');
