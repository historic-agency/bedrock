import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";
import { useRouter } from "next/router";

interface Props {
  plasmicData: ComponentRenderData;
  posts: string;
}

// Render the page or component from Plasmic.
export default function MyPage(props: Props) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={props.plasmicData}>
      <PlasmicComponent
        component="Post"
        componentProps={{
          postTitle: `Post: ${pid}`,
        }}
      />
    </PlasmicRootProvider>
  );
}
