import s from './Message.module.css';
import { MessageType } from '../HW1';
import { styled } from 'styled-components';

export type MessagePropsType = {
  message: MessageType;
};

const Message = (props: MessagePropsType) => {
  return (
    <StyledMessage id={'hw1-message-' + props.message.id} className={s.message}>
      <StyledMessageBlock className={s.imageAndText}>
        <StyledAvatar
          id={'hw1-avatar-' + props.message.id}
          src={props.message.user.avatar}
        />
        <StyledText className={s.text}>
          <StyledName id={'hw1-name-' + props.message.id} className={s.name}>
            {props.message.user.name}
          </StyledName>
          <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
            {props.message.message.text}
          </pre>
        </StyledText>
      </StyledMessageBlock>
      <StyledTime id={'hw1-time-' + props.message.id} className={s.time}>
        {props.message.message.time}
      </StyledTime>
    </StyledMessage>
  );
};
export default Message;

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

const StyledMessageBlock = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
`;

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
`;

const StyledText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  padding: 13px 10px;
  background-color: #06c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledName = styled.div`
  align-self: flex-end;
  font-weight: 600;
  font-size: 18px;
`;

const StyledTime = styled.span`
  font-weight: 600;
  font-size: 10px;
  color: #000;
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 3px;
`;
