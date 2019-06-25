const posts = [
        {id: '1', title: 'Title 1'},
        {id: '2', title: 'Title 2'},
        {id: '3', title: 'Title 3'},
    ]

const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

export default class Api {
    async getPosts() {
        return await {posts}
    }

    async getPost(id) {
        await delay(2000);
        return await {id, title: `Title ${id}`, body: `Post body ${id}`}
    }
}