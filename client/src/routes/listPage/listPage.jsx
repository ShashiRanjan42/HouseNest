import React, { Suspense } from 'react'
import { listData } from "../../lib/dummydata";
import "./listPage.scss"
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from 'react-router-dom';
import Footer from '../../components/footer/footer';

export default function listPage() {
  const data = useLoaderData();

  // const data = listData;
  return (
    <div className='listPages'>
      <Filter />

    <div className="listPage">

      <div className="listContainer">
        <div className="wrapper">

          <Suspense fallback={
            <div className="spinner-div">
              <span class="spinner"></span>
              <p>Loading...</p>
            </div>
            }>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={
          <div className="spinner-div">
          <span class="spinner"></span>
          <p>Loading...</p>
          </div>
        }>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>

    <Footer />


    </div>
  )
}
