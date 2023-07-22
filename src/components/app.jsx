import React, { useState, useEffect } from 'react';
import { getDevice } from 'framework7/lite-bundle';
import { f7, f7ready, App, Panel, Views, View, Page, Navbar, Toolbar, Link, Block } from 'framework7-react';

import store from '../js/store';
import routes from '../js/routes';
import capacitorApp from '../js/capacitor-app';

const MyApp = () => {
  const device = getDevice();

  // Framework7 Parameters
  const f7params = {
    name: 'Daily Digest', // App name
    theme: 'auto', // Automatic theme detection
    colors: {
      primary: '#b59517',
    },
    darkMode: true,
    // App store
    store: store,
    // App routes
    routes: routes,
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: true,
      androidBackgroundColor: '#b59517',
    },
  };

  f7ready(() => {
    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* Left panel with cover effect*/}
      <Panel left cover dark>
        <View>
          <Page>
            <Navbar title="Left Panel" />
            <Block>Left panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Right panel with reveal effect*/}
      <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Today" />
          <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Library" />
          <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-catalog" name="catalog" tab url="/catalog/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>
    </App>
  )
}
export default MyApp;
