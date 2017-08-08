import PostAction from '../actions/PostAction';
import alt from '../alt';

class PostsStore {
    constructor() {
        this.bindActions(PostAction);

        this.loadingBeanList = false;
        this.beanList = [];
    }

    onRequestBeanList() {
        console.log("onRequestBeanList store");
        this.loadingBeanList = true;
    }

    _init(rawList = 'rawList value') {
        console.log("_init store");
        this.beanList = rawList;
    }
}

module.exports = alt.createStore(PostsStore);
