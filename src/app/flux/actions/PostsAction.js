import alt from '../alt';

class PostsAction {
    requestBeanList() {
        const actionDispatcher = this;

        console.log("requested posts - action");

        return 'valor da variável';
    }
}

module.exports = alt.createActions(PostsAction);
