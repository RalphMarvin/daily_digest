import React from 'react';
import NewsArticles from '../components/news';
import { Page, Navbar, NavTitle, NavTitleLarge, List } from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      {/* <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft> */}
      <NavTitle sliding>Daily Digest</NavTitle>
      {/* <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight> */}
      <NavTitleLarge>Daily Digest</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <List>
      <NewsArticles />
    </List>
  </Page>
);
export default HomePage;
