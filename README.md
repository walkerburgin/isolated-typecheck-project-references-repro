# `isolated-typecheck-project-references-repro`

The motivation for using project references like this at all is to enable typechecking across projects in the IDE.

## Repro
- Run `bazel build //...`
- Observe failure in the `TsProjectEmit` action: ![image](https://github.com/user-attachments/assets/f38ee3b8-1532-414a-a363-40acf1556564)
- Run `bazel build //pkgs/foo-lib:typescript_types -s --sandbox_debug`, copy the action, and run it directly: ![image](https://github.com/user-attachments/assets/bab11a94-7eb6-4afa-8bab-4fcff92c78c6)
