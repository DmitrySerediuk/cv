import React from 'react';

import ContentRow from '../ContentRow';

export default function Summary() {
    const dataSet = {
        title: "Summary",
        info: "data",
    }

  return (
      <ContentRow data = {dataSet} />
  );
}