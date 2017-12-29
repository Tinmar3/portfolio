import { updateScreenSize } from '../../shared/utils.js';

export function modHeader() {

    var menuButton = document.querySelector('.mobile-menu-icon');
    var header = document.querySelector('header');
    var navigation = document.querySelector('nav');
    var menuButtonOnClick;
    var navigationOnHover;
    var navigationOnLeave;

    function initHeader() {

        var screenSize = updateScreenSize();

        if (screenSize.smallest || screenSize.small || screenSize.medium) {

            menuButtonOnClick = () => {
                var thisElement = event.target;
                if (header.classList.contains('opened')) {
                    header.classList.remove('opened');
                } else {
                    header.classList.add('opened');
                }
            }

            menuButton.addEventListener('click', menuButtonOnClick, true);

        } else {

            navigationOnHover = () => {
                navigation.classList.add('hovered');
            }

            navigationOnLeave = () => {
                navigation.classList.remove('hovered');
            }

            navigation.addEventListener('mouseenter', navigationOnHover, true);
            navigation.addEventListener('mouseleave', navigationOnLeave, true);

        }

    }

    function deinitHeader() {
        menuButton.removeEventListener('click', menuButtonOnClick, true);
        navigation.removeEventListener('mouseenter', navigationOnHover, true);
        navigation.removeEventListener('mouseleave', navigationOnLeave, true);
    }

    var PublicAPI = {
        initHeader: initHeader,
        deinitHeader: deinitHeader
    }

    return PublicAPI;
}