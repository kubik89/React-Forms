export class PostService {
    _url = 'https://jsonplaceholder.typicode.com';

    getAllPosts() {
        return fetch(`${this._url}/posts`).then(value => value.json())
    }
    getSomePost(id) {
        return fetch(`${this._url}/posts/${id}`).then(value => value.json())
    }
}
