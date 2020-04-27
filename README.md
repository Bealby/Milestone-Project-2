# JACK FAIRFIELD

---

The aim of this website is to provide an insight into my Papa's life,
Jack Fairfield, during his time in the second world war. During the second world war
Jack Fairfield wrote an extensive journal while serving
under the Royal Army Ordinance Corp. 

This Website aims to entice curiosity into Jack Fairfield's, increasing
the desire to learn more.

The Website will be mainly for family and friends who have been very keen
to learn more about Jack Fairfield's life. As the Website expands
this interest can be expanded to Military Musuems.

## DEMO

---

![Mockup Generator](/documentation/readme/mockup-generator.png/)

A live version of Website can be found
[here](https://bealby.github.io/Milestone-Project-2/)

## CONTENTS

---

## UX

---

Family and friends will seek to learn more about Jack Fairfield,
through imagery and his footprint around the UK during the
Second World War. 

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

- We would love their to be lots of photos of Jack during the war. The more the better!"

- The site must be easy to use and not too complicated. We would like to share Jack's life with others. Esepically Jack's older relatives and friends who are not Some
computer savvy." 

- It would be good to incorporate some of Jack's journal in the Website. Any stories or snippets, to have an example of what he wrote"

- it would be nice to know what sort of person Jack fairfield was and his position in the army"

### SCOPE

To meet the gosls of the users the website needs to be
intuitive and easy to use, taking heed of the less
technically savvy audience.

A collection of photos that embrace and capture Jack
Fairfield's life will be essentual to draw
and retain users interest, to achieve the desire to learn more.

The interactive map will highlight most frequented locations in Jack
Fairfield's journey through the Second World War. A passage from his journal will be included along wiht a relevant phtos.


### STRUCTURE

The website's front page will be the window into the website
with a hero-image centered on the page, which when clicked will
take you into the main website.

The naviagtion bar will have a fixed position with the
links Home, Bio, and Maps.

The Home page will have a large photo that stretches the page,
rotating every 6 seconds with a new photo.

The Bio page will summarise Jack Fairfield's life and history
during the Second World War.

The Map page will show an interactive map that will show locations
using Google Maps API. Each clickable location will bring up a pop
up window with with a passgae from Jack Fairfield's journal
along with a complementary photo.

### SKELETON

Please find my Wireframes for Desktop, Tablet and Mobile
[here](https://github.com/Bealby/Milestone-Project-2/blob/master/documentation/wireframes/jack-fairfield-wireframes.pdf)

### SURFACE

The Website will have a military colour theme with the main color cenetered around a light khaki color, `rgb(209, 200, 171, 1)`,
with white borders, `rgb(255, 255, 255, 1)`, used to divide sections, photos and the map. The text will be of a black color, 
`rgb(0,0,0,1)`, that contrasts well with the khaki theme for clarity of font. 

To distinguish between the section a light green military color will be used, `rgb(190, 210, 195, 1)`, which merges with the Map colors,
with a subtle white border that ensures the Map stands out. 

The 'hover' color used for links will be of a light grey, `rgb(116,111,120,1)`, that helps infomr users that they are on a link. 

For instances of text on photos, a white text will be used to ensure readibility.


## FEATURES

---

The Website's initial page has a potrait photo centrered in middle of page
in front of a background horizontally divided by a white and light khaki
color of, `rgb(209, 200, 171, 1)`. The page is kept minimal and simple with 
lot of 'real estate', to focal the user to the image and text, which draws them
into clicking the link to open the main page.

The main website consists of three separate sections; Home, Bio, and Map. The
website is based on one scrolling page with three sections in the body.

Much of the layout of the website used the Bootstrap Grid System of 'containers',
'rows' and 'columns'; styled by css. This allowed the Website to be clearly
structured and for the content to be responsive.

### FEATURES OF THE WEBSITE

**Navigation Bar:** The slick, simplistic navigation bar is initially grey for
each section, turning black (and remaining black) once clicked. The same feature
applies for all other sections, enabling the user to reference where they are on
the Website. Center `mx-auto` was used to centre Nav Bar horizontally.

**Footer:** Lisa Fairfield’s email and phone number are always visible at the
footer of the page. Each is initially grey, but once clicked are highlighted
black and directly link to either their email or telephone respectively.

**Sections:**

- **Home:** A striking and bold Hero-Image centred over a white background, nestled
   between the `Navbar`(provided by Bootstrap) and Footer.

- **Gallery:** Users are presented with a collage of photos using the Bootstrap
   Grid System.

- **Bio:** A combination of photos and text explaining Lisa’s dreams and desires.
   This includes a link to a reference which opens up in a separate page.

- **Resume:** When the Resume is clicked another tab will be opened to display a
  CV in PDF format. This ensures that the user does not lose their way on the
  website. This is implemented by using `target="_blank"`.

- **Contact:** As well as the contact details in the footer a content section was
  also implemented with the use of `<forms>` in Bootstrap. This allowes for a more
  user friendly UX in communication and helps keep a record of interest in back-end
  developing.

### FEATURES FOR SMALLER DEVICES

**Tablets:** Some minor features were implemented in the UX for tablets to condense
   the Gallery from three to two columns using the bootstrap function
   of `col-md-6 col-lg-4`.

**Mobile:** It was important to collapse the navigation bar on mobile devices but
  at the same time keep the bold, distint heading. A series of block features were
  used to remove a block divider and keep the main header but in a smaller format
  using Bootstrap code `d-none d-sm-block` and `d-block d-sm-none` respectively.

  A media query was implmented, `@media(min-width:992px)`, to reduce the width size
  to `60%` for `<forms>` on the `contact.html`. This allowed for a beter UX on
  larger screens.

  The font size for the Navbar was reduced from `28px` to `20px` using the
  `@media(min-width:640px)` which allowed for a better sizing font
  when the collaspe function kicks-in on mobile devices.

  Font Awesome icons were also removed on mobile devices to increase white space
  and allow for Telephone and Email links to fit cleaner on screen. An
  `d-none d-sm-block` was used for this feature.

### FEATURES LEFT TO IMPLEMENT

Below are a list of features I feel would be beneficial to add to the Website
at a later date when more data/ information can be provided:

**Blog:** As Lisa Fairfield career progresses on added feature could be a
blog page which can be updated on a regular basis. This could also include
a calendar of productions in which Lisa Fairfield is taking part; along with
a comment section for punters/professional fellow actors to express their
views/comments on Lisa Fairfield’s performances.

**Statistics:** Add a feature to enable tabulation of data from potential
clients, as well as statistics of people viewing her site and what they look at.

**Voice/Show Reels:**: An important feature to implement when they become
available are showreels and voicereels, which will be a crucial feature
in promoting Lisa Fairfield.

**Search Function:** A search funciton where you can speculatively look for
performances in which Lisa Fairfield took part.

**Fans/Mechandise:** Develop a “Fans of Lisa Fairfield” page where people
could join/register and buy “Lisa Fairfield” branded goods, e.g. signed photos.

**Booking:** A page for punters to book tickets directly for shows;
negating any booking fees.





