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

import {
  collectKeyedCommandConfigEntriesFromConfig,
  type KeyedCommandConfigEntry,
} from '@finos/legend-application';
import packageJson from '../../package.json';
import { LegendPureIDEApplicationPlugin } from '../stores/LegendPureIDEApplicationPlugin.js';
import {
  LEGEND_PURE_IDE_COMMAND_CONFIG,
  LEGEND_PURE_IDE_DIAGRAM_EDITOR_COMMAND_CONFIG,
  LEGEND_PURE_IDE_PURE_FILE_EDITOR_COMMAND_CONFIG,
} from '../stores/LegendPureIDECommand.js';

export class Core_LegendPureIDEApplicationPlugin extends LegendPureIDEApplicationPlugin {
  static NAME = packageJson.extensions.applicationPureIDEPlugin;

  constructor() {
    super(Core_LegendPureIDEApplicationPlugin.NAME, packageJson.version);
  }

  override getExtraKeyedCommandConfigEntries(): KeyedCommandConfigEntry[] {
    return [
      LEGEND_PURE_IDE_COMMAND_CONFIG,
      LEGEND_PURE_IDE_PURE_FILE_EDITOR_COMMAND_CONFIG,
      LEGEND_PURE_IDE_DIAGRAM_EDITOR_COMMAND_CONFIG,
    ].flatMap((data) => collectKeyedCommandConfigEntriesFromConfig(data));
  }
}
