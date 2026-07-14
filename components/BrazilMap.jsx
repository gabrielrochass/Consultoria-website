import brazil from './brazilMapData';
import styles from './BrazilMap.module.css';

const HIGHLIGHT = 'pe';

export default function BrazilMap() {
  return (
    <figure className={styles.wrap}>
      <svg
        viewBox={brazil.viewBox}
        className={styles.map}
        role="img"
        aria-label="Mapa do Brasil com destaque para o estado de Pernambuco"
      >
        {brazil.locations.map((state) => (
          <path
            key={state.id}
            d={state.path}
            className={state.id === HIGHLIGHT ? styles.pe : styles.state}
          />
        ))}
      </svg>
    </figure>
  );
}
