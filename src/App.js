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

    render() {
        console.log(this.state);
        return (
            <Router>
                <div>
                    <h2>App</h2>
                    <Menu posts={this.state.postList}/>
                    <Switch>
                        <Route exact path={'/'}
                               render={() => <BlogPage/>}
                        />
                        <Route exact path={'/posts/:id'}
                               render={({match}) => <PostPage id={match.params.id}/>}
                        />
                    </Switch>

                </div>
            </Router>
        );
    }
}