/* eslint-disable jsx-a11y/anchor-has-content */
import { default as NextLink } from 'next/link';
// import styles from './custom-link.module.sass';

export interface LinkProps {
  as: string;
  href: string;
}

export default function Link({ as, href, ...otherProps }: LinkProps) {
  return (
    <NextLink as={as} href={href}>
      <a {...otherProps} />
    </NextLink>
  );
}
