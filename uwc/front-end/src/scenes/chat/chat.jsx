import { PrettyChatWindow } from "react-chat-engine-pretty";
import '../../components/Login/./login.css';

const ChatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;