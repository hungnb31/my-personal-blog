import styles from './shared-mdx-elements.module.scss';

/* eslint-disable-next-line */
export interface SharedMdxElementsProps {}

export function SharedMdxElements(props: SharedMdxElementsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedMdxElements!</h1>
    </div>
  );
}

export default SharedMdxElements;
