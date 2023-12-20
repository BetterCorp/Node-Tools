import * as Moment from "moment";
import type { MomentInput } from "moment";
import { Tools } from "../../lite/src/Tools";
import * as CryptoAES from "crypto-js/aes";
import * as CryptoENC from "crypto-js/enc-utf8";

export class HeavyTools extends Tools {
  static formatDate(time: string | Date | MomentInput, format = "DD/MM/YYYY") {
    if (Tools.isNullOrUndefined(time)) return "";
    return Moment(time).format(format);
  }
  static encrypt(text: string, key: string) {
    return CryptoAES.encrypt(text, key).toString();
  }
  static decrypt(text: string, key: string) {
    return CryptoAES.decrypt(text, key).toString(CryptoENC);
  }
}
