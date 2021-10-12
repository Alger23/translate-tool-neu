declare namespace Neutralino {
  namespace filesystem {
    const createDirectory: (createDirectoryOptions: CreateDirectoryOptions) => Promise<void>;
    const removeDirectory: (removeDirectoryOptions: RemoveDirectoryOptions) => Promise<void>;
    const writeFile: (writeFileOptions: WriteFileOptions) => Promise<void>;
    const writeBinaryFile: (writeBinaryFileOptions: WriteBinaryFileOptions) => Promise<void>;
    const readFile: (readFileOptions: ReadFileOptions) => Promise<ReadFileResponse>;
    const readBinaryFile: (readBinaryFileOptions: ReadBinaryFileOptions) => Promise<ArrayBuffer>;
    const removeFile: (removeFileOptions: RemoveFileOptions) => Promise<void>;
    const readDirectory: (ReadFileOptions: ReadFileOptions) => Promise<FileOrDirectoryEntries>;
    const copyFile: (copyFileOptions: CopyFileOptions) => Promise<void>;
    const moveFile: (moveFileOptions: MoveFileOptions) => Promise<void>;
    const getStats: (getStatsOptions: GetStatsOptions) => Promise<FileStats>;
  }
}

interface IDirectoryPath {
  path: string;
}

interface CreateDirectoryOptions extends IDirectoryPath {
}

interface RemoveDirectoryOptions extends IDirectoryPath {
}

interface IFileName {
  fileName: string;
}

interface WriteFileOptions extends IFileName {
  data: string;
}

interface WriteBinaryFileOptions extends IFileName {
  data: ArrayBuffer;
}

interface ReadFileOptions extends IFileName {
}

interface ReadBinaryFileOptions extends IFileName {
}

interface RemoveFileOptions extends IFileName {
}

interface ReadDirectoryOptions extends IDirectoryPath {
}

interface ReadFileResponse {
  data: string;
  success: boolean;
}

interface FileOrDirectoryEntries {
  entries: Array<FileOrDirectoryEntry>;
}

interface FileOrDirectoryEntry {
  entry: string;
  type: EntryType;
}

type EntryType = 'FILE' | 'DIRECTORY';

interface CopyFileOptions {
  source: string;
  destination: string;
}

interface MoveFileOptions {
  source: string;
  destination: string;
}

interface IFileOrDirectoryPath {
  path: string;
}

interface GetStatsOptions extends IFileOrDirectoryPath {
}

interface FileStats {
  size: number;
  isFile: boolean;
  isDirectory: boolean;
}
