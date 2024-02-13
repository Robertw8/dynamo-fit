import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useExercises } from '../../../hooks';

import {
  AddButton,
  BtnWrapper,
  CardLabel,
  ExercisesTitleBox,
  List,
  ListItem,
  ListItemValue,
  SpanExerciseRun,
  Title,
  WaistItemLi,
} from './WaistItem.styled';
import { AddExerciseModal } from '../AddExerciseModal';
import { ExerciseAddedModal } from '../ExercisesAddedModal';
import { Icon } from '../..';

import { setBurnedCalories, type Exercise } from '../../../redux/exercises';
import type { AppDispatch } from '../../../redux';

interface List {
  burnedCalories: string;
  bodyPart: string;
  target: string;
}

interface Texts {
  cardLabel: string;
  btnLabel: string;
  list: List;
}

const texts: Texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};

interface WaistProps {
  exercise: Exercise;
}

const WaistItem: React.FC<WaistProps> = ({ exercise }) => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { burnedCalories } = useExercises();

  useEffect(() => {
    if (burnedCalories && isFirstModalOpen) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
    }
  }, [burnedCalories, isFirstModalOpen]);

  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
    dispatch(setBurnedCalories(0));
  };

  return (
    <>
      <WaistItemLi>
        <BtnWrapper>
          <CardLabel>{texts.cardLabel}</CardLabel>
          <AddButton type="text" onClick={() => setIsFirstModalOpen(true)}>
            Add
            <Icon
              name="arrow-secondary"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              stroke={'#e6533c'}
            />
          </AddButton>
        </BtnWrapper>
        <ExercisesTitleBox>
          <SpanExerciseRun>
            <Icon
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              iconHeight={{ mobile: '16px', tablet: '16px' }}
              name="running"
              fill="#EFEDE8"
            />
          </SpanExerciseRun>
          <Title>{exercise.name}</Title>
        </ExercisesTitleBox>
        <List>
          <ListItem>
            {texts.list.burnedCalories}
            <ListItemValue>{exercise.burnedCalories}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.bodyPart}
            <ListItemValue>{exercise.bodyPart}</ListItemValue>
          </ListItem>
          <ListItem>
            {texts.list.target}
            <ListItemValue>{exercise.target}</ListItemValue>
          </ListItem>
        </List>
      </WaistItemLi>
      <AddExerciseModal
        open={isFirstModalOpen}
        exercise={exercise}
        onCancel={() => setIsFirstModalOpen(false)}
      />
      <ExerciseAddedModal
        open={isSecondModalOpen}
        handleClose={handleSecondModalClose}
      />
    </>
  );
};

export default WaistItem;
export type { WaistProps };
