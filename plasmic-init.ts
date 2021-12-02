import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import PostWrapper from './components/PostWrapper';
import Test from './components/Test';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wouGT5KyY4fTan3PA39SdB",
      token: "GYmENByld70jAF0PFS53LEBPlfwz2COTEtMW1a7doOMgYLAFMAMAXEm57A6IKAKdSLe8kEhg3MO7SGW3SZpFSA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

// PLASMIC.registerComponent(PostCard, {
//   name: 'Post Card',
//   props: {
//     test: 'string',
//   }
// });

// PLASMIC.registerComponent(PostWrapper, {
//   name: 'Post Wrapper',
//   props: {
//     name: 'string',
//   },
//   importPath: './components/PostWrapper',
//   isDefaultExport: true,
// });

PLASMIC.registerComponent(PostWrapper, {
  name: "PostWrapper",
  props: {
    apiURL: 'string',
  }
})

PLASMIC.registerComponent(Test, {
  name: 'Test',
  props: {
    name: 'string',
  }
});