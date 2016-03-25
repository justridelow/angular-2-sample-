/**
 * Created by 212550466 on 3/22/2016.
 */
import {describe, it, beforeEach, expect} from 'angular2/testing';
import {AppComponent} from "../app/app.component";

describe('AppComponent', () => {
    var app: AppComponent = null;

    beforeEach(()=>{
        app = new AppComponent();
    });

    it('Should have a title', () => {

        expect(app.title).toEqual('Tour of Heroes');
    });
});
