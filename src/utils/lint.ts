import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

/**
 * Lint a particular file or directory against the `biome.test.jsonc` config
 * file, returning a `rdjson` output.
 */
export const lint = (path: string) => {
  if (!existsSync(path)) {
    throw new Error(`No file at path: ${path}`)
  }

  const { stdout, stderr, status } = spawnSync(
    "npx",
    [
        "@biomejs/biome",
        "lint",
        "--error-on-warnings",
        "--reporter",
        "rdjson",
        "--max-diagnostics",
        "none",
        "--no-errors-on-unmatched",
        "--config-path",
        `${import.meta.dirname}/biome.test.jsonc`,
        path
    ]
  );

  return {
    stdout: stdout.toString(),
    stderr: stderr.toString(),
    status,
  };
}