import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplates implements DOMList{
    ul: HTMLUListElement;

    static instance: ListTemplates = new ListTemplates();

    constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement;
    }

    clear() {
       this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement;
            li.className = "item";
            
            const input = document.createElement("input") as HTMLInputElement;
            input.type = "checkbox";
            input.id = item.id;
            input.checked = item.checked;
            li.append(input);

            input.addEventListener('change', () => {
                item.checked = !item.checked;
                fullList.save();
            })
            
            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);

            const button = document.createElement("button") as HTMLButtonElement;
            button.className = "button";
            button.textContent = 'X';
            li.append(button);
            
            button.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            })

            this.ul.append(li);
        })
    }

}