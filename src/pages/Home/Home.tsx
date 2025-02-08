import { useEffect, useState } from 'react';
import Modal from '@components/Modal/Modal';
import Image from '@components/Image/Image';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <div>
      <h1>Welcome to Redux App</h1>
      <p>Use the navbar to navigate.</p>
      <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Image />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hello!">
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  );
};

export default Home;
