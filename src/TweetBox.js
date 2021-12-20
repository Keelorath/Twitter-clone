import {Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetBox.css"


function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://www.google.com/search?q=tf2+heavywtf+face&tbm=isch&ved=2ahUKEwj8gdK8xfL0AhUTIMUKHW0sDS0Q2-cCegQIABAA&oq=tf2+heavywtf+face&gs_lcp=CgNpbWcQA1CBBVijDmDQEmgBcAB4AIABfogB_gKSAQMzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=AY3AYbz9H5PAlAbt2LToAg&bih=931&biw=958#imgrc=xDv1Uk7kmMXmSM"></Avatar>
                    <input placeholder="What's happening?"></input>

                </div>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
