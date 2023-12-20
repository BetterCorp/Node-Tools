import * as Moment from "moment";
import type { MomentInput } from "moment";
import { Tools } from "../../lite/src/Tools";

export class HeavyTools extends Tools {
  static formatDate(time: string | Date | MomentInput, format = "DD/MM/YYYY") {
    if (Tools.isNullOrUndefined(time)) return "";
    return Moment(time).format(format);
  }
}
