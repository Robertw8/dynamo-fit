import { useEffect } from 'react';
import { useAuth } from '../hooks';

import { ContainerAuth, SignUp } from '../components';
import { callToast } from '../helpers';

const SignUpPage: React.FC = () => {
  const { isRefreshing, error } = useAuth();

  useEffect(() => {
    if (isRefreshing || error === 'Unable to get current user') {
      const timeout = setTimeout(() => {
        callToast(
          'loading',
          'If you are experiencing a long load time, please wait, our servers go into hibernation when not in use for a long time and need time to get up and running.',
          10000
        );
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isRefreshing, error]);

  return (
    <ContainerAuth>
      <SignUp />
    </ContainerAuth>
  );
};

export default SignUpPage;
