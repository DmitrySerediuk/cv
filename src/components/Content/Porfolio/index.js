import React from 'react';

import ContentRow from '../ContentRow';

export default function Portfolio() {
    const dataSet = {
        title: "Portfolio",
        info: "data",
    }

  return (
      <ContentRow data = {dataSet} />
  );
}