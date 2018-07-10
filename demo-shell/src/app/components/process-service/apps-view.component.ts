/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppDefinitionRepresentationModel } from '@alfresco/adf-process-services';

@Component({
    selector: 'app-process-list-view',
    templateUrl: './apps-view.component.html',
    styleUrls: ['./apps-view.component.scss']
})
export class AppsViewComponent {

    public static LAYOUT_LIST = 'LIST';
    public static LAYOUT_GRID = 'GRID';

    layoutType = 'GRID';
    presetColumn = 'apps-list';
    actions: any;

    constructor(private router: Router) { }

    onAppClicked(app: AppDefinitionRepresentationModel) {
        this.router.navigate(['/activiti/apps', app.id || 0, 'tasks']);
    }

    performAction(row: any): void {
        this.router.navigate(['/activiti/apps', row.id || 0, 'tasks']);
    }

    setActions(row: any): void {
        this.actions = [{ key: 'tasks', icon: 'assignment', label: 'View Task' }];
    }

    toggleAppsView(event: any) {
        this.layoutType = event && event.checked ? AppsViewComponent.LAYOUT_LIST : AppsViewComponent.LAYOUT_GRID;
    }
}
