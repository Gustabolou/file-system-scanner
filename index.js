import { readdir as fsReaddir, stat } from 'node:fs/promises';
import path from 'node:path';

async function listFiles(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fsReaddir(rootDir);
  await walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (const file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await stat(fileFullPath);

    if (file === '.git' || file === 'node_modules') continue;

    if (stats.isDirectory()) {
      await listFiles(fileFullPath);
      continue;
    }

    if (!fileFullPath.endsWith('.html')) continue;
    console.log(fileFullPath);
  }
}

listFiles(path.join('C:', 'Users', 'Gustavo Sales', 'Desktop', 'UDEMY'))
  .catch(err => console.error('Erro:', err));