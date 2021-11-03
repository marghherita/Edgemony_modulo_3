const btn = document.querySelector('#btn');

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');
    render(list, data);
});

    const render = (container, items) => {
        const elements = items.map((element) => {
            if (element.completed === true) {
                return ` <input type="checkbox" id="completed" name="completed" checked>
                         <label id="title" for="completed">${element.title}</label>`
            } else {
                return ` <input type="checkbox" id="completed" name="completed">
                         <label id="title" for="completed">${element.title}</label>`
            }
        }

        );

        const output = elements.join('');

        btn.addEventListener("click", () => {
            elements.pop('')
            const output = elements.join('');
            container.innerHTML = output;
        });

        container.innerHTML = output;

    };

