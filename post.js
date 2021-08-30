const postList = [];

//1
const btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    const authorInput = document.getElementById('authorInput');
    const author = authorInput.value;
    
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
    let id = s4();
    const post = new Post(message, author, id);
    postList.push(post);

    render();
});
//2
function render() {
    const contentElemnt = document.getElementById('content');
    contentElemnt.innerHTML = '';
    for(let i=0; i< postList.length; i++) {
        const html = postList[i].generateHTML();
        contentElemnt.appendChild(html);
    }
}

// 3
class Post {
    constructor(message, author, id) {
        this.message = message;
        this.author = author;
        this.date = new Date();
        this.id = id;
    }

    generateHTML() {
        const container = document.createElement('div');
        const mainP = document.createElement('p');
        const bottomP = document.createElement('p');
        const deleteBtn = document.createElement('button');
        mainP.innerText = this.message;
        bottomP.innerText = this.author + ' ' + this.date;
        deleteBtn.innerText = 'delete';
        container.appendChild(mainP);
        container.appendChild(bottomP);
        container.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            for(let i=0; i< postList.length; i++) {
                if (this.id === postList[i].id) {
                    postList.splice(i, 1);
                    return render();
                }
            }
        })


       return container;
       
    }
}