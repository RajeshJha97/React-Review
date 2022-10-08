import { FiAlertOctagon } from 'react-icons/fi';
import Review from './component/Review';
import datas from './data';

function App() {
  return (
    <div className='flex flex-col justify-center items-center overflow-y-auto h-full'>
      <div className='mt-40'>
        <h1 className='text-3xl'>Our Reviews</h1>
      </div>
      <div>
        <div className='bg-blue-500 h-1 w-[120px]'></div>
      </div>
      <Review datas={datas} />
    </div>
  );
}

export default App;
