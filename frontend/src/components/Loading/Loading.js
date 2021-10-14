import React from 'react';
import styleLoading from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styleLoading.bgLoading}>
      <img src="./images/loading.gif" alt="loading" />
    </div>
  );
}
