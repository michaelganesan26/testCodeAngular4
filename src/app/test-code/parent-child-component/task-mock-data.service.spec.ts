import { TestBed, inject } from '@angular/core/testing';

import { TaskMockDataService } from './task-mock-data.service';

describe('TaskMockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskMockDataService]
    });
  });

  it('should be created', inject([TaskMockDataService], (service: TaskMockDataService) => {
    expect(service).toBeTruthy();
  }));
});
