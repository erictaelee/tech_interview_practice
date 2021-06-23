# Background: You work for a clothes subscription company that sends clohtes to people based on their personal size, style, and prefereces. When you sign up for an account, you fill out a questionnaire, and then a personal stylist will curate and send you 5 pieces  of clothes to try on in a single package. You try on what you like, return the rest, and only pay for what you keep.

# You're tasked with creating their internal application that keeps track of purhcases and inventory.

1. Which clohtes were sent in each package to each customer.
2. Add to the schema so we can track which clothes each customer kept, and which clothes were returned. 

Users           Clohtes-In-A-Box            Boxes                 Clothes
-------         --------                   -------                --------
Name             Clohtes_ID/SKU            User_ID                 
Size             Box_ID                                            
Style                                      Sent Date               Name (Red Medium Polo Shirt)
Preferences                                Tracking Number         
