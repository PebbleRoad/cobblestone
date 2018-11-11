import Vue from 'vue';
import VueRouter from 'vue-router';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// Install the Service Worker plugin
OfflinePluginRuntime.install();

// Vue Router
Vue.use(VueRouter);
