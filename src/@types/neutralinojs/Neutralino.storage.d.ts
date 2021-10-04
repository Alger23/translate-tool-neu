declare namespace Neutralino {
  namespace storage {
    const putData: (options: StorageWriterOptions) => Promise<void>;
    const getData: (options: StorageReaderOptions) => Promise<StorageData>;
  }
}

interface StorageWriterOptions {
  bucket: string;
  data: string;
}

interface StorageReaderOptions {
  bucket: string;
}

interface StorageData {
  data: string;
}
