# JACK FAIRFIELD

---

The aim of this website is to provide a descriptive activity
about my Papa, Jack Fairfield war years. The website will 
be mainly for family and friends who have been very keen
to learn more about Jack Fairfield's life during the war
years.

---

## UX

---

Family and friends will seek to learn more about Jack Fairfield,
through imagery and his footprint around the UK during the
Second World War. 

### STRATEGY

The main focus of this website is to give family and friends
an insight into Jack Fairfield's life. It aims to
bring to life Jack Fairfield's travels with
the use of an interactive map; along with private
photos and brief descrioption of areas he visited
and resided in.

The website needs to be suitable for mobile devices,
suiting users who want to browse the website while on
the move. The desktop and tablet versions however
will provide a more visual and exapansive user experience.

User Stories:

?????

### SCOPE

To meet the gosls of the users the website needs to be
intuitive and easy to use, taking heed of the less
technically savvy audience.

A collection of photos that embrace and capture Jack
Fairfield's life will be essentual to draw
and retain users interest, to achieve the desire to learn more.

The interactive map will highlight key locations in Jack
Fairfield's journey through the Second World War. A brief 
but informative summary for each of these locations will 
be provided along with a photo relevent to the location.

### STRUCTURE

The website's front page will be the window into the website
with a hero-image centered on the page, which when clicked will
take you into the main website.

The naviagtion bar will have a fixed but sticky position with the
links Home, Bio, and Maps.

The Home page will have a large photo that stretches the page,
rotating every 6 seconds with a new photo.

The Bio page will summarise Jack Fairfield's life and history
during the Second World War.

The Map page will show an interactive map that will show locations
using Google Maps API. Each clickable location will bring up a pop
up window with information on the location along with a complementary
photo.

### SKELETON

Please find my Wireframes for Desktop, Tablet and Mobile
[here](https://github.com/Bealby/Milestone-Project-2/blob/master/documentation/wireframes/jack-fairfield-wireframes.pdf)

### SURFACE



## FEATURES

---

The website consists of five separate sections; Home, Gallery, Bio, Resume and
Contact. These are centred between a navigation bar and footer that remain constant
and similar throughout thus ensuring that the name and contact details
are always visible for potential agents.

The website is divided into four separate pages that can be clicked
accordingly. It was decided against having too much content on one single page
as the user could be found scrolling endlessely through images on their smaller
devices. It also helps keep to the concise, simplistic selling goal of the
Website, which requires only one click to get in contact with Lisa Fairfield.

Much of the layout of the website used the Bootstrap Grid System of 'containers',
'rows' and 'columns'; styled by css. This allowed the Website to be clearly
structured and for the content to be responsive.

### FEATURES OF THE WEBSITE

**Header:** A bold, definitive font that can always be clicked to go back to
index.html

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





