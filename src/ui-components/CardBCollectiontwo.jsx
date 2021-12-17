/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardB from "./CardB";
import { Collection } from "@aws-amplify/ui-react";
export default function CardBCollectiontwo(props) {
  const { home, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Home,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardB
          width="auto"
          margin="1em 1px 0 0"
          home={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardB[0]")}
        ></CardB>
      )}
    </Collection>
  );
}
