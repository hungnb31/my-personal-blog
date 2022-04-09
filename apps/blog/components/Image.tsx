import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import styles from '@styles/components/Image.module.sass';

interface ImageProps extends NextImageProps {
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
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
      className={styles.wrapper}
      style={{
        height: height ? `${height}px` : '100%',
        width: width ? `${width}px` : '100%',
        ...style,
      }}
    >
      <NextImage
        height={height || null}
        width={width || null}
        objectFit={objectFit}
        placeholder={placeholder}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Image;
