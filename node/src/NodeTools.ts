import * as FS from "fs";
import * as crypto from "crypto";
import * as path from "path";
import { Tools } from "../../lite/src/Tools";

export class NodeTools extends Tools {
  static getFileHash(
    filePathOrStream: string | FS.ReadStream
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      if (typeof filePathOrStream === "string") {
        if (!FS.existsSync(filePathOrStream as string))
          return reject(`${filePathOrStream as string} does not exist!`);
      }

      try {
        // https://gist.github.com/F1LT3R/2e4347a6609c3d0105afce68cd101561
        const hash = crypto.createHash("sha1");
        const rs =
          typeof filePathOrStream === "string"
            ? FS.createReadStream(filePathOrStream as string)
            : (filePathOrStream as FS.ReadStream);
        rs.on("error", reject);
        rs.on("data", (chunk: any) => hash.update(chunk));
        rs.on("end", () => resolve(hash.digest("hex")));
      } catch (exzc) {
        reject(exzc);
      }
    });
  }
  public walkFilePath(
    dir: string,
    returnFullPath: boolean = false
  ): Promise<Array<string>> {
    const self = this;
    return new Promise((resolve, reject) => {
      let results: Array<any> = [];
      FS.readdir(dir, (err, list) => {
        if (err) return reject(err);
        var pending = list.length;
        if (!pending) return resolve(results);
        list.forEach((file) => {
          if (returnFullPath) file = path.resolve(dir, file);
          FS.stat(path.resolve(dir, file), (err, stat) => {
            if (stat && stat.isDirectory()) {
              self.walkFilePath(file).then((res) => {
                results = results.concat(res);
                if (!--pending) resolve(results);
              });
            } else {
              results.push(file);
              if (!--pending) resolve(results);
            }
          });
        });
      });
    });
  }
}
