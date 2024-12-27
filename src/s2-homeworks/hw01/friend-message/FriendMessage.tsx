import s from './FriendMessage.module.css';
import { MessagePropsType } from '../message/Message';
import { styled } from 'styled-components';

const FriendMessage = (props: MessagePropsType) => {
  return (
    <StyledFriendMessage
      id={'hw1-friend-message-' + props.message.id}
      className={s.friendMessage}
    >
      <StyledFriendMessageBlock className={s.friendImageAndText}>
        <StyledFriendAvatar
          id={'hw1-friend-avatar-' + props.message.id}
          src={props.message.user.avatar}
        />
        <StyledFriendText className={s.friendText}>
          <StyledFriendName
            id={'hw1-friend-name-' + props.message.id}
            className={s.friendName}
          >
            {props.message.user.name}
          </StyledFriendName>
          <pre
            id={'hw1-friend-text-' + props.message.id}
            className={s.friendMessageText}
          >
            {props.message.message.text}
          </pre>
        </StyledFriendText>
      </StyledFriendMessageBlock>
      <StyledTime
        id={'hw1-friend-time-' + props.message.id}
        className={s.friendTime}
      >
        {props.message.message.time}
      </StyledTime>
    </StyledFriendMessage>
  );
};

export default FriendMessage;

const StyledFriendMessage = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledFriendMessageBlock = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledFriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
`;

const StyledFriendText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
  padding: 13px 10px;
  background-color: #f5f7fb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledFriendName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const StyledTime = styled.span`
  margin-left: 10px;
  font-weight: 600;
  font-size: 10px;
  color: #000;
`;
