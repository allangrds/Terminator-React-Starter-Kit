/* @flow */
import PostsAction from '../actions/PostsAction';
import alt from '../alt';

class PostsStore {
    posts: string;
    bindActions: PostsAction;

    constructor() {
      this.bindActions(PostsAction);
    }

    onRequestPosts(variable : string){
      this.posts = variable;
    }
}

module.exports = alt.createStore(PostsStore);
