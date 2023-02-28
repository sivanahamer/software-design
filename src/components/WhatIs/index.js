import React from 'react';
import styles from './styles.module.css';

export default function WhatIs() {
  return (
    <section className={styles.whatIs}>
    <p className={styles['whatIs--p']}>
    El diseño arquitectónico y detallado de software determina la calidad de los productos de software que se entregan. Es por esto que la industria del software ha venido sistematizando heurísticas de diseño por medio de lo que se ha llamado principios y patrones de diseño. En la actualidad, este cuerpo de conocimientos es muy amplio y relevante para cualquier ingeniero de software que deba construir software de calidad. El diseño y la construcción de frameworks para familias de productos de software requiere particularmente de la aplicación intensiva de este cuerpo de conocimientos por tratarse de un tipo de software adaptable a la construcción de aplicaciones de una familia con suficiente variabilidad de características como para ser sostenible en un nicho de mercado. Es por esto que el curso se enfoca en la aplicación de principios y patrones de diseño a la construcción de frameworks sin que por ello deba limitarse exclusivamente a este ámbito el uso de los principios y patrones estudiados.
    </p>
  </section>
  );
}
