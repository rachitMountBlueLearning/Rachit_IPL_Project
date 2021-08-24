# IPL Dataset Project

## Content

1. [Introduction](#introduction)
2. [Setup](#setup)


## Introduction

This project is deals with managing the data and manipulating it to extract the useful information out of it. This project starts with importing the data from CSV files from [Kaggle](https://www.kaggle.com/manasgarg/ipl) and processing it to answer following questions:

<br>

1. What is the number of matches played per year for all the years in IPL?
2. What is the number of matches won per team per year in IPL?
3. What are the extra runs conceded per team in the year 2016?
4. Which are the top 10 economical bowlers in the year 2015?

<br>

After extracting these information from the provided data, project's task is to export the information in set of JSON files specific to each of the above questions.
 
<br>

## Setup

### 1. Install Git

[Linux](https://git-scm.com/downloads) | [Windows](https://gitforwindows.org/)
---------------------------------------|-------------------------------

### 2. [Install Node](https://nodejs.org/en/download/)

### 3. [Install VSCode](https://code.visualstudio.com/download)

### 4. Clone this repository:

```
git clone https://github.com/rachitMountBlueLearning/Rachit_IPL_Project.git
```

### 5. Go to the working directory:

```
cd Rachit_IPL_Project
```

### 6. Install Node Package Manager(NPM):

```
npm install
```

### 7. Install "papaparse" and "fs" package:

```
npm i papaparse
npm i fs
```

### 8. Start the project:

```
npm run start
```

### 9. Check the outputs

Go to the output directory using:

```
cd src/public/output
```

Refer [here](#output) to see the output for perticular problem.

<br>

## Directory Structure

Following is the directory structure of the project and its description:

* **`src`** : This is the main directory of project containing all of the files and directories required for this project.
  * **`data`** : This directory made to hold original CSV data files.
      * `matches.csv` : Contains IPL match data from year 2008 to year 2017.
      * `deliveries.csv` : Contains IPL deliveries data from year 2008 to year 2017.
  * **`server`** : This directory contains everything running in the backend at the server.
    * `ipl.js`: This file contains the functions which calulates the results to the given problems.
    * `index.js`: This file contains the working of all the imports, exports and sequencing of processes to get the information and store it.
  * **`public`** : This directory contains everything that is available for everyone to access.

    * **`output`** : This directory contains solution to the given problems.
      * `matchesPerYear.json` : This file contains the solution to the 1st problem.
      * `winPerTeamPerYear.json` : This file contains the solution to the 2nd problem.
      * `extrasPerTeam.json` : This file contains the solution to the 3rd problem.
      * `topNEconomicalBowlers` : This file contains the solution to the 4th problem.
* **`node_modules`** : This directory is used by NPM to store third party packages like `papaparse` and `fs`. It will appear once [step 7](#7-install-papaparse-and-fs-package) is performed.


<br>

## Output
Following will be the files containing the solution to corresponding problems after the execution of [step 8](#8-start-the-project).

1. **`matchesPerYear.json`** : What is the number of matches played per year for all the years in IPL?
2. **`winPerTeamPerYear.json`** : What is the number of matches won per team per year in IPL?
3. **`extrasPerTeam.json`** : What are the extra runs conceded per team in the year 2016?
4. **`topNEconomicalBowlers`** : Which are the top 10 economical bowlers in the year 2015?