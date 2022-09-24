hmmm, let's see. Here's what I do. Make an app FirstHexApp that just has one function "getValue", which returns a value. 'hello'. Call that from a test case and make sure it returns that. You can delete this test case later, you won't need it.
 
next, make an object (class, with one method), TestRepo, that answers "hi" (different from "hello").
 
 add one variable to your app that is what the app will use to get info from the db. call it "myRepo".
 
in the constructor for the app, pass in an argument for "myRepo". In this case that will be TestRepo.new().
 
now write a test case checking that when it calls app.getValue(), it gets back "hi".
 
your test code will have 
 
myApp = FirstHexApp.new( TestRepo.new() )
myApp.getValue()
 
there you have connected all the parts of the hexagon, driver port -> app -> driven port and back again, a nice little round trip. 
 
does this make sense?

have you done this yet?
This is called a "Walking Skeleton" - just a barely connected thread through the architecture. People like me always start with this and grow upwards, no matter what the assignment is.