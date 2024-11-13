"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Generate = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [handle, setHandle] = useState(searchParams.get('handle'));
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // States for links
  const [link1, setLink1] = useState("");
  const [linkText1, setLinkText1] = useState("");
  const [link2, setLink2] = useState("");
  const [linkText2, setLinkText2] = useState("");
  const [link3, setLink3] = useState("");
  const [linkText3, setLinkText3] = useState("");

  const submitLinks = async () => {
    setIsLoading(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "link1": link1,
      "linkText1": linkText1,
      "link2": link2,
      "linkText2": linkText2,
      "link3": link3,
      "linkText3": linkText3,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("http://localhost:3000/api/generate", requestOptions);
      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          router.push(`/${handle}`);
        }, 1500);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className="col1 flex justify-center items-center flex-col text-gray-900 px-4 py-8">
        <div className='flex flex-col gap-5 w-full max-w-xl'>
          <h1 className='font-bold text-4xl text-center text-pink-600'>Create your Bittree</h1>

          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
            <input 
              value={handle || ""} 
              onChange={e => setHandle(e.target.value)} 
              className='px-4 py-2 my-2 w-full focus:outline-pink-500 rounded-full shadow-lg'
              type="text" 
              placeholder='Choose a Handle' 
            />
          </div>

          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className='space-y-2'>
                  <input 
                    value={eval(`linkText${i}`)} 
                    onChange={e => eval(`setLinkText${i}`)(e.target.value)} 
                    className='px-4 py-2 w-full focus:outline-pink-500 rounded-full shadow-lg'
                    type="text" 
                    placeholder={`Enter link text ${i}`} 
                  />
                  <input 
                    value={eval(`link${i}`)} 
                    onChange={e => eval(`setLink${i}`)(e.target.value)} 
                    className='px-4 py-2 w-full focus:outline-pink-500 rounded-full shadow-lg'
                    type="text" 
                    placeholder={`Enter link ${i}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
            <div className='space-y-4'>
              <input 
                value={pic || ""} 
                onChange={e => setPic(e.target.value)} 
                className='px-4 py-2 w-full focus:outline-pink-500 rounded-full shadow-lg'
                type="text" 
                placeholder='Enter link to your Picture' 
              />
              <input 
                value={desc || ""} 
                onChange={e => setDesc(e.target.value)} 
                className='px-4 py-2 w-full focus:outline-pink-500 rounded-full shadow-lg'
                type="text" 
                placeholder='Enter description' 
              />
              <button 
                disabled={pic === "" || handle === "" || link1 === "" || linkText1 === ""} 
                onClick={submitLinks} 
                className='disabled:bg-gray-500 p-3 py-2 w-full bg-pink-500 text-white font-bold rounded-3xl shadow-lg'>
                  {isLoading ? "Creating..." : "Create your BitTree"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col2 w-full bg-[#E9C0E9] flex justify-center items-center px-4">
        <img className='h-full w-full object-cover max-w-xl' src="https://static.onepage.io/frontpage-cms/medium2x_Cover_create_linktree_online_onepage_903c4742fb.png" alt="Generate your links" />
      </div>

      <ToastContainer />
    </div>
  );
}

export default Generate;
