import { default as NextImage, ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
  style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = ({
  style = {},
  alt,
  src,
  height,
  width,
  objectFit = 'contain',
  placeholder = 'blur',
  ...props
}) => {
  return (
    <div
      className="image-wrapper"
      style={{
        height: height ? `${height}px` : '100%',
        width: width ? `${width}px` : '100%',
        ...style,
      }}
    >
      <NextImage
        height={height}
        width={width}
        objectFit={objectFit}
        placeholder={placeholder}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};
