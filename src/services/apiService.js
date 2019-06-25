const posts = [
        {id: '1', title: 'Title 1'},
        {id: '2', title: 'Title 2'},
        {id: '3', title: 'Title 3'},
    ]

export default class Api {
    async getPosts() {
        return await {posts}
    }

    async getPostDetails(id) {
        return await {body: `Post body ${id}`}
    }
}