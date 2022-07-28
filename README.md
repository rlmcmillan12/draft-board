# Draft Board

https://user-images.githubusercontent.com/102312639/181582794-a90b08fa-0012-4d4a-b214-70879638c353.mp4



Draft board is a concept that combines an informational public website for a brewery or taproom, and an authenticated back-end. The back end allows the user to access a beer library and displaying a draft board on a TV through Chromecast.

---

## Table of Contents

1. Introduction
2. Contributor
3. Technologies
4. Usage
5. General Information

---

## Introduction

Draft Board was created for the Capstone Project for the Full Stack Web Design bootcamp at DigitalCrafts. It was meant to combine all the skills learned from the course. It uses the latest React/Redux front end technologies with and express server and a PostgreSQL database.

---

## Contributor

This project was created and coded by

- Ryan McMillan <https://github.com/rlmcmillan12>

---

## Technologies

- React 
- React-router
- Redux
- Redux-toolkit
- JavaScript
- HTML5
- CSS3
- Styled-components
- Chromecast
- Express
- Express-sessions
- PostgreSQL
- Sequelize

---

## Usage

To access the application open a web browser and navigate to 
    [Draft Board](https://draft-board-rlm.herokuapp.com/)
 
To login go to the bottom of the page. There is a login link in the footer. Entre a username and password of user or manager to access the back end.

To display the draft board there must be a devise that can handle be cast to with Google Chromecast, and the device casting must be on the same network as the receiver.

## General Information

This project is an informational web site and draft board app for an imaginary brewery. Navigate to the page for details about the brewery and a current draft lineup. Users can also login via a hidden link in the footer. Once logged in the user is taken to the draft board page. Depending on the user status what shows up will be different. There are three different kinds of users: administrators, managers, and users. An administrator user is the only user that can create others, and can assign on of the three types of profiles to that user. Managers and administrators will have access to edit the beer database. They can either add beers to it or edit existing beers in the database.  Users, managers, and admin have access to the draft board.  The user can select a tap to change and a beer from the database to update it with. Once changed the draft board will update and so will the current draft lineup on the public site. The back end also has a button to cast the draft board to a TV. The TV must be able to handle Chromecast or have a Chromecast receiver device connected to it. Simply click the cast button on the draft board dashboard and select the device you would like to cast to.  If a beer is changed during casting it will automatically update without having to recast.
