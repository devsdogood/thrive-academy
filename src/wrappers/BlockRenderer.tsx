import React from "react";
import {
  ContentTypes,
  IPageFieldsItem,
  IPageItemFieldsItem,
  isIPage,
  isIPageFieldsItem,
} from "@src/types/contentTypes";
import { IPage } from "@src/types/generated/contentful";
import ContentSection from "@components/views/ContentSection";
import EventPreview from "@components/previews/EventPreview";
import BoardMember from "@components/views/BoardMember";
import EventCollection from "@wrappers/EventCollection";
import BoardMemberCollection from "@wrappers/BoardMemberCollection";

type BlockRendererProps = {
  block: IPage | IPageFieldsItem | IPageItemFieldsItem;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  let children: JSX.Element[] = [];

  const getKey = (content: BlockRendererProps['block']) => `${content.sys.contentType}-${content.sys.id}`;

  if (isIPage(block)) {
    // Render all page elements through BlockRenderer
    return (
      <>
        {block.fields.content.map((content) => (
          <BlockRenderer key={getKey(content)} block={content} />
        ))}
      </>
    );
  }

  if (isIPageFieldsItem(block)) {
    children = block.fields.content.map((content) => (
      <BlockRenderer key={getKey(content)} block={content} />
    ));
  }

  const contentTypeId = block.sys.contentType.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  return (
    // @ts-ignore i'm not sure why TS isn't picking up Component as the type of its map value
    <Component key={getKey(block)} entry={block}>
      {children}
    </Component>
  );
};

const ContentTypeMap = {
  [ContentTypes.ContentSection]: ContentSection,
  [ContentTypes.Event]: EventPreview,
  [ContentTypes.EventCollection]: EventCollection,
  [ContentTypes.BoardMember]: BoardMember,
  [ContentTypes.BoardMemberCollection]: BoardMemberCollection,
};

export default BlockRenderer;
