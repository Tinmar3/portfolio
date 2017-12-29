require('./external/domready');
require('./external/polyfills');
import 'nodelist-foreach-polyfill';
import { modHeader } from './pages/_partials/header';
import { modFooter } from './pages/_partials/footer';
import { pageCheck } from './shared/utils.js';

var pages, header, footer;

DomReady.ready(() => {

    pages = pageCheck();
    header = modHeader();
    footer = modFooter();

    header.initHeader();
    footer.initFooter();

    if (pages.home) {

    }

});