import * as React from "react";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import { PLASMIC } from "../plasmic-init";

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
    </PlasmicRootProvider>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (plasmicData) {
    return {
      props: { plasmicData },

      // Use revalidate if you want incremental static regeneration
      revalidate: 60,
    };
  }
  return {
    // non-Plasmic catch-all
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // @ts-ignore
  Array.prototype.remove = function (key: string, value: string) {
    const index = this.findIndex((obj) => obj[key] === value);
    return index >= 0
      ? [...this.slice(0, index), ...this.slice(index + 1)]
      : this;
  };
  // Ignored paths
  const ignorePaths = ["/posts"];
  const pageModules: any = await PLASMIC.fetchPages().then((fetchedPages) => {
    ignorePaths.forEach(
      (path) =>
        // @ts-ignore
        (fetchedPages = fetchedPages.remove("path", path))
    );
    return fetchedPages;
  });

  return {
    paths: pageModules.map((mod: any) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};
