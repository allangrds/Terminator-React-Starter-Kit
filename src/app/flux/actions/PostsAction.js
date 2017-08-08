import alt from '../alt';

class PostsActions {
    requestBeanList() {
        const actionDispatcher = this;

        actionDispatcher.dispatch();

        console.log("requested posts - action");
    }
}

module.exports = alt.createActions(PostsActions);
