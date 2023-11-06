import './fade-in-image.scss';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface Props {
  imgSrc: string;
  imgAlt: string;
}

const FadeInImageComponent: FunctionComponent<Props> = ({ imgSrc, imgAlt }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<string>('75%');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // onLoad doesn't fire if img is cached
    if (imgRef.current?.complete) {
      onImageLoad();
    }
  }, [imgRef]);

  function onImageLoad(): void {
    setIsLoading(false);
    adjustAspectRatio();
  }

  function adjustAspectRatio(): void {
    if (imgRef.current) {
      const img = imgRef.current;
      const aspectRatio = (img.naturalHeight / img.naturalWidth) * 100;
      setAspectRatio(`${aspectRatio}%`);
    }
  }

  return (
    <div className="fade-in-image__container" style={{ paddingBottom: aspectRatio }}>
      <img ref={imgRef} src={imgSrc} alt={imgAlt} onLoad={onImageLoad} style={{ opacity: isLoading ? 0 : 1 }} />
    </div>
  );
};

export { FadeInImageComponent };
