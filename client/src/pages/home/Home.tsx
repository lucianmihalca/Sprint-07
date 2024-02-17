// snippet rafce

import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">
      <Sidebar />
      {/* <MessageContainer /> */}
      <MessageContainer />
    </div>
  );
};

export default Home;
