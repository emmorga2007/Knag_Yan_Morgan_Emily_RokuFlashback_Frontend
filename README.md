# Roku Flashback 2022 Winter Term
This is a streaming media service site, similar to Netflix, you can create user account, login through exsisting accounts, and watch video and/or listen to songs on this site.

## Repositories linking
This is the Front end of the whole project.  
You can find Back end build [here](https://github.com/emmorga2007/Kang_Yan_Morgan_Emily_RokuFlashback_Backend)

## Setup

Clone the frontend and backend Roku Flashback repos to your local computer.  
Make sure all repos are in the same wrapping folder in your local WAMP/MAMP directory.  
Make sure your WAMP/MAMP is running. Import the database `db_roku_flashback` found in the database folder.  
Add the provided media files.  

### Database:

Find .sql file in Kang_Yan_Morgan_Emily_RokuFlashback_Backend/database/db_roku_flashback.sql  
Change database credentials according to your system.  
Change the path to link index.php in Kang_Yan_Morgan_Emily_RokuFlashback_Frontend/vue.config.js according to your wrapping folder name.  

### Back end:

In terminal window:  
`cd RokuBack`  
`npm install`  
`node app`  
This should get the back end running on port:3000

### Front end:

In terminal window:  
`cd rokufront`  
`npm install`  
`npm run serve`  
This should get the frontend hosted on your localhost:8080.  
We recommend you open this project in a modern browser, ideally Chrome of firefox. If bug occurs and project opens to Home.vue, use the address bar to navigate to `localhost:8080/#/`.  
  

## Created by:

Developer: [Yan Kang](https://github.com/lightbluecactus)  
Designer: [Emily Morgan](https://github.com/emmorga2007)  
  
## License
MIT License

Copyright (c) 202 Yan Kang and Emily Morgan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.