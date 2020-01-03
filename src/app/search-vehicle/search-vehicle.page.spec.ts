import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchVehiclePage } from './search-vehicle.page';

describe('SearchVehiclePage', () => {
  let component: SearchVehiclePage;
  let fixture: ComponentFixture<SearchVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
