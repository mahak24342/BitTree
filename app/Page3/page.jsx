'use client'
import React from 'react'
import {RxCross2} from 'react-icons/rx'
import { useRouter } from 'next/navigation'
const Page = () => {
    const router=useRouter();
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
<div className='pt-10 flex flex-col '>
  <div className=''>
  <h2 className='pb-3 font-semibold'>GST Number</h2>
  <input
    placeholder='Enter your GST number'
    className='border-2 border-gray-200 p-2 rounded-xl w-full '
/>
</div>

<div className='flex md:flex-row flex-col bg-gray-100 rounded-xl p-5 mt-5 gap-5'>
    <div className='flex flex-col gap-3 '>
<div>
<h2 className='text-gray-400'>GSTIN</h2>
<h2>023248294894</h2>
</div>
<div>
<h2  className='text-gray-400'>BUSINESS LEGAL NAME</h2>
<h2>XYX Company pvt ltd</h2>
</div>

<div>
<h2 className='text-gray-400'>Location</h2>
<h2>Alambag,Lucknow ,203809</h2>
</div>
    </div>
<div className='flex flex-col gap-5'>

<div>
<h2 className='text-gray-400'>DATE OF REGISTRATION</h2>
<h2>01/01/2017</h2>

</div>
<div>
<h2 className='text-gray-400'>STATUS</h2>
<h2>ACTIVE</h2>
</div>
</div>
</div>


<div className='flex flex-col gap-3 mt-5'>
  <button onClick={()=>router.push('/Page4')} className='bg-[#FF2358] text-white w-full p-2 rounded-xl '>Confirm your business</button>
  <button className='text-gray-400' >Its not your business?</button></div>
</div>
</div>
</div>

    </div>
  )
}

export default Page