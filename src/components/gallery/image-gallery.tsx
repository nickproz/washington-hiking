import React, { FunctionComponent, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FadeInImageComponent } from '@/components/fade-in-image/fade-in-image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Button, Spinner } from '@cloudscape-design/components';

export interface Props {
  images: string[];
}

const ImageGalleryComponent: FunctionComponent<Props> = ({ images }: Props) => {
  // State
  const [imgIndex, setImgIndex] = useState<number>(-1);

  return (
    <>
      {/* Masonry gallery */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
        <Masonry gutter={'10px'}>
          {images.map((el, i) => (
            <FadeInImageComponent key={el} imgSrc={el} imgAlt={`Gallery img ${i}`} onClick={() => setImgIndex(i)} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Lightbox img modal */}
      <Lightbox
        slides={images.map((i) => ({ src: i }))}
        open={imgIndex >= 0}
        index={imgIndex}
        close={() => setImgIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: 'rgba(255,255,255,0.85)' },
          icon: { filter: 'none' },
          button: { filter: 'none' },
        }}
        render={{
          iconPrev: () => <Button variant={'icon'} iconName={'angle-left'} />,
          iconNext: () => <Button variant={'icon'} iconName={'angle-right'} />,
          iconClose: () => <Button variant={'icon'} iconName={'close'} />,
          iconLoading: () => <Spinner />,
        }}
      />
    </>
  );
};

export { ImageGalleryComponent };
