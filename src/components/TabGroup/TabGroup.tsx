import styled from "@emotion/styled/macro";
import { TabGroup as HUITabGroup, Tab, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { type FC } from "react";

import { categories } from "./data";

const StyledTab = styled(Tab)`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
const StyledTabPanel = styled(TabPanel)`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
const StyledTabPanels = styled(TabPanels)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
  &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;

export const TabGroup: FC = () => (
  <HUITabGroup>
    <StyledTabList>
      {categories.map(({ name }) => (
        <StyledTab key={name}>
          {name}
        </StyledTab>
      ))}
    </StyledTabList>

    <StyledTabPanels>
      {categories.map(({ name, posts }) => (
        <StyledTabPanel key={name}>
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
        </StyledTabPanel>
      ))}
    </StyledTabPanels>
  </HUITabGroup>
);