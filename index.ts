console.clear();
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const nonUniqueList$ = of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);

nonUniqueList$.pipe(distinct()).subscribe(console.log);
// OUTPUT unique: 1,2,3,4,5
