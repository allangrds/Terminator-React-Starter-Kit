import React, {Component} from 'react';
import styles from './Home.scss';
import PostsActions from '../flux/actions/PostsActions';
import Teste from '../flux/actions/Teste';

export default class Home extends Component {
  componentDidMount() {
    PostsActions.requestBeanItem();
  }

  render(){
    return (
      <h1 className={styles.highlight}>Home 2</h1>
    );
  }
}
