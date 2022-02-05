import preval from 'next-plugin-preval';
import { ContentTypes } from '@src/types/contentTypes';
import getContentful from '@utils/contentful';
import { INavigationItem, INavigationMenuFields, ISettingsFields } from '@src/types/generated/contentful';

const getSiteData = async (): Promise<SiteData> => {
    const contentful = await getContentful();
    const siteSettingsQuery = await contentful.getEntries({ content_type: ContentTypes.Settings, include: 2 });
    const menuQuery = await contentful.getEntries({ content_type: ContentTypes.NavigationMenu, include: 2 });
    const menu = menuQuery.items?.[0] || {};
    const settings = siteSettingsQuery.items?.[0] || {};

    return {
        settings: (settings.fields) as ISettingsFields,
        menuItems: (menu.fields as INavigationMenuFields).menuItems
    };
}

export default preval(getSiteData());

export type SiteData = {
    menuItems: INavigationItem[];
    settings: ISettingsFields;
}
