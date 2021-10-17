declare namespace Neutralino {
  namespace storage {
    const putData: (options: StorageWriterOptions) => Promise<NeuStoragePutDataResponse>;
    const getData: (options: StorageReaderOptions) => Promise<NeuStorageGetDataResponse>;
  }
}

interface StorageWriterOptions {
  bucket: string;
  data: string;
}

interface StorageReaderOptions {
  bucket: string;
}

declare interface NeuStoragePutDataResponse {
  success?: boolean;
  error?: string;
}

declare interface NeuStorageGetDataResponse {
  data?: string;
  success?: boolean;
  error?: string;
}
