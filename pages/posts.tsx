import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

// Statically fetch the data needed to render Plasmic pages or components.
export const getStaticProps = async () => {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData("/posts");

  const res = await fetch("https://historicagency.com/wp-json/wp/v2/posts");
  const posts = await res.json();

  return {
    props: {
      plasmicData,
      blogPosts: posts,
    },
    revalidate: 60,
  };
};

// Render the page or component from Plasmic.
export default function MyPage(props: {
  plasmicData: ComponentRenderData;
  blogPosts: string;
}) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={props.plasmicData}>
      <PlasmicComponent
        component="/posts"
        componentProps={{
          postWrapper: {
            blogPosts: props.blogPosts,
          },
        }}
      />
    </PlasmicRootProvider>
  );
}
