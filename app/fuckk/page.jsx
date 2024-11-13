"use client"
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  useEffect(() => {
    toast("Page Loaded Successfully!");
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ToastContainer />
    </div>
  );
};

export default Page;
