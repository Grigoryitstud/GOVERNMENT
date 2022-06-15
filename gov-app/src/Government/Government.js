import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import s from './Government.module.css';



const Government = (props) => {
  let ourPosts = props.posts.map( post => <li className={s.nav__link}>< Link to={post.li}>{post.name}</Link> </li> );
  return (
    <div className={s.intro}>

      <ul className={s.nav}>
      {ourPosts}
      </ul>

    </div>
  );
}

export default Government;