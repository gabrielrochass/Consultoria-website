import styles from './ParallaxSection.module.css';

export default function ParallaxSection({ background, variant = 'valores', children }) {
  return (
    <div
      className={`${styles.parallax} ${styles[variant]}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
