import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.log('enter abpvnextangularschema ngAdd()');
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}