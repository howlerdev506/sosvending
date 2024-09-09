import React from "react";
import { AssetFOrm } from "@/app/(dashboard)/dashboard/assets/_componets/assetsform";
import { TableDemo } from "./_componets/table-demo";

const AssetsPage = () => {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:gap-4 px-10 lg:px-10">
        <div className="flex items-center justify-center shrink-0">
          <AssetFOrm />
        </div>
        <div className="flex items-center justify-center  col-span-2 flex-wrap">
          <TableDemo />
        </div>
      </div>
    </main>
  );
};

export default AssetsPage;
