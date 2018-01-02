require('./external/domready');
require('./external/polyfills');
import 'nodelist-foreach-polyfill';
import { modHeader } from './pages/_partials/header';
import { modFooter } from './pages/_partials/footer';
import { pageCheck, modDelayedAction } from './shared/utils.js';

var pages, header, footer, delayedAction;

DomReady.ready(() => {

    delayedAction = modDelayedAction();
    pages = pageCheck();
    header = modHeader();
    footer = modFooter();

    header.initHeader();
    footer.initFooter();

    if (pages.projects) {
        require('./pages/projects/projectsPage.js');
    }

    function reinitialize() {
        header.deinitHeader();
        header.initHeader();
    }

    window.onresize = (event) => {
        delayedAction.initDelayedAction(() => {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", () => {
        reinitialize();
    });

});

// window.onload = () => {
// }