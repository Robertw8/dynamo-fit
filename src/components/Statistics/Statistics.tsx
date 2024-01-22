import React from 'react';
import { Card, Col, Statistic, Space, Avatar, Flex } from 'antd';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader/Loader';

const { Meta } = Card;

// Statistics
import {
  getStatistics,
  selectStatistics,
  selectIsLoading,
  selectError,
} from '../../redux/statistics';

const Statistics: React.FC = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const {
    totalVideo,
    totalUsersCalories,
    totalUsers,
    totalTrainingHoursUsers,
    totalTrainingUsers,
  } = statistics;

  console.log(statistics);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  return (
    <>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Flex justify="end">
          <Card size="small" style={{ width: 215, height: 70 }}>
            <Meta
              avatar={
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/YouTube_Diamond_Play_Button.png/1200px-YouTube_Diamond_Play_Button.png" />
              }
              title={totalVideo + '+'}
              description="Video tutorial"
            />
          </Card>
        </Flex>
        <Flex justify="end">
          <Card size="small" style={{ width: 215, height: 70 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={totalUsersCalories + ' cal'}
              description="Calories burned"
            />
          </Card>
        </Flex>
        <Flex justify="end">
          <Card size="small" style={{ width: 215, height: 70 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={totalUsers + ' users'}
              description="Registered users"
            />
          </Card>
        </Flex>
        <Flex justify="end">
          <Card size="small" style={{ width: 215, height: 70 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={totalTrainingHoursUsers + ' hours'}
              description="Total training time"
            />
          </Card>
        </Flex>
        <Flex justify="end">
          <Card size="small" style={{ width: 215, height: 70 }}>
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={totalTrainingUsers + ' users'}
              description="Training user count"
            />
          </Card>
        </Flex>
      </Space>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default Statistics;
