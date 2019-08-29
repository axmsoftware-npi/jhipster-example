import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InovioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [InovioSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [InovioSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InovioSharedModule {
  static forRoot() {
    return {
      ngModule: InovioSharedModule
    };
  }
}
