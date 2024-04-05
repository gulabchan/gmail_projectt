import { useState, useEffect } from 'react';
import ThemeToggle from "./ThemeToggle";
import { message } from 'antd';

export default function App() {
  const [showReplyBox, setShowReplyBox] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'D' || event.keyCode === 68) {
        // Call your delete function here
        console.log('Item deleted');
         message.info('Item Deleted')
      } else if (event.key === 'R' || event.keyCode === 82) {

        setShowReplyBox(!showReplyBox);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <ThemeToggle />
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        Hello World
        {showReplyBox && <ReplyBox />}
      </div>
    </>
  );
}

function ReplyBox() {
  const  replyHandler=()=>{
      message.info('Reply Box')
  }
  return <div
  onClick={()=>{
    replyHandler()
  }}
  className=' cursor-pointer'
  >Reply Box</div>;
}