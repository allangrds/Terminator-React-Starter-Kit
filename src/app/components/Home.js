import React, {Component} from 'react';
import styles from './Home.scss';
import PostsAction from '../flux/actions/PostsAction';
import PostsStore from '../flux/stores/PostsStore';
import Teste from '../flux/actions/Teste';

export default class Home extends Component {
  componentDidMount() {
    PostsAction.requestBeanList();
    setTimeout(function(){ console.log(PostsStore); }, 3000);
  }

  render(){
    return (
      <h1 className={styles.highlight}>Home 2</h1>
    );
  }
}
