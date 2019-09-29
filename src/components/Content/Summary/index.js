import React from 'react';

import ContentRow from '../ContentRow';

export default function Summary() {
  const dataSet = {
    title: "Summary",
    info: "My target is learn new technologies in practice, work on complex projects and study from experienced colleagues.",
  }

  return (
      <ContentRow data = {dataSet} />
  );
}