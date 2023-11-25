/**
 * Classe Node representa um nó de uma lista encadeada utilizada para implementar a pilha.
 * @class
 * @param {any} value - O valor armazenado no nó.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Classe Stack representa uma pilha implementada usando uma lista encadeada.
 * @class
 */
class Stack {
    constructor() {
        this.top = null;
    }

    /**
     * Adiciona um novo elemento à pilha.
     * @param {any} value - O valor a ser adicionado à pilha.
     */
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.displayStack();
        this.highlightTop("push");
    }

    /**
     * Remove o elemento do topo da pilha.
     */
    pop() {
        if (!this.top) {
            alert("A pilha está vazia");
            return;
        }
        this.highlightTop("pop");
        this.top = this.top.next;
        this.displayStack();
    }

    /**
     * Retorna o valor do elemento no topo da pilha sem removê-lo.
     */
    peek() {
        if (!this.top) {
            alert("A pilha está vazia");
            return;
        }
        alert(`Topo da pilha: ${this.top.value}`);
    }

    /**
     * Verifica se a pilha está vazia.
     * @returns {boolean} - Retorna true se a pilha estiver vazia, senão false.
     */
    isEmpty() {
        return !this.top;
    }

    /**
     * Retorna o tamanho atual da pilha.
     */
    size() {
        let size = 0;
        let current = this.top;
        while (current) {
            size++;
            current = current.next;
        }
        alert(`Tamanho da pilha: ${size}`);
    }

    /**
     * Atualiza a representação visual da pilha no HTML.
     */
    displayStack() {
        const stackRepresentation = document.getElementById("stackRepresentation");
        stackRepresentation.innerHTML = "";

        let current = this.top;
        while (current) {
            const nodeElement = document.createElement("div");
            nodeElement.innerText = current.value;
            stackRepresentation.appendChild(nodeElement);
            current = current.next;
        }
    }

    /**
     * Realça visualmente o elemento no topo da pilha com uma cor específica.
     * @param {string} action - A ação que está ocorrendo (push ou pop).
     */
    highlightTop(action) {
        const stackRepresentation = document.getElementById("stackRepresentation");
        const topElement = stackRepresentation.firstChild;

        if (action === "push") {
            topElement.style.backgroundColor = 'lightgreen'; // Cor para push
        } else if (action === "pop") {
            topElement.style.backgroundColor = 'lightcoral'; // Cor para pop
        }
    }
}

// Instância da pilha
const stack = new Stack();

function handleKeyPress(event) {
    // Manipula o evento de pressionar tecla na caixa de texto
    const elementInput = document.getElementById("elementInput");
    const elementValue = elementInput.value;

    if (event.key === "Enter" && elementValue !== "") {
        // Verifica se a tecla pressionada é Enter e o valor da caixa de texto não está vazio
        if (event.ctrlKey) {
            // Se a tecla Ctrl estiver pressionada, chama a função pop
            stack.pop();
        } else {
            // Senão, chama a função push
            stack.push(elementValue);
        }

        elementInput.value = "";
        elementInput.focus(); // Foca na caixa de texto após a operação
    }
}

// Adiciona um ouvinte de evento de tecla à caixa de texto
document.getElementById("elementInput").addEventListener("keypress", handleKeyPress);

/**
 * Função chamada quando o botão "Push" é clicado.
 * Obtém o valor do elemento de entrada e chama a função push na pilha.
 */
function pushElement() {
    const elementInput = document.getElementById("elementInput");
    const elementValue = elementInput.value;
    if (elementValue !== "") {
        stack.push(elementValue);
        elementInput.value = "";
        elementInput.focus(); // Foca na caixa de texto após a operação push

    }
}

/**
 * Função chamada quando o botão "Pop" é clicado.
 * Chama a função pop na pilha.
 */
function popElement() {
    stack.pop();
    const elementInput = document.getElementById("elementInput");
    elementInput.focus(); // Foca na caixa de texto após a operação pop
}

/**
 * Função chamada quando o botão "Peek" é clicado.
 * Chama a função peek na pilha.
 */
function peekElement() {
    stack.peek();
}

/**
 * Função chamada quando o botão "isEmpty" é clicado.
 * Exibe um alerta indicando se a pilha está vazia ou não.
 */
function isEmpty() {
    alert(`A pilha está vazia? ${stack.isEmpty()}`);
}

/**
 * Função chamada quando o botão "Size" é clicado.
 * Chama a função size na pilha e exibe o tamanho atual da pilha.
 */
function getSize() {
    stack.size();
}
