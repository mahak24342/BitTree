import React from 'react'
import {RxCross2} from 'react-icons/rx'
import { AiOutlineUpload } from 'react-icons/ai'
const Page = () => {
  return (
    <div>
<div className='flex gap-2 border-b-gray-200 border-2 p-3'>
    <div className='p-2 pt-1'>
        <button ><RxCross2 size={20} /></button>
    </div>
<h2 className='text-xl font-semibold'>Brand Page Information</h2>

<button className='bg-yellow-50 text-yellow-600 rounded-xl p-2 text-sm h-8 flex w-24 items-center justify-center '>Verify KYC</button>
</div>

<div className='flex md:flex-row p-5 md:gap-24 flex-col gap-5'>
<div className='p-5'>
<div className='flex flex-row gap-4 items-start'>
    <div className='rounded-full bg-gray-100 p-1 border-b-2 gap-5 flex flex-col items-center'>
        <div className='rounded-full bg-[#FF2358] text-white w-8 h-8 flex items-center justify-center'>1</div>
        <div className='rounded-full bg-[#FF2358] w-3 h-3 flex items-center justify-center'></div>
        <div className='rounded-full bg-gray-200 w-3 h-3 flex items-center justify-center'></div>
        <div className='rounded-full bg-gray-200 w-3 h-3 flex items-center justify-center'></div>
        <div className='rounded-full bg-gray-400 text-white w-8 h-8 flex items-center justify-center'>2</div>
        <div className='rounded-full bg-gray-400 text-white w-8 h-8 flex items-center justify-center'>3</div>
    </div>

    <div className='flex flex-col gap-4 pt-2'>
        <h2>Verify your Business</h2>
        <h2>GST Certificate</h2>
        <h2>Incorporation Details</h2>  
        <h2>CIN Verification</h2>
        <h2>KYC of Director</h2>
        <h2>Add Team</h2>
    </div>
</div>


</div>

<div className='p-5'> 

<h2 className='text-3xl'>Enter KYC Details</h2>
<h2 className='p-1 pt-2  text-base font-inter '>This information to verify your identity and keep your  <br/>account safe</h2>
<div className='pt-10 flex flex-col gap-8'>
  <div className=''>
  <h2 className='pb-3 '>Incorporation Certificate Number </h2>
  <input
    placeholder='Enter yourIncorporation Certificate Number'
    className='border-2 border-gray-200 p-2 rounded-xl w-full '
/>
</div>
<div className='flex flex-col gap-2 '>
<div className='flex flex-col p-4 gap-3 '>

      <h2>Upload Incorporation Certificate</h2>  
     <div className='border-2 w-full border-gray-200 border-dashed rounded-xl p-4 flex flex-col items-center max-w-md'>
   
       <label className='flex  flex-col items-center cursor-pointer'>
         <input
           type='file'
           accept='image/*'
           className='hidden ' // Hide the default file input
           />
         <div className='  bg-gray-100 p-3 rounded-full w-full text-center'>
           <AiOutlineUpload className='text-gray-500 mb-2' size={24} />
         
         </div>
       </label>

       <div className='text-center mt-4'>
         <h2 className='text-lg mb-2'>Drop your files here, or <a className='border-b-2 border-[#FF2358] text-[#FF2358]'>Click to Upload </a></h2>
         <p className='text-gray-500'>recommended max size 5MB each</p>
       </div>
     </div>
     
     
   </div>
<div>
<div className='flex flex-col  p-4 gap-3'>
<h2>Upload Business PAN</h2>
     <div className='border-2 border-gray-200 border-dashed rounded-xl p-4 flex flex-col items-center w-full max-w-md'>
       <label className='flex flex-col items-center cursor-pointer'>
         <input
           type='file'
           accept='image/*'
           className='hidden' // Hide the default file input
           />
         <div className='  bg-gray-100 p-3 rounded-full w-full text-center'>
           <AiOutlineUpload className='text-gray-500 mb-2' size={24} />
         
         </div>
       </label>

       <div className='text-center mt-4'>
         <h2 className='text-lg mb-2'>Drop your files here, or <a className='border-b-2 border-[#FF2358] text-[#FF2358]'>Click to Upload </a></h2>
         <p className='text-gray-500'>recommended max size 5MB each</p>
       </div>
     </div>
     
   
   </div>
</div>
 <div>
 <div className='flex flex-col  p-4 gap-3'>
 <h2>Upload GST Certificate</h2>
     <div className='border-2 border-gray-200 border-dashed rounded-xl p-4 flex flex-col items-center w-full max-w-md'>
       <label className='flex flex-col items-center cursor-pointer'>
         <input
           type='file'
           accept='image/*'
           className='hidden' // Hide the default file input
           />
         <div className='  bg-gray-100 p-3 rounded-full w-full text-center'>
           <AiOutlineUpload className='text-gray-500 mb-2' size={24} />
         
         </div>
       </label>

       <div className='text-center mt-4'>
         <h2 className='text-lg mb-2'>Drop your files here, or <a className='border-b-2 border-[#FF2358] text-[#FF2358]'>Click to Upload </a></h2>
         <p className='text-gray-500'>recommended max size 5MB each</p>
       </div>
     </div>
     
     </div>
   </div>
 </div>
 <div className='flex flex-col gap-2'>
  <button className='bg-[#FF2358] text-white w-full p-2 rounded-xl '>Continue</button>
  <button className='text-gray-400' >Skip for now</button></div>
</div>
</div>
</div>

    </div>
  )
}

export default Page