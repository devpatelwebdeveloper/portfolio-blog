const fs = require('fs-extra');
const path = require('path');

async function removeNodeModules(rootDir) {
  try {
    // Remove 'node_modules' from the root directory
    const rootModulesPath = path.join(rootDir, 'node_modules');
    if (await fs.pathExists(rootModulesPath)) {
      console.log('Removing root node_modules');
      await fs.remove(rootModulesPath);
    } else {
      console.log('No root node_modules found');
    }

    // Remove 'node_modules' from each package in 'packages' directory
    const packagesDir = path.join(rootDir, 'packages');
    const packageDirs = await fs.readdir(packagesDir);

    await Promise.all(
      packageDirs.map(async (packageName) => {
        const packagePath = path.join(packagesDir, packageName);
        const nodeModulesPath = path.join(packagePath, 'node_modules');

        if (await fs.pathExists(nodeModulesPath)) {
          console.log(`Removing 'node_modules' from ${packageName}`);
          await fs.remove(nodeModulesPath);
        } else {
          console.log(`No 'node_modules' found in ${packageName}`);
        }
      })
    );

    console.log('Removal of node_modules completed.');
  } catch (error) {
    console.error('Error removing node_modules:', error.message);
  }
}

// Example usage:
removeNodeModules(__dirname);
