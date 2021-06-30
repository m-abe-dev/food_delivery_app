import React, { Fragment, useEffect } from 'react';

// apis
import { fetchRestaurants } from '../apis/restaurants';

export const Restaurants = () => {

  // 初回レンダリングの一度だけ
  useEffect(() => {
    fetchRestaurants()
    .then((data) =>
      console.log(data)
    )
  }, [])
  
  return (
    <Fragment>
      レストラン一覧
    </Fragment>
  )
}
