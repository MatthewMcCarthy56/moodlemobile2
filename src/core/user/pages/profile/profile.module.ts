// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoreUserProfilePage } from './profile';
import { CoreDirectivesModule } from '@directives/directives.module';
import { CoreComponentsModule } from '@components/components.module';
import {CoreUserComponentsModule} from "@core/user/components/components.module";
import {CoreUserAboutPage} from "@core/user/pages/about/about";

@NgModule({
    declarations: [
        CoreUserProfilePage,
    ],
    imports: [
        CoreDirectivesModule,
        CoreComponentsModule,
        IonicPageModule.forChild(CoreUserProfilePage),
        TranslateModule.forChild(),
        CoreUserComponentsModule
    ],
})
export class CoreUserProfilePageModule {}

