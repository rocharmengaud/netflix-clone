import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props, movie) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : `https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg`}
      alt={movie.title ? movie.title : 'Movie title undefined'}
      priority={true}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
