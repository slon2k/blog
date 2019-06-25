import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import Menu from './components/Menu'
import Api from './services/apiService'

export default class App extends React.Component {

    state = {
        postList: [],
        posts: {}
    }

    api = new Api();

    componentWillMount() {
        this.api.getPosts().then(result => this.setState({postList: result.posts}))
    }

    loadPost = (id) => {
        console.log(`Loading post with id: ${id}`)
        const {posts} = this.state;
        this.api.getPost(id)
            .then((result) => {
                posts[id] = result;
                this.setState({posts})
            })
    }


    render() {
        const {posts, postList} = this.state;
        return (
            <Router>
                <div>
                    <Menu posts={postList}/>
                    <Switch>
                        <Route exact path={'/'}
                               component={BlogPage}
                        />
                        <Route exact path={'/posts/:id'}
                               render={({match}) =>
                                   <PostPage id={match.params.id}
                                             key={match.params.id}
                                             loadPost={this.loadPost}
                                             post={posts[match.params.id]}
                                   />}
                        />
                    </Switch>

                </div>
            </Router>
        );
    }
}