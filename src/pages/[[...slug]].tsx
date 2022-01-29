import React from 'react';
import { EntryCollection } from 'contentful';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { ContentTypes } from '@src/types/contentTypes';
import { IPage, IPageFields } from '@src/types/generated/contentful';
import getContentful from '@utils/contentful';
import BlockRenderer from '@wrappers/BlockRenderer';
import Custom404Page from '@pages/404';
import Script from 'next/script';

const SlugPage: NextPage<{page: IPage | false}> = ({ page }) => {
  if (!page) return <Custom404Page />

  var preContent: any;
  if (page.fields.slug == "/"){
    preContent = 
    // fade
    <div>
      <div className="row">
        <div className="col title" ><h1>&#9733;LIVING <br/> <br />  &#9733;LEARNING <br/> <br /> &#9733;WORKING</h1></div>
        <div className="col slide-img">
          <img src="/slideimgs/thrivepic1.jpeg" alt="" />
          <img src="/slideimgs/thrivepic2.jpeg" alt="" />
          <img src="/slideimgs/thrivepic3.jpeg" alt="" />
          <img src="/slideimgs/thrivepic4.jpeg" alt="" />
       </div>
      </div>

    <div className="contentBelow" >
      <div className="div" id="pic1"></div>
      <div>
        <h1>MISSION</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, natus beatae eos maiores harum quia culpa inventore libero. Culpa delectus fugit voluptatem perferendis exercitationem repudiandae? Error facilis iure tempore ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque quidem commodi nemo corporis fugiat sequi veritatis exercitationem nam error dolorum officia odit rem nostrum, eos molestias maiores velit hic?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eaque doloremque quibusdam maxime! Quibusdam repellendus ratione maiores, eum distinctio quia voluptate quis impedit officia asperiores? Eveniet deleniti unde a quis.</p> <br />
      </div>
      <div className="div" id="pic2"></div>
    </div>
    </div>
  }

  return (
    <>
      <Head>
        <title>{page.fields.title}</title>
        <meta name="description" content={page.fields.description} />
      </Head>
      {preContent}
      <BlockRenderer block={page} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = await getContentful();
  const pages = await contentful.getEntries({ content_type: ContentTypes.Page, select: 'fields.slug' }) as EntryCollection<IPageFields>;

  const paths = pages.items.map((page) => ({
    // Paths are in the format /{route}/{subroute}/
    // so we split and remove the first and last elements to get [{route}, {subroute}]
    params: { slug: page.fields.slug.split('/').slice(1, -1) }
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params: { slug = [] } }: Params) => {
  // The slug is passed as an array of routes, need to join back as a string
  const contentfulSlug = ['', ...slug, ''].join('/');

  const contentful = await getContentful();
  const pagesQuery = await contentful.getEntries({ content_type: ContentTypes.Page, 'fields.slug': contentfulSlug, include: 5 });
  const page = pagesQuery.items?.[0] as IPage || false;

  return {
    props: {
      page: page,
    },
  };
}

export default SlugPage;
