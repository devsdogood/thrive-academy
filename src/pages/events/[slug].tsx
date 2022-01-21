import { ContentTypes } from "@src/types/contentTypes";
import { IEventFields } from "@src/types/generated/contentful";
import EventView from "@components/views/EventView";
import {
  getStaticPathsGeneric,
  getStaticPropsGeneric
} from "@utils/next-static-utils";

export default EventView;

export const getStaticPaths = getStaticPathsGeneric<IEventFields>(
  ContentTypes.Event
);

export const getStaticProps = getStaticPropsGeneric<IEventFields>(
  ContentTypes.Event
);
