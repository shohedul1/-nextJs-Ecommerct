'use client';

import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { UploadButton } from '@/utils/uploadthing';
import axios from 'axios';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react'

export interface IProduct {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  price: string;
  category: string;
}

const ProdcutFrom = () => {

  const [payload, setPayload] = useState<IProduct>({
    imgSrc: null,
    fileKey: null,
    name: "",
    price: "",
    category: ""
  });


  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios.post("/api/add_product", payload)
      .then(res => {
        console.log(res);
        setPayload({
          imgSrc: null,
          fileKey: null,
          name: "",
          price: "",
          category: ""
        })
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(setLoading(false)));


  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <Image className='max-h-[300px] w-auto object-contain rounded-md'
        src={payload.imgSrc ? payload.imgSrc : "/Group.png"}
        width={800}
        height={500}
        property="true"
        priority
        alt='Product_image'
      />
      <UploadButton
        endpoint='imageUploader'
        onClientUploadComplete={(res) => {
          console.log(res)

          setPayload({
            ...payload,
            imgSrc: res[0]?.url,
            fileKey: res[0]?.key,
          });
        }}
        onUploadError={(error: Error) => {
          console.log(`ERROR! ${error}`);
        }}
      />

      <div>
        <label className='block ml-1'>Product Name</label>
        <input type="text"
          className='bg-gray-300 w-full px-4 py-2 border outline-pink-500 rounded-md'
          value={payload.name}
          onChange={(e) => setPayload({
            ...payload,
            name: e.target.value
          })}
          required
        />
      </div>

      <div>
        <label className='block ml-1'>Product Price</label>
        <input type="text"
          className='bg-gray-300 w-full px-4 py-2 border outline-pink-500 rounded-md'
          value={payload.price}
          onChange={(e) => setPayload({
            ...payload,
            price: e.target.value
          })}
          required
        />
      </div>

      <div>
        <label className='block ml-1'>Product cetegory</label>
        <input type="text"
          className='bg-gray-300 w-full px-4 py-2 border outline-pink-500 rounded-md'
          value={payload.category}
          onChange={(e) => setPayload({
            ...payload,
            category: e.target.value
          })}
          required
        />
      </div>
      <div className='flex justify-end '>
        <button type='submit' className='bg-pink-500 text-white py-2 px-4 rounded-md'>Add Product</button>
      </div>
    </form>
  )
}

export default ProdcutFrom