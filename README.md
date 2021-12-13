## Using the app

Should be able to run as normal. My BrowserSync plugin is expecting you to have Valet installed and the directory to be called ssl-tester with a valet extension of .test. Without Valet you just need to update the webpack config with your setup.

## Things I would have done if I had more time

-   Full unit testing, currently I've just chosen a few examples as most of the unit tests would be exactly the same
-   Added the multiselect in the 'new test' form. The idea was to have it be a select when the user only has the default contact group options then a multiselect once they've added more contact groups.
-   Form validation. The API seemed to work whatever I posted, so there were no server errors to handle. I would have also added a validation rule to the url field to make it required more than just the protocol.
-   e2e testing.

## Lack of redesign for monitor list page

I didn't really have much inspiration for the SSL monitor list page. That page specifically will just continue to do well as a table as it's only function is to be informative. The API also didn't contain a lot of information that should be in the table so what I've ended up with here is something that looks super basic.
