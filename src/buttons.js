import * as THREE from 'three';

class Button {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    click() {
        this.$el.addEventListener('click', () => {
            console.log(`click`);
        })
    }
}

export default Button;