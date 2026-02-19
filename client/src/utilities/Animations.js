export default class Animations {
    static animations = new Animations();

    fadeInScreen = (screen_name) => {
        const screen = document.getElementById(screen_name);
        if (!screen) return;

        requestAnimationFrame(() => {
            screen.style.opacity = "1";
            screen.style.transform = "translateY(0)";
        });
    };
}