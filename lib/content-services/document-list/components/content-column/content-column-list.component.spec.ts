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

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DataColumn, setupTestBed } from '@alfresco/adf-core';
import { LogService } from '@alfresco/adf-core';
import { DocumentListComponent } from './../document-list.component';
import { ContentColumnListComponent } from './content-column-list.component';
import { ContentTestingModule } from '../../../testing/content.testing.module';

describe('ContentColumnList', () => {

    let documentList: DocumentListComponent;
    let columnList: ContentColumnListComponent;
    let logService: LogService;

    setupTestBed({
        imports: [ContentTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    beforeEach(() => {
        documentList = (TestBed.createComponent(DocumentListComponent).componentInstance as DocumentListComponent);
        logService = TestBed.get(LogService);
        columnList = new ContentColumnListComponent(documentList, logService);

        documentList.ngOnInit();
    });

    it('should register column within parent document list', () => {
        let columns = documentList.data.getColumns();
        expect(columns.length).toBe(0);

        let column = <DataColumn> {};
        let result = columnList.registerColumn(column);

        expect(result).toBeTruthy();
        expect(columns.length).toBe(1);
        expect(columns[0]).toBe(column);
    });

    it('should require document list instance to register action', () => {
        columnList = new ContentColumnListComponent(null, logService);
        let col = <DataColumn> {};
        expect(columnList.registerColumn(col)).toBeFalsy();
    });

    it('should require action instance to register', () => {
        spyOn(documentList.actions, 'push').and.callThrough();
        let result = columnList.registerColumn(null);

        expect(result).toBeFalsy();
        expect(documentList.actions.push).not.toHaveBeenCalled();
    });

});
