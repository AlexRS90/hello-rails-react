import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../redux/regardReducer';

const Greeting = () => {
  const regards = useSelector(state => state.message)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);
  return (
    <>
      <p>{regards.title}</p>
    </>
  );
}

export default Greeting;