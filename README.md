# JACK FAIRFIELD

---

The aim of this website is to provide an insight into my Papa's life,
Jack Fairfield, during his time in the second world war. During which
time Jack Fairfield wrote an extensive journal while serving
under the Royal Army Ordinance Corp. 

This Website aims to entice curiosity into Jack Fairfield's journey,
through the second wold war, increasing users desire to learn more.

The Website will mainly for family and friends who have been very keen
to learn more about Jack Fairfield's life. As the Website expands however,
this interest could be expanded to Military Musuems and the general public.

## DEMO

---

![Mockup Generator](/assets/images/mockup-website/mockup-website.png/)

A live version of Website can be found
[here](https://bealby.github.io/Milestone-Project-2/)

## CONTENTS

---

## UX

---

Family and friends will seek to learn more about Jack Fairfield,
through imagery, passages from jounal and exploring his footprint
around the UK during the Second World War. 

### STRATEGY

The main focus of this Website is to give family and friends
an insight into Jack Fairfield's life. It aims to
bring to life Jack Fairfield's journal with
the use of an interactive map; along with private
photos, passages and areas he visited
and resided in.

The Website needs to be suitable for mobile devices,
suiting users who want to browse the website while on
the move. The desktop and tablet versions however
will provide a more visual and exapansive user experience.

User Stories:

- "We would love their to be lots of photos of Jack during the war. The more the merrier!"

- "The site must be easy to use and not too complicated. We would like to share Jack's life with others.
Espically Jack's older relatives and friends who are not very computer savvy." 

- "It would be good to incorporate some of Jack's journal in the Website. Any stories or snippets, to have an example of what he wrote"

- "It would be nice to know what sort of person Jack fairfield was and his position in the army"

### SCOPE

To meet the goals of the users the website needs to be
intuitive and easy to use, taking heed of the less
technically savvy audience.

A collection of photos that embrace and capture Jack
Fairfield's life will be essentual to draw
and retain users interest, to achieve the desire to learn more.

The interactive map will highlight the most frequented locations in Jack
Fairfield's journey through the Second World War. A passage from his journal
will be included along wiht a relevant phtos.


### STRUCTURE

The website's front page will be the window into the website
with a hero-image centered on the page, which when clicked will
take you into the main website.

The naviagtion bar will have a sticky position with the
links Home, Bio, and Maps.

The Home page will have a large photo that stretches the page,
rotating every 6 seconds with a new photo.

The Bio page will summarise Jack Fairfield's life and history
during the Second World War.

The Map page will show an interactive map that will show locations
using Google Maps API. Each clickable location will bring up a pop
up window with a passgae from Jack Fairfield's journal
along with a complementary photo.

### SKELETON

Please find my Wireframes for Desktop, Tablet and Mobile
[here](https://github.com/Bealby/Milestone-Project-2/blob/master/documentation/wireframes/jack-fairfield-wireframes.pdf)

### SURFACE

The Website will have a military colour theme with the main color cenetered
around a light khaki color, `rgb(209, 200, 171, 1)`, with white
borders, `rgb(255, 255, 255, 1)`, used to divide sections, photos and the map.
The text will be of a black color, `rgb(0,0,0,1)`, that contrasts well with the
khaki theme for clarity of font. 

To distinguish between the sections a light green military color will be
used, `rgb(190, 210, 195, 1)`, which merges with the Map colors, along
with a subtle white border that ensures the Map stands out. 

The 'hover' color used for links will be of a light grey, `rgb(116,111,120,1)`,
that helps inform users that they are a clickable link. 

For carousel images, captions will have a white color font to ensure
calirty of reading.

The main font used for this Website will be `'Special Elite`. from `Google Fonts`.
A fitting type font with a military feel to it.


## FEATURES

---

The Website's initial page (`index.html`) has a potrait photo centered in the
middle of the page in front of a background horizontally divided by a white and light khaki
color of, `rgb(209, 200, 171, 1)`. This page will be kept minimal with large
'real estate', to focal the user to the image and text; drawing them
into clicking the link to open the main page.

The Main Web page consists of three separate sections; Home, Bio, and Map. The
website is based on one scrolling page with three sections in the body.

Much of the layout of the website used the Bootstrap Grid System of 'containers',
'rows' and 'columns'; styled by css. This allowed the Website to be clearly
structured and for the content to be responsive.

### FEATURES OF THE WEBSITE

**MAIN PAGE**

**Navigation Bar - Desktop:** The colour theme of light khaki, `rgb(209, 200, 171, 1)`, is used
for the background of the `navbar` with a thumbnail potrait of Jack Fairfield, indented
from the left. Next to which is the name `Jack Fairfield` with a small heading underneath,
titled `War Diaries`. This helps describe the topic of the Website and can be clicked to
take you back to the initial page of `index.html`.

There are then three main links, `Home`, `Bio`, and `Maps` indented from the right (the three 
main sections of the Website). When hovered over by the mouse, they become responsive with the 
color changing to a light grey of, `rgb(116,111,120,1)`. This ensures an intuitive reaction to click.

**Navigation Bar - Smaller Devices:**

For tablets and mobiles the text is reduced in size using `Media Queries`. The thumbnail potrait is
also removed for beter spacious viewing in the navigation bar on tablets.

For mobile devices the `Bootstrap` function was used to collaspe the navbar, with an Army Badge,
embroidered gold, being the icon to click for the drop-down menu of links.

**Sections:**

- **Home:** The Home section of the Web page should immediatey grab the attention of the users
with a `Bootstrap Carousel` feature that loops through a montage of photos that change every 6
seconds. The images are large and expand the full page. A highly attractive and enthraling user
experience. Captions in white text give a description for each photo.

- **Bio:** Using `Bootstrap's Display Properties` features, a complex structure, using `hidden` and `visable`
element properties, were used to optimise layout and user experience on on different devices.
A `thumb` icon pointed downwards is also included at the end of the bio section to draw people down towards
the map. This icon was taken from `Font Awesome`.

For the deaktop, the layout consisits of text nestled between two photos either side, drawing the reader into reading
the text. `blockquotes`were used to ensure quotes from Jack Fairfield's journal stand out. 

For tablet displays, the section was condensed two columns, with photos running vertically
from the left and text vertically from the right. This ensures a better reading and visual experience
for users on tablets.

For Mobile displays one photo is removed using `bootstrap's Display Properties`. This allows less
scrolling on a mobile and not over saturate with photo. Text was also changed from `justify` to
`left` on mobile devices using `Media Queries` to allow for text to be better aligned.

- **Map:** 

The Map section is introduced with a short instruction to users with a Marker key accordingly. Custom Markers have been set up
(Red Flags), that are clustered together where appropriate. Each Red Flag upon click will, open an information Window that will 
pop up a section of passage from Jack's Journal along with a photo. 

The Map itself has a Retro Theme provided by Google that gives a milatary feel to the Map and complements the Website theme. 

**Footer:** A copyright feature is stated at the footer of the page to confirm ownership of all content and 
photos on Website.

### FEATURES LEFT TO IMPLEMENT

Below are a list of features I feel would be beneficial to add to the Website
at a later date when more data/ information can be provided:

**More Locations with Info Windows:** 
Jack Fairfield has many further stories from his journal which could increase the Map experience
further still. This would further increase the intereactive experience.

**The full Length journal:**
Jack Fairfield's journal could be added to the Website in it's entirety with in a separate Web Page, that could have 
a sub directory for each chapter.

**More photos**: 
Further photos coudl be added to include family trees and friends and partners stories

**Contact Form:** A page for people to get in contact if they have any related stories or infomration to provide.






Support

https://developers.google.com/maps/documentation/javascript/marker-clustering
https://developers.google.com/maps/documentation/javascript/custom-markers
Inspiration From: Pradip Debnath: https://www.youtube.com/watch?v=Xptz0GQ2DO4
https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow
Tim Nelson: Code Institue Support
https://developers.google.com/maps/documentation/javascript/examples/style-selector