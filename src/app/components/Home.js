import React, {Component} from 'react';
import styles from './Home.scss';
import PostAction from '../flux/actions/PostAction';
import Teste from '../flux/actions/Teste';

export default class Home extends Component {
  componentDidMount() {
    PostAction.requestBeanItem();
  }

  render(){
    return (
      <h1 className={styles.highlight}>Home 2</h1>
    );
  }
}
