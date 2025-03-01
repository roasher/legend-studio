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

import { guaranteeNonNullable } from '../error/AssertionUtils.js';

export class StopWatch {
  private _startTime = Date.now();
  private _time = this._startTime;
  private _records = new Map<string, number>();
  private _elapsed = 0;

  record(event?: string | undefined): void {
    const currentTime = Date.now();
    const duration = currentTime - this._time;
    this._time = currentTime;
    this._elapsed = currentTime - this._startTime;
    if (event) {
      this._records.set(event, duration);
    }
  }

  getRecord(event: string): number {
    return guaranteeNonNullable(
      this._records.get(event),
      `Can't find record for event '${event}'`,
    );
  }

  get elapsed(): number {
    return this._elapsed;
  }

  get records(): Map<string, number> {
    return new Map(this._records);
  }
}
