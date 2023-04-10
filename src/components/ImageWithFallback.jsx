import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props, movie) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : `http://via.placeholder.com/640x360`}
      alt={movie.title ? movie.title : 'Movie title undefined'}
      priority={true}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
