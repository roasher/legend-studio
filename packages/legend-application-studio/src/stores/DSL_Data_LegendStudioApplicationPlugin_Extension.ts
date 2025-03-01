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

import type { ElementEmbeddedContentSnippetSuggestion } from '@finos/legend-application';
import type { EmbeddedData } from '@finos/legend-graph';
import type { EmbeddedDataTypeOption } from './editor-state/element-editor-state/data/DataEditorState.js';
import type { EmbeddedDataState } from './editor-state/element-editor-state/data/EmbeddedDataState.js';
import type { EditorStore } from './EditorStore.js';
import type { DSL_LegendStudioApplicationPlugin_Extension } from './LegendStudioApplicationPlugin.js';

export type EmbeddedDataEditorStateBuilder = (
  editorStore: EditorStore,
  embeddedData: EmbeddedData,
) => EmbeddedDataState | undefined;

export type EmbeddedDataEditorRenderer = (
  embeddedDataState: EmbeddedDataState,
  isReadOnly: boolean,
) => React.ReactNode | undefined;

export type EmbeddedDataCreator = (
  embeddedDataType: string,
) => EmbeddedData | undefined;

/**
 * NOTE: The tab-stop index of the snippet must start from 2
 */
export type EmbeddedDataSnippetSuggestion =
  ElementEmbeddedContentSnippetSuggestion;

export interface DSL_Data_LegendStudioApplicationPlugin_Extension
  extends DSL_LegendStudioApplicationPlugin_Extension {
  /**
   * Get the list of extra embedded data editor state builders.
   */
  getExtraEmbeddedDataEditorStateBuilders?(): EmbeddedDataEditorStateBuilder[];

  /**
   * Get the list extra renderers for a specified embedded data editor state.
   */
  getExtraEmbeddedDataEditorRenderers?(): EmbeddedDataEditorRenderer[];

  /**
   * Get the list extra embedded data type options.
   */
  getExtraEmbeddedDataTypeOptions?(): EmbeddedDataTypeOption[];

  /**
   * Get the list of Pure grammar suggestion snippet getters for embedded data
   */
  getExtraEmbeddedDataSnippetSuggestions?(): EmbeddedDataSnippetSuggestion[];

  /**
   * Get the list of embedded data creators
   */
  getExtraEmbeddedDataCreators?(): EmbeddedDataCreator[];
}
