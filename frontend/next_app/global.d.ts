import { FC, PropsWithChildren, ReactElement } from "global";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
}
