/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import CardB from "./CardB";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      gap="0"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <CardB
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        shrink="0"
        display="flex"
        gap="0"
        width="320px"
        position="relative"
        justifyContent="center"
        direction="column"
        {...getOverrideProps(overrides, "Flex.CardB[0]")}
      >
        <Image
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          shrink="0"
          src={home?.image_url}
          width="320px"
          position="relative"
          height="160px"
          {...getOverrideProps(overrides, "Flex.CardB[0].Image[0]")}
        ></Image>
        <Flex
          padding="16px 16px 16px 16px"
          alignSelf="stretch"
          position="relative"
          shrink="0"
          gap="16px"
          direction="column"
          {...getOverrideProps(overrides, "Flex.CardB[0].Flex[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            position="relative"
            shrink="0"
            gap="8px"
            direction="column"
            {...getOverrideProps(overrides, "Flex.CardB[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="288px"
              fontSize="16px"
              lineHeight="24px"
              position="relative"
              fontWeight="700"
              direction="column"
              children={`${home?.image_url}${home?.image_url}`}
              {...getOverrideProps(
                overrides,
                "Flex.CardB[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              letterSpacing="0.010000000000000009px"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="288px"
              fontSize="16px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children="ここと左のタブは一致してない。"
              {...getOverrideProps(
                overrides,
                "Flex.CardB[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="288px"
              fontSize="14px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children="初見者殺し。"
              {...getOverrideProps(
                overrides,
                "Flex.CardB[0].Flex[0].Flex[0].Text[2]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </CardB>
    </Flex>
  );
}
