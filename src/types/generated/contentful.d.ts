// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBoardMemberFields {
  /** Full Name */
  fullName: string;

  /** Image */
  image: Asset;

  /** Bio */
  bio: string;

  /** Board Title */
  boardTitle?: string | undefined;
}

export interface IBoardMember extends Entry<IBoardMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "boardMember";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBoardMemberCollectionFields {
  /** Title */
  title: string;

  /** Board Members */
  content: IBoardMember[];
}

export interface IBoardMemberCollection
  extends Entry<IBoardMemberCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "boardMemberCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContentSectionFields {
  /** Content */
  content: Document;

  /** Title */
  title: string;
}

/** Section on your site with rich content (text, images, markup, etc). */

export interface IContentSection extends Entry<IContentSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contentSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEventFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Date and Time */
  dateAndTime: string;

  /** Location */
  location: string;

  /** Description */
  content: IContentSection;
}

export interface IEvent extends Entry<IEventFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "event";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEventCollectionFields {
  /** Title */
  title: string;

  /** Events */
  content: IEvent[];
}

export interface IEventCollection extends Entry<IEventCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "eventCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationItemFields {
  /** Title */
  title: string;

  /** Page */
  page?: IPage | undefined;

  /** External URL */
  externalUrl?: string | undefined;
}

/** An item to display in your navigation menu (about page, home page, etc). */

export interface INavigationItem extends Entry<INavigationItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationItem";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationMenuFields {
  /** Logo */
  logo: Asset;

  /** Menu Items */
  menuItems: INavigationItem[];
}

/** The navigation menu to appear at the top of your site. Add links to pages within your site or links to an external site (donation page, social media page, etc). */

export interface INavigationMenu extends Entry<INavigationMenuFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationMenu";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Content */
  content: (IBoardMemberCollection | IContentSection | IEventCollection)[];
}

/** This represents a page on your website. For example, if you want to add an "About" page, you'd do that here. */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "boardMember"
  | "boardMemberCollection"
  | "contentSection"
  | "event"
  | "eventCollection"
  | "navigationItem"
  | "navigationMenu"
  | "page";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
