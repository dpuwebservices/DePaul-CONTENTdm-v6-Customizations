CONTENTdm Customization Code



The scripts, css and html files listed below were used to add customize the landing page of CONTENTdm 6.1 to allow for an updated slideshow, drop down menus, and placement of the search bar in a more prominent area on the page.  These changes have been applied from 6.0 – 6.1 and should remain in place as CONTENT performs upgrades.  

Scripts: 

navbar.js
carousel.jquery.js
jquery.easing.1.3.js
jquery.cycle.all.latest.js
menu.js

CSS

dpu_cdm.css
menu.css

HTML
index.html

--------------------------------------------------
Modified Landing Page – Image Carousel and Search:  

Scripts Instructions:  

The following scripts should be uploaded to the “Upload Top Includes” area, located under Custom Scripts in the Website Configuration Tool. 
carousel.jquery.js – Slideshow
jquery.easing.1.3.js- Slideshow


CSS Instructions
The following CSS files should be uploaded to the “Custom CSS” area, located under Custom CSS in the Website Configuration Tool.  
dpu_cdm.css



Custom Template:  
Instead of using the default template, you will need to upload the index.html file to replace the default CONTENTdm file.  

Customizations to the index.html file. 
 
 **Image files can be stored anywhere.  Our images are stored via the CONTENTdm wysiwyg editor, but if you have another location just replaced the image files with the absolute path where the image resides.  

**  The index.html file includes inline style that place the search bar in a more prominent location.  

1.	Replace the images and links to collections with your own links.  The slideshow images are set at 980px by 200px, but this can be resized using the included CSS file. 
2.	If you wish to hide the 2nd Tier collections box, or find it unnecessary, you can update the dpu_cdm.css file to set the ID #2nd_collections display to none.  

Under Page Types >> Home Page, choose “ More homepage configurations”.  In the “Choose a homepage template” box, choose “Custom (replace with my own HTML page)” and upload the customized index.html page.  Once the file is uploaded you will need to click on “save changes” and then “publish” before the changes will show on your CONTENTdm implementation.  

If you would like to revert back at any point, simply choose “Default CONTENTdm template” under the “More homepage configurations”, click “Save” and then “Publish” to revert your site back.


------------------------------------------

Modified Navigation for CONTENTdm – MEGA Menu 

Script Instructions: 

The following two scripts should be uploaded to the “Upload Top Includes” area, located under Custom Scripts in the Website Configuration Tool. 

navbar.js – MegaMenu Dropdowns

The following script should be uploaded to the “Upload Bottom Includes” area, located under Custom Scripts in the Website Configuration Tool. 
Menu.js- megamenu	
1.	Replace the links and text in the menu.js file with links to your own collections.  This template is set to include two categories of links, but can be adjusted to only include one category or more

CSS Instructions 

The menu.css file should be uploaded to the Custom CSS area, located under Custom CSS in the Website Configuration Tool.  
menu.css


------------------------------------------
Google Analtyics

We store our google analtyics code in a separate script that is uploaded to the “Upload Bottom Includes” area, located under Custom Scripts in the Website Configuration Tool. Our tracking code is set to include a custom variable so that we can view all content in one place.  You can include any tracking code that you choose, or leave this out completely.  