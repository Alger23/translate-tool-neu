declare namespace Neutralino {
  namespace computer {
    const getRamUsage: () => Promise<RamInfo>;

  }
}

interface RamInfo {
  total: number;
  available: number
}
