import { ItemSublist } from "@NFTSS2/DataAccess/PurchaseOrderBase";
import { SublistFieldType } from "@NFTSS2/DataAccess/Sublist";

export class PurchaseOrderItemSublist extends ItemSublist {

  @SublistFieldType.select
  custcol_postatus: number

  @SublistFieldType.select
  custcol_postatusText: string

  @SublistFieldType.select
  custcol_related_project: number

  @SublistFieldType.select
  custcol_related_projectText: string

  @SublistFieldType.select
  test_val: string

}