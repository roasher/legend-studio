/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { test } from '@jest/globals';
import type { Entity } from '@finos/legend-storage';
import { unitTest } from '@finos/legend-shared';
import { roundtripTestData } from './TEST_DATA__STO_ServiceStore_Roundtrip.js';
import { STO_ServiceStore_GraphManagerPreset } from '../../STO_ServiceStore_Extension.js';
import {
  TEST__GraphManagerPluginManager,
  TEST__checkBuildingElementsRoundtrip,
  DSL_ExternalFormat_GraphPreset,
} from '@finos/legend-graph';

const pluginManager = new TEST__GraphManagerPluginManager();
pluginManager
  .usePresets([
    new STO_ServiceStore_GraphManagerPreset(),
    new DSL_ExternalFormat_GraphPreset(),
  ])
  .install();

test(unitTest('Service store import resolution roundtrip'), async () => {
  await TEST__checkBuildingElementsRoundtrip(
    roundtripTestData as Entity[],
    pluginManager,
  );
});
