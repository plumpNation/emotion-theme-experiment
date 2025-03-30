import styled from "@emotion/styled";
import { TabGroup as HUITabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { type FC } from "react";

import { categories } from "./data";

const StyledTab = styled(Tab)`
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const TabGroup: FC = () => (
  <HUITabGroup>
    <TabList>
      {categories.map(({ name }) => (
        <StyledTab key={name}>
          {name}
        </StyledTab>
      ))}
    </TabList>

    <TabPanels>
      {categories.map(({ name, posts }) => (
        <TabPanel key={name}>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href="#">
                  <span />
                  {post.title}
                </a>
                <ul aria-hidden="true">
                  <li>{post.date}</li>
                  <li aria-hidden="true">&middot;</li>
                  <li>{post.commentCount} comments</li>
                  <li aria-hidden="true">&middot;</li>
                  <li>{post.shareCount} shares</li>
                </ul>
              </li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </TabPanels>
  </HUITabGroup>
);