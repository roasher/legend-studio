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

import { PERSISTENCE_CLOUD_HASH_STRUCTURE } from '../../../../../../../../graph/DSL_PersistenceCloud_HashUtils.js';
import { V1_PersistencePlatform } from '@finos/legend-extension-dsl-persistence';
import { type Hashable, hashArray } from '@finos/legend-shared';

export class V1_AwsGluePersistencePlatform
  extends V1_PersistencePlatform
  implements Hashable
{
  dataProcessingUnits!: number;

  override get hashCode(): string {
    return hashArray([
      PERSISTENCE_CLOUD_HASH_STRUCTURE.AWS_GLUE_PERSISTENCE_PLATFORM,
      this.dataProcessingUnits.toString(),
    ]);
  }
}
