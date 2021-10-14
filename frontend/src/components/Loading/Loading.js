import React from 'react';
import styleLoading from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styleLoading.bgLoading}>
      <img src="https://jobtest.vn/web/images/web/icon-marketing/loading.gif" alt="loading" />
    </div>
  );
}
