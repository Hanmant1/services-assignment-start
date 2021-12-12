
export class CounterService{
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    activeToInactiveCount(){
       console.log(`Active->Inactive actions ${++this.activeToInactiveCounter}`);
    }

    inactiveToActiveCount(){
        console.log(`Inactive->Active actions ${++this.inactiveToActiveCounter}`);
    }
}