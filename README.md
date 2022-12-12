----ABOUT PROJECT----

1. Context - Context API has been used to fetch data and delete and update functions are there
2. Modal- Modal overlay for delete popup
3. Pagination - Pagination code
4. Users -- (i) Userlist -- in this we are mapping on celeb data, search functionality, and pagination 
            (ii) Users -- contains the whole display code of celeb data and also editing functionality
            (iii) DeleteUser - Delete user pop up code
            (iv) AgeCal - age calculator function  



----PROBLEM STATEMENT----

You are a famous hacker who has access to a list of the world's most famous celebrities.
You have to create a system where you can view and edit their details to hide their public presence.

Your mission if you choose to accept it, you have to:

1. Create the user interface provided with the design provided -- done

2. The user list item is an accordion,

   - when clicked on, it will cause all the other accordions to collapse and enlarge the one which was clicked. ------ NOT WORKING
   - If clicked on the same one it will collapse.   ---- DONE
   - Manage the + and - icons in open or collapsed mode (collapsed = - | open = +) ---- DONE

3. Fetch the JSON file provided to fill the list of users. (NOTE - YOU CANNOT EDIT THE JSON FILE)

   - You have to calculate the age of the user based on the date of birth provided     ---DONE
   - gender should be a dropdown (Male | Female | Transgender | Rather not say | Other)  ---DONE
   - country is a text field                                                             ---DONE
   - Description is a text area                                                         ---DONE

4. Provide buttons to edit or delete

   - edit mode will let you edit the details of the user in the exact place      ---DONE
   - you can only edit the user if the user is an adult                          ---DONE
   - validations to be implemented where a user cannot                          ---DONE
     -- input text in the age field
     -- input numbers in the nationality
     -- keep anything empty
   - when in edit mode you can either save or cancel                        
     -- save button will be disabled by default and will enable only if the details have changed          ---DONE
     -- save click will update the user's details                                                          ---DONE
     -- cancel will revert the details to their last known state                                         ---DONE
     -- you cannot open another accordion while in edit mode                                            ---NOT WORKING
   - delete mode should alert you if you actually want to delete the user
     -- if yes - the user will be deleted                                                                 ---DONE
     -- if no - do nothing                                                                                ---DONE

5. Typescript is a plus

This message will self destruct in 5... 4... 3... 2... 1... NOT





