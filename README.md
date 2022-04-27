# NodeJS Madlibs Project

NodeJS project that takes user's name and age and generates a Madlibs story unique and repeatable to that combination.
<br />&nbsp;
<br />&nbsp;

## Table of Contents
[Description](#description), 
[How to Use](#how-to-use), 
[License](#license), 
[Author](#author)
<br />&nbsp;
<br />&nbsp;

## Description
The goal of this code challenge was to create a REST API that could take a user's name and one other input and generate data semi unique and repeatable to that combination.  I chose a Madlibs format.

The way it works, is it converts the input name into an int based on the ascii code of the letters (limited to the first 10 chars).  It then multiplies that int by the input age to generate a mostly unique code.  That code is used to generate madlib type answers.

Madlibs is a childrens' game where words are chosen to be inserted into placeholder values in a story.  This can often generate humorous results.

The design pattern used is a traditional MVC.  The Model folder contains the data for the madlib answers stored in array strings and also the logic for creating the madlib story.  I used Body Parser to parse form data POSTed from the front page.

The Views folder contains one html file to display the form and another for the results.  I used Embedded JS and Express to best display the end story in a way that could be easily styled.

The Control folder contains my routes and leaves it to my model files to do as much of the logic as possible.
<br />&nbsp;
<br />&nbsp;


## How to Use

The site is deployed at Digital Ocean here http://143.198.238.127:8000/

The site can also be used as a REST API at http://143.198.238.127:8000/api  To access this with POSTMAN, send the API address a post, and in the body use(values can be changed): 

{ 

    "inputName": "Steve",
    "inputAge": "27"    
}
<br />&nbsp;
<br />&nbsp;

## License
Copyright (c) 2022, Brian Linville

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies,
either expressed or implied, of the FreeBSD Project.
<br />&nbsp;
<br />&nbsp;


## Author
I'm Brian.  I grew up in Sacramento, California and only moved to the bay area in 2019.