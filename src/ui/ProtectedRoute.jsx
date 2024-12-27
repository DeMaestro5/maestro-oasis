import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1) load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2) if the user is not authenticated, redirect to the login page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3) show spinner while loading the authenticated user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4) if the user is authenticated, show the children(render the app)
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
