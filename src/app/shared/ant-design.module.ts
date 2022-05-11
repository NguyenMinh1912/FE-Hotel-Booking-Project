import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

const antModule = [
  NzDatePickerModule,
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzPageHeaderModule,
  NzButtonModule,
  NzGridModule,
  NzIconModule,
  NzCardModule,
  NzStepsModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzDividerModule,
  NzRadioModule,
  NzSpaceModule,
  NzMessageModule,
  NzTableModule,
  NzInputNumberModule,
  NzNotificationModule,
  NzTypographyModule,
  NzPaginationModule,
  NzListModule,
  NzCheckboxModule,
  NzSkeletonModule,
  NzModalModule,
  NzDatePickerModule,
  NzFormModule,
  NzDropDownModule,
  NzSelectModule,
  NzResultModule,
  NzSwitchModule
];

@NgModule({
  declarations: [],
  imports: [...antModule],
  exports: [...antModule],
})
export class AntDesignModule {}
