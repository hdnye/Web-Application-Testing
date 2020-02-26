import React from 'react';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

// all of the tests for each function should be in their own describe/test block

test('Renders without crashing', () => {
    const dcontainer = render(<Dashboard />); 
    console.log(dcontainer);
});


describe('Dashboard displays all fields', () => {
    const component = render(<Dashboard />)

    
  it('Adds 1 ball until 4 are recorded then resets' , () => {
    const balls = component.getByText(/balls/i) 
//Arrange
    

//Act


//Assert

  })  
   it('Adds 1 strike until 3 are recorded then resets', () => {  
    const strikes = component.getByText(/strikes/i)
//Arrange


//Act


//Assert

 })
  it('Adds 1 foul if 0/1 strike, 0 if 2 strikes', () => {  
    const foul = component.getByText(/foul/i)
//Arrange


//Act


//Assert

 }) 
  it('Adds a hit', () => { 
    const hits = component.getByText(/hits/i)
 //Arrange


//Act



//Assert  
 
    expect(handleHits()).toBeTruthy();
        
    
    
 })
})