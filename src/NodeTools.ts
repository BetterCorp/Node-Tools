import * as FS from 'fs';
import * as crypto from 'crypto';

export class NodeTools {
  static getFileHash(filePathOrStream: string | FS.ReadStream): Promise<string> {
    return new Promise((resolve, reject) => {
      if (typeof filePathOrStream === 'string') {
        if (!FS.existsSync(filePathOrStream as string)) return reject(`${ filePathOrStream as string } does not exist!`);
      }

      try {
        // https://gist.github.com/F1LT3R/2e4347a6609c3d0105afce68cd101561
        const hash = crypto.createHash('sha1');
        const rs = typeof filePathOrStream === 'string' ? FS.createReadStream(filePathOrStream as string) : filePathOrStream as FS.ReadStream;
        rs.on('error', reject);
        rs.on('data', (chunk: any) => hash.update(chunk));
        rs.on('end', () => resolve(hash.digest('hex')));
      } catch (exzc) {
        reject(exzc);
      }
    });
  }
}