import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
