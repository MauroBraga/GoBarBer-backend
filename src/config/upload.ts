import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

interface IUploadConfig {
  driver: 'driver' | 's3';

  tmpFolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: any;

    aws: {
      bucket: string;
    };
  };
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const filehash = crypto.randomBytes(10).toString('hex');
        const fileName = `${filehash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber-0305',
    },
  },
} as IUploadConfig;
