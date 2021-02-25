import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Sarah'
        message='Hey! how are you'
        timestamp='35 minutes ago'
        profilePic='https://www.milbank.com/images/content/1/0/v1/108076/Resch-Sarah-FFM-OFFICE.jpg'
      ></Chat>
      <Chat
        name='Ellen'
        message="what's up?"
        timestamp='55 minutes ago'
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg'
      ></Chat>
      <Chat
        name='Sandra'
        message='Ola'
        timestamp='3 days ago'
        profilePic='https://assets.ltkcontent.com/images/14335/18161.iStock_000017525602_sandraBullock_bb5fe86e71.jpg'
      ></Chat>
      <Chat
        name='Natasha'
        message='Oops, sorry bout that'
        timestamp='1 week ago'
        profilePic='http://www.natashamago.com/wp-content/uploads/2019/03/Final-Version-1-3R2A3707-e1553383452450.jpg'
      ></Chat>
    </div>
  );
}

export default Chats;
