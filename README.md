# Blog-CRUD-App

This is a React Native App that allows you to add a blog posts, delete it, edit it and displays all the blog posts or a single one as well. 
It uses Json Web Server to save data related to the blog posts and ngrok to communicate the application on the phone with the json server.

Steps to run app: 
  1. Move the "jsonserver" folder outside project directory
  2. Run "npm install" in project directory
  3. Run "npm start" in this directory
  4. Open new terminal window
  5. Run "npm install" in "jsonserver" directory
  6. Run "npm run db"
  7. Open another terminal window
  8. Run "npm run tunnel"
  9. From this terminal window copy the link in front of the "Forwading" heading that would be similar to "http://6462c193913b.ngrok.io" but not same.
  10. Paste this link in the file "jsonserver.js" inside "blogCRUD_App\src\api\jsonserver.js" as the the baseURL;
  11. This link expires every 8 hours so it must be changed every 8 hours OR every time the tunnel is run.

NOTE: ALL 3 TERMINAL WINDOWS NEED TO BE RUNNING AT THE SAME TIME FOR THE PROJECT TO WORK.
