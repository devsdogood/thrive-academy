import { Entry } from "contentful";
import { IContentSection, IPage, IPageFields } from "@src/types/generated/contentful";

/**
 * `contentful-typescript-codegen` doesn't generate an enum of content types
 * so we do it manually here. Github issue at:
 * https://github.com/intercom/contentful-typescript-codegen/issues/54
 */
export enum ContentTypes {
    ContentSection = 'contentSection',
    Event = 'event',
    EventCollection = 'eventCollection',
    BoardMember = 'boardMember',
    BoardMemberCollection = 'boardMemberCollection',
    NavigationItem = 'navigationItem',
    NavigationMenu = 'navigationMenu',
    Page = 'page',
    Settings = 'settings',
};

/** Collections which map to single entries */
export const CollectionMap = {
    [ContentTypes.EventCollection]: [
        ContentTypes.Event,
    ],
    [ContentTypes.BoardMemberCollection]: [
        ContentTypes.BoardMember,
    ],
}

/** Get the fields from an array-like entry */
export type IEntryFieldsItem<T extends Entry<IPageFields | IPageFieldsItem['fields']>> = T['fields']['content'][number];

/** Top-level collections on the page (event collection, event calendar, etc). `IContentSection` is excluded since it isn't a collection. */
export type IPageFieldsItem = Exclude<IEntryFieldsItem<IPage>, IContentSection>;

/** Child items on the page (content section, event, etc).*/
export type IPageItemFieldsItem = IEntryFieldsItem<IPageFieldsItem> | IContentSection;

export const isIPage = (block: IPage | IPageFieldsItem | IPageItemFieldsItem): block is IPage => (block as IPage).sys?.contentType?.sys?.id === 'page';

export const isIPageFieldsItem = (block: IPageFieldsItem | IPageItemFieldsItem): block is IPageFieldsItem => Array.isArray((block as IPageFieldsItem).fields?.content);
