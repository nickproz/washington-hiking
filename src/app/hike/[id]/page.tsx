'use client';
import React from 'react';
import { NextPage } from 'next';
import { GetStaticPropsContext } from 'next/types';
import { ImageGalleryComponent } from '@/components/gallery/image-gallery';

// TODO: determine dynamically
const NUM_IMAGES: number = 16;

const HikeComponent: NextPage<GetStaticPropsContext> = ({ params }) => {
  console.log('Hike: ', params?.id);

  function getImages(): string[] {
    return [...Array(NUM_IMAGES)].map((el, i) => `/static/hikes/mt-daniel/${i + 1}.jpeg`);
  }

  return (
    <>
      <ImageGalleryComponent images={getImages()} />
    </>
  );
};

export default HikeComponent;
