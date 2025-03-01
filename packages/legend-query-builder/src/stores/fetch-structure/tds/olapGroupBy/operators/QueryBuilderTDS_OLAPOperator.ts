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

import { PrimitiveType, type PureModel, type Type } from '@finos/legend-graph';
import { type Hashable, uuid } from '@finos/legend-shared';
import type { QueryBuilderTDSColumnState } from '../../QueryBuilderTDSColumnState.js';

export abstract class QueryBuilderTDS_OLAPOperator implements Hashable {
  readonly uuid = uuid();

  abstract getLabel(): string;

  abstract get hashCode(): string;

  abstract get pureFunc(): string;

  abstract isCompatibleWithType(type: Type | undefined): boolean;

  isColumnAggregator(): boolean {
    return false;
  }

  getOperatorReturnType(graph: PureModel): Type {
    return PrimitiveType.NUMBER;
  }

  isCompatibleWithColumn(column: QueryBuilderTDSColumnState): boolean {
    return this.isCompatibleWithType(column.getColumnType());
  }
}
