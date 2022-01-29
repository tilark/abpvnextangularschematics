import { Injectable } from '@angular/core';
import { PagedResultDto } from '@abp/ng.core';
import { TestEntityService } from '@proxy/test-entity';
import { TestEntityCreate,
  TestEntityDeviceCreate,
  TestEntityDeviceDto,
  TestEntityDto,
  TestEntityEditDto,
  TestEntitySearch,
  TestEntityService,
  TestEntityUpdateDeviceTag} from '@proxy/test-entity';
import { Observable, Subject } from 'rxjs';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Test1Service {
  private searchCondition = { } as TestEntitySearch;
  searchCondition$ = new Subject<TestEntitySearch>();
  private list = {} as PagedResultDto<TestEntityDto>;
  list$ = new Subject<PagedResultDto<TestEntityDto>>();
  private pageIndex = 1;
  private pageSize = 10;
  pageIndex$ = new Subject<number>();
  pageSize$ = new Subject<number>();
  editFormId = '';
  editFormId$ = new Subject<string>();

  private createItem = {} as TestEntityCreate;
  createItem$ = new Subject<TestEntityCreate>();

  private editItem = {} as TestEntityDto;
  editItem$ = new Subject<TestEntityDto>();

  private isLoadingButton = false;
  isLoadingButton$ = new Subject<boolean>();

  constructor(
    private testEntityService: TestEntityService,
  ) { }

  private broadCast() {
    this.isLoadingButton$.next(this.isLoadingButton);
    this.searchCondition$.next(this.searchCondition);
    this.list$.next(this.list);
    this.editFormId$.next(this.editFormId);
    this.editItem$.next(this.editItem);
    this.pageIndex$.next(this.pageIndex);
    this.pageSize$.next(this.pageSize);
  }
  public getAll() {
    this.broadCast();
  }
  search(input: TestEntitySearch) {
    this.setLoadingButton(true);
    this.searchCondition = input;
    this.searchCondition$.next(this.searchCondition);
    this.testEntityService.getList(input)
      .subscribe(
        a => { this.list = a; this.list$.next(a); },
        () => {},
        () => this.setLoadingButton(false)
        );
  }
  searchConditionChange(pageIndex: number, pageSize: number) {
    this.searchCondition.skipCount = pageSize * (pageIndex - 1);
    this.searchCondition.maxResultCount = pageSize;
    this.pageIndex$.next(pageIndex);
    this.pageSize$.next(pageSize);
    this.search(this.searchCondition);
  }
  searchOrigin(input: TestEntitySearch, pageIndex = 1, pageSize = 10) {
    this.searchCondition = input;
    this.searchConditionChange(pageIndex, pageSize);
  }
  fresh() {
    this.search(this.searchCondition);
  }

  setEditItem(item: TestEntityDto) {
    this.editItem = item;
    this.editItem$.next(item);
  }

  create(item: TestEntityCreate): Observable<string> {
    this.setLoadingButton(true);
    return this.testEntityService.create(item)
      .pipe(map(
      (a) => {
        this.editFormId = a.id;
        return a.id;
      }
      ));
  }

  update(id: string, itemEdit: TestEntityEditDto): Observable<string> {
    return this.testEntityService.update(id, itemEdit)
     .pipe(
        map(a => a.id)
      );
  }

  public setLoadingButton(value: boolean) {
    this.isLoadingButton = value;
    this.isLoadingButton$.next(this.isLoadingButton);
  }
}
