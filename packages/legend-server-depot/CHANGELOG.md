# @finos/legend-server-depot

## 4.2.4

## 4.2.3

## 4.2.2

## 4.2.1

## 4.2.0

### Minor Changes

- [#1755](https://github.com/finos/legend-studio/pull/1755) [`58e35aae8`](https://github.com/finos/legend-studio/commit/58e35aae8c126e700407db368efaa6c7975c6d6b) ([@MauricioUyaguari](https://github.com/MauricioUyaguari)) - Introduce `ProjectDependencyReport` with dependency graph and conflicts. Build dependency graph with serialized graph from depot.

## 4.1.12

## 4.1.11

## 4.1.10

## 4.1.9

## 4.1.8

## 4.1.7

## 4.1.6

## 4.1.5

## 4.1.4

### Patch Changes

- [#1597](https://github.com/finos/legend-studio/pull/1597) [`5b61c844`](https://github.com/finos/legend-studio/commit/5b61c844362b1ff60c4025ab9b93220e938399b0) ([@MauricioUyaguari](https://github.com/MauricioUyaguari)) - Remove usage of `latest` version alias in `DepotServerClient` in favor of directly using `MASTER_SNAPSHOT_ALIAS`

## 4.1.3

## 4.1.2

## 4.1.1

## 4.1.0

### Minor Changes

- [#1509](https://github.com/finos/legend-studio/pull/1509) [`8cbd17f0`](https://github.com/finos/legend-studio/commit/8cbd17f0d6b4854525adcdbb974d0c7a0fe4a564) ([@MauricioUyaguari](https://github.com/MauricioUyaguari)) - Support fetching `artifact-generation` content from server.

## 4.0.0

### Major Changes

- [#1488](https://github.com/finos/legend-studio/pull/1488) [`a90b4698`](https://github.com/finos/legend-studio/commit/a90b469846363058ac7efffcbfb8cf0070582609) ([@akphi](https://github.com/akphi)) - **BREAKING CHANGE:** Moved `Depot Server` utilities to `@finos/legend-storage`.

### Patch Changes

- [#1488](https://github.com/finos/legend-studio/pull/1488) [`a90b4698`](https://github.com/finos/legend-studio/commit/a90b469846363058ac7efffcbfb8cf0070582609) ([@akphi](https://github.com/akphi)) - Remove `TEMPORARY__useLegacyDepotServerAPIRoutes` client config.

## 3.0.12

## 3.0.11

## 3.0.10

## 3.0.9

## 3.0.8

## 3.0.7

## 3.0.6

## 3.0.5

## 3.0.4

## 3.0.3

## 3.0.2

## 3.0.1

## 3.0.0

### Major Changes

- [#1295](https://github.com/finos/legend-studio/pull/1295) [`8b17cfa3`](https://github.com/finos/legend-studio/commit/8b17cfa3902686d539b819532c75666f80419648) ([@akphi](https://github.com/akphi)) - **BREAKING CHANGE:** Renamed a client method `getLatestDependencyEntities` to `getLatestRevisionDependencyEntities()` and `getProjectVersionsDependencyEntities()` to `collectDependencyEntities()` to better describe their functionality. Also introduce a new composite client method `getIndexedDependencyEntities()` which accepts `version aliases` (such as `HEAD`, `latest`) and has logic to pick the right client methods to fetch and index the corresponding dependency entities and index them. Besides, we also cleaned up method signatures to make a distinction between `version` and `versionId` in client methods where the latter includes the former and `version aliases`.

## 2.0.6

## 2.0.5

## 2.0.4

## 2.0.3

## 2.0.2

## 2.0.1

### Patch Changes

- [#1223](https://github.com/finos/legend-studio/pull/1223) [`f5f72a2d`](https://github.com/finos/legend-studio/commit/f5f72a2de0a1bacd1d614ea1e3ecb782fce15bf8) ([@akphi](https://github.com/akphi)) - Fix a problem with parsing `GA` coordinate (`{groupId}:{artifactId}`)

## 2.0.0

### Major Changes

- [#1190](https://github.com/finos/legend-studio/pull/1190) [`4c076c98`](https://github.com/finos/legend-studio/commit/4c076c985b5efd0da3ec2f141ddc9cd53f0ba8f6) ([@akphi](https://github.com/akphi)) - **BREAKING CHANGE:** Use `NodeNext` (`ESM` module resolution strategy for `Typescript`). Read more about this [here](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs). This transition would be relatively smooth, except that we must use `ESM`-styled import (with extensions) for relative path. For example:

  ```ts
  // before
  import { someFunction } from './Utils';
  // after
  import { someFunction } from './Utils.js';
  ```

## 1.0.1

## 1.0.0

### Major Changes

- [#1113](https://github.com/finos/legend-studio/pull/1113) [`e35042ba`](https://github.com/finos/legend-studio/commit/e35042bacf7999e8a5d9836fa6b31cf89cc66237) ([@akphi](https://github.com/akphi)) - **BREAKING CHANGE:** Adopt `ESM` styled exports: i.e. we now make use of `exports` field (and removed `main` field) in `package.json`.

## 0.0.33

## 0.0.32

## 0.0.31

## 0.0.30

## 0.0.29

## 0.0.28

## 0.0.27

## 0.0.26

## 0.0.25

## 0.0.24

## 0.0.23

### Patch Changes

- [#911](https://github.com/finos/legend-studio/pull/911) [`c848bfa`](https://github.com/finos/legend-studio/commit/c848bfa512f9d7a5301e9c1d0f7d2c878d36d3db) ([@YannanGao-gs](https://github.com/YannanGao-gs)) - Add a utility function to compare `SemVer` versions.

## 0.0.22

## 0.0.21

## 0.0.20

## 0.0.19

## 0.0.18

## 0.0.17

## 0.0.16

## 0.0.15

## 0.0.14

## 0.0.13

## 0.0.12

## 0.0.11

## 0.0.10

## 0.0.9

## 0.0.8

## 0.0.7

## 0.0.6

## 0.0.5

## 0.0.4

## 0.0.3

## 0.0.2

## 0.0.1

### Patch Changes

- [#427](https://github.com/finos/legend-studio/pull/427) [`23b59b89`](https://github.com/finos/legend-studio/commit/23b59b8962c5049d1605bcb262c16cd3c012a1dd) ([@akphi](https://github.com/akphi)) - Expose `DepotServerClient` context provider and hook `useDepotServerClient()`.
