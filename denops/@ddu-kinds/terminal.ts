import {
  ActionFlags,
  type Actions,
  type BaseKind,
  type DduItem,
}from "jsr:@shougo/ddu-vim@~10.3.0/types";
import type { Denops } from "jsr:@denops/std@~7.5.0";
import * as fn from "jsr:@denops/std@~7.5.0/function";
import { BaseKind } from "jsr:@shougo/ddu-vim@~10.3.0/kind";

type Params = Record<never, never>;

type ActionData = {
  bufnr: number;
  path: string;
};

type ActionInfo = {
  word: string;
  action: ActionData;
};

export class Kind extends BaseKind<Params> {
  override actions: Actions<Params> = {
    open: async (args: { denops: Denops; items: DduItem[] }) => {
        for (const i of args.items ){
          await args.denops.cmd(`buf ${i.action.bufnr}`);
        }
        return ActionFlags.None;
    },
  }

  override params(): Params {
    return {
    };
  }
}
