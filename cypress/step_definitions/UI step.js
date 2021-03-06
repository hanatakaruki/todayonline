/// <reference types="cypress" />

import {
    Given,
    Then,
    When
} from "cypress-cucumber-preprocessor/steps";

var slug = require('slug')
var titleOfCategory = ''
var imageOfCategory = ''

Given('user navigates to coods homepage of {string}', (url) => {
    //visit url
    cy.visit(url)
})

When('user scrolls to the category section', () => {
    //check the title which contains text 'Browse Categories' it should be visible
    cy.get('.title').contains('Browse Categories').scrollIntoView()
})

Then('user should see all title and image of category should be equal to table:', (dataTable) => {
    //store dataTable into inputData variable
    let inputData = dataTable.hashes()
    //fetch figure element in page
    cy.get('figure').its('length').then((val) => {
        //compare dataTable length should be equal with total figure in page 
        expect(inputData.length).eq(val)
        //doing looping based on total figure page
        for (let i = 0; i < val; i++) {
            //check span (category title) should have same text with table data, and check it should be visible too
            cy.get('figure').find('span').eq(i).should('have.text', inputData[i].category_name).should('be.visible')
            //check image (category image) should be visible
            //reference: https://stackoverflow.com/questions/51246606/test-loading-of-image-in-cypress
            cy.get('figure').find('img', {
                    includeShadowDom: true
                }).eq(i)
                .filter('[src]')
                .filter(':visible')
                .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)))
            //check image should have data-src (source for image) and should contain with category name with slug style
            cy.get('figure').find('img').eq(i).should('have.attr', 'data-src').should('contain', slug(inputData[i].category_name))
        }
    })
})

Then('the {string} should be visible', (elementName) => {
    switch (elementName) {
        case "Browse Categories":
            cy.get('.title').contains('Browse Categories').should('be.visible')
            break;

        case "title of category":
            cy.get('figure').find('span').should('be.visible')
            cy.get('figure').find('span').its('length').then((val) => {
                titleOfCategory = val
            })
            break;

        case "images of category":
            cy.get('figure').find('img').should('be.visible')
            cy.get('figure').find('img').its('length').then((val) => {
                imageOfCategory = val
            })
            break;
    }
})

Then('user should see {string} displayed on the page',(elementName) => {
    switch (elementName) {
        case "category heading":
            cy.get('.title').contains('Browse Categories').should('be.visible')
            break;

        case "category name":
            cy.get('figure').find('span').should('be.visible')
            cy.get('figure').find('span').its('length').then((val) => {
                titleOfCategory = val
            })
            break;

        case "category image":
            cy.get('figure').find('img').should('be.visible')
            cy.get('figure').find('img').its('length').then((val) => {
                imageOfCategory = val
            })
            break;
    }
})

Then('total title of category and images of category should be equal',()=>{
    expect(titleOfCategory).eq(imageOfCategory)
})

Then('total category name and category image must match',()=>{
   if(titleOfCategory>0 && imageOfCategory>0){
    expect(titleOfCategory).eq(imageOfCategory)
   }else{
       cy.log('wait until we got data about category name and category image')
   }
})