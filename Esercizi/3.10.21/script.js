const btn = document.querySelector('#btn');

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');
    render(list, data);
});

    const render = (container, items) => {
        const elements = items.map((element) => {
            if (element.completed === true) {
                return `<li> 
                            <input type="checkbox" id="completed" name="completed" checked>
                            <label id="title" for="completed">${element.title}</label> 
                        </li>`
            } else {
                return `<li>
                            <input type="checkbox" id="completed" name="completed">
                            <label id="title" for="completed">${element.title}</label> 
                        </li>`
            }
        }

        );

        const content = elements.join('');

        btn.addEventListener("click", () => {
            elements.pop('')
            const content = elements.join('');
            container.innerHTML = content;
        });

        container.innerHTML = content;

    };