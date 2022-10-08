import { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Review = ({ datas }) => {
  const [index, setIndex] = useState(0);
  const clickForward = () => {
    if (index < datas.length - 1) {
      setIndex(index + 1);
    }
  };
  const clickBackWard = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className='flex flex-col shadow-2xl bg-white w-96 p-4 mt-4'>
      <div className='flex flex-col justify-center items-center'>
        <img
          src={datas[index].image}
          alt={datas[index].name}
          className='rounded-full w-48 h-40 mb-2'
        />
        <div className='font-bold font-mono capitalize text-xl pt-2'>
          {datas[index].name}
        </div>
        <div className='font-bold font-mono text-blue-400 capitalize text-xl '>
          {datas[index].job}
        </div>
        <div>{datas[index].text}</div>
      </div>
      <div className='flex justify-center items-center mt-2'>
        <div>
          <FiArrowRight
            className='mr-4 w-16 h-8 text-blue-400 cursor-pointer'
            onClick={clickForward}
          />
        </div>
        <div>
          <FiArrowLeft
            className='ml-4 w-16 h-8 text-blue-400 cursor-pointer'
            onClick={clickBackWard}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
