import { Typography } from '@material-tailwind/react';
import useContestServices from '../../../ViewModel/ContestViewModel/ContestServices';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const TABLE_HEAD = ["#", "Name", "Position", "Accuracy", "WPM", "Consistency"];



const PostionLeaderBoard = () => {


  const params = useParams()
  const {gettingLeaderBoardData,contestLeaderBoard} = useContestServices()

  useEffect(()=>{
    gettingLeaderBoardData(params.id)
  },[])

  return ( 
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <span className='text-text text-[25px] font-semibold'>Position Leaderboard</span>  
      </div>
      <div className='h-[2px] bg-white'></div>
      <div>
        <table className="w-full min-w-max table-auto text-left rounded-tl-lg rounded-tr-lg">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="bg-mainColor p-4"
                >
                  <Typography
                    variant="small"
                    className="font-semibold text-container"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              contestLeaderBoard?.map((ele,i)=>(
                <tr key={ele.id}>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-text text-[16px]"
                    >
                      {i+1}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-text text-[16px]"
                    >
                      {ele.user}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-text text-[16px]"
                    >
                      {ele.position}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {ele.accuracy}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {ele.wpm}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {ele.consistency}
                    </Typography>
                  </td>
                  <td className="bg-container p-4 border border-paraColor">
                    <Typography
                      variant="small"
                      className="font-semibold text-paraColor text-[16px]"
                    >
                      {/* {ele.date} */}
                    </Typography>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PostionLeaderBoard