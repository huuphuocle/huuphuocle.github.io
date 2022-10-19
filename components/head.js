class Head extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <title>Huu Phuoc Le</title>
        <meta name="description" content="huu-phuoc.le" />
        <meta name="keywords" content="huu phuoc le, ecole
        polytechnique, polsys, lip6" />

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="style.css" rel="stylesheet" type="text/css" />
        `;
    }
}

customElements.define('head-component', Head);