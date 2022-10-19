class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="menubar">
            <ul id="menu">
            <li><a href="https://huuphuocle.github.io"><b>Home</b></a></li>
            <li><a href="includes/cv.pdf" target="_blank"><b>CV</b></a></li>
            <li><a href="https://huuphuocle.github.io/research"><b>Research</b></a></li>
            <li><a href="https://huuphuocle.github.io/software"><b>Software</b></a></li>
            </ul>
        </div>
        `;
    }
}

customElements.define('header-component', Header);