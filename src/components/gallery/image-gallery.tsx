import React, { FunctionComponent } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FadeInImageComponent } from '@/components/fade-in-image/fade-in-image';

export interface Props {
  images: string[];
}

const ImageGalleryComponent: FunctionComponent<Props> = ({ images }: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
      <Masonry gutter={'10px'}>
        {images.map((el, i) => (
          <FadeInImageComponent key={el} imgSrc={el} imgAlt={`Gallery img ${i}`} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export { ImageGalleryComponent };
