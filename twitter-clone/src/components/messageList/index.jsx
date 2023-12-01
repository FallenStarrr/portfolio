import React from 'react'
import PropTypes from 'prop-types'

import Message from '../message'
import styles from './styles.css'


const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
  }


  function MessageList({ messages, onRetweet, onFavorite, onReplyTweet }) {
    
  }
