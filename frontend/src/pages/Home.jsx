
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = isLoggedIn ? `${authState.user.name}'s tasks` : 'Task Manager';
  }, [authState, isLoggedIn]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <div className="bg-indigo-100 max-h-screen flex flex-col items-center justify-center text-center mt-60">
          <h1 className=" py-2 text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Welcome To Task Manager</h1>
          <p className="text-xl text-gray-600 mt-4">
            You can arrange and manage your tasks here.<br />
            What are you waiting for? Start now!
          </p>
          <Link to="/signup" className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600">
            Join now to manage your tasks
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">Welcome {authState.user.name}</h1>
          <Tasks />
        </>
      )}
    </MainLayout>
  );
};

export default Home;