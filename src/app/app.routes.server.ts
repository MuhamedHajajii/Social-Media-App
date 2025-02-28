import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'post-details/:id', // DashBoard
    renderMode: RenderMode.Client, // CSR Client Side Rendering // Load Server ✅ // SEO ❌
  },
  {
    path: '**', // DashBoard
    renderMode: RenderMode.Prerender, // CSR Client Side Rendering // Load Server ✅ // SEO ❌
  },
  // {
  //   path: '**', // News Website
  //   renderMode: RenderMode.Server, // SSR Server Side Rendering // Load Server ❌ // SEO ✅
  // },
  // {
  //   path: '**', // News Website >> About Us , Privacy Policy, Contact Us
  //   renderMode: RenderMode.Prerender, // SSG Static Site Generation // Load Server ✅ // SEO ✅
  // },
  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender, // ISG Incremental Site Generation // Load Server ✅ // SEO ✅
  //   // Mobile Stores // News Website >> 1s  5PM 5PM
  // },
];
