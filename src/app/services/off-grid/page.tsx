import type { Metadata } from "next";
import FlexiblePage, { pageMetadata } from "@/components/FlexiblePage";
import { pages } from "@/lib/pages";

const spec = pages.offgrid;

export const metadata: Metadata = pageMetadata(spec);

export default function Page() {
  return <FlexiblePage spec={spec} />;
}
