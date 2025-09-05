import IconSun from '../../../public/images/icon-sun.svg';
import MoonIcon from '../../../public/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'theme-light',
            backgroundColor: 'bg-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-dark-grayish-blue',
        },
        todo: {
            backgroundColor: 'bg-neutral-very-light-gray',
            boderColor: 'border-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue-alt',
        },
        icon: MoonIcon
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: 'theme-dark',
            backgroundColor: 'bg-neutral-very-dark-blue',
            textColor: 'text-neutral-very-dark-grayish-blue',
        },
        todo: {
            backgroundColor: 'bg-neutral-very-dark-desaturated-blue',
            boderColor: 'boder-neutral-dark-grayish-blue',
            textColor: 'text-neutral-light-grayish-blue',
        },

        icon: IconSun
    },
}