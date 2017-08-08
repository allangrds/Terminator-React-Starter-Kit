import alt from '../alt';

class PostsAction {
    requestBeanList() {
        const actionDispatcher = this;

        actionDispatcher.dispatch();

        console.log("requested posts - action");
    }
}

module.exports = alt.createActions(PostsAction);
