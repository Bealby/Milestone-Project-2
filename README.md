# Jack Fairfield

---

The aim of this Website is to provide an insight into the life of my Papa,
Jack Fairfield, during his time in the second world war. During the war
Jack Fairfield wrote an extensive journal while serving
under the Royal Army Ordnance Corp.

This Website is a taster, aiming to entice curiosity into Jack Fairfield's
journey through the second wold war, increasing users desire to learn more
from journal.

The Website will mainly be for family and friends who have been very keen
to learn more about Jack Fairfield's life. As the Website expands however,
this interest could be expanded to Military Musuems and the general public,
including the musuem in his home town of Methilhil, Fife, Scotland.

## Demo

---

![Mockup Generator](/documentation/readme/mockup-website.png/)

A live version of Website can be found
[here](https://bealby.github.io/Milestone-Project-2/)

## Contents

1.[UX](#ux)

- [Strategy](#strategy)
- [User Stories](#user-stories)
- [Scope](#scope)
- [Structure](#structure)
- [Skeleton](#skeleton)
- [Surface](#surface)

2.[Features](#features)

- [Features of the Website](#features-of-the-website)
- [Features Left to Implement](#features-left-to-implement)

3.[Technologies Used](#technologies-used)

4.[Testing](#testing)

- [Automated Testing](#automated-testing)
- [Non-Automated Testing](#non-automated-testing)
- [Fixes](#fixes)

5.[Deployment](#deployment)

- [Publish GitHub Repository](#publish-github-repository)
- [Clone GitHub Repository](#clone-github-repository)

6.[Credits](#credits)

---

## UX

---

Family and friends will seek to learn more about Jack Fairfield,
through imagery, passages from the journal and exploring his journeys
around the UK during the Second World War.

### Strategy

The main focus of this Website is to give family and friends
an insight into Jack Fairfield's life. It aims to
bring to life Jack Fairfield's journal with
the use of an interactive map; along with private
photos, passages and areas he visited
and resided in.

The Website needs to be suitable for mobile devices,
suiting users who want to browse the Website while on
the move. The desktop and tablet versions however
will provide a more visual and expansive user experience.

#### User Stories

- "We would love there to be lots of photos of Jack during the war.
    The more the merrier!"

- "The site must be easy to use and not too complicated. We would like
    to share Jack's life with others, especially Jack's older relatives and
    friends who are not very computer savvy."

- "It would be good to incorporate some of Jack's journal in the Website.
    Any fun anecdotes or snippets, giving examples of what he wrote"

- "It would be very interesting to learn more about Jack's personality and
    how he progressed in his Army career.

### Scope

To meet the goals of the users the Website needs to be
intuitive and easy to use, taking heed of the less
technically savvy audience.

A collection of photos that embrace and capture Jack
Fairfield's life will be essential to draw
and retain users interest, to achieve the desire to learn more.

The interactive Map will highlight the most frequented locations
in Jack Fairfield's journey through the Second World War. A passage
from his journal will be included along with a relevant photo.

### Structure

The Website's front page will be the window into the Website
with a hero-image centered on the page. His name and date of
duration of life will be displayed under the image, with a
clickable link, `Read More`, taking you into the main Website.

The naviagtion bar will have a `sticky-position` with the
links `Home`, `Bio`, and `Maps`.

The Home page will have a large photo that stretches the page,
rotating every 6 seconds with a new photo.

The Bio page will summarise Jack Fairfield's life and history
during the Second World War.

The Map page will be interactive and show locations
using Google Maps API. Each clickable location will bring up a pop
up window with a passage from Jack Fairfield's journal
along with a complementary photo.

### Skeleton

Please find my Wireframes for Desktop, Tablet and Mobile
[here](https://github.com/Bealby/Milestone-Project-2/blob/master/documentation/wireframes/jack-fairfield-wireframes.pdf)

### Surface

The Website will have a military colour theme with the main colour cenetered
around a light khaki colour, `rgb(209, 200, 171, 1)`, with white
borders, `rgb(255, 255, 255, 1)`, used to divide sections, photos and the Map.
The text will be of a black colour, `rgb(0,0,0,1)`, which contrasts well with the
khaki theme for clarity of font.

To distinguish between the sections a light green military colour will be
used, `rgb(190, 210, 195, 1)`, which merges with the Map colours, along
with a subtle white border that ensures the Map stands out.

The `hover` colour used for the links will be of a light grey colour,
`rgb(116,111,120,1)`, that helps inform users that the links are clickable.

For carousel images, captions will have a white colour font to ensure
clarity of reading.

The main font used for this Website will be `'Special Elite`, from `Google Fonts`.
A fitting type font with a military feel to it.

[Go to top](#contents)

## Features

---

The Website's initial page (`index.html`) has a portrait photo centered in the
middle of the page in front of a background horizontally divided by a white and
light khaki colour of, `rgb(209, 200, 171, 1)`. This page will be kept to a minimum,
with lots of 'real estate', to focus the user on the image and text; drawing them
into clicking the link to open the main page.

The Main Web page consists of three separate sections; Home, Bio, and Map. The
Website is based on one scrolling page with three sections in the body.

Much of the layout of the Website used the `Bootstrap Grid System` of `containers`,
`rows` and `columns`; styled by css. This allowed the Website to be clearly
structured and for the content to be responsive.

### Features of the Website

#### Main Page

**Navigation Bar:**

- **Desktop:** The colour theme of light khaki,
    `rgb(209, 200, 171, 1)`, is used for the background of the `navbar` with
    a thumbnail potrait of Jack Fairfield, indented from the left. Next to
    which is the name `Jack Fairfield` with a small heading underneath, titled
    `War Diaries`. This helps describe the topic of the Website and can be
    clicked to take you back to the initial page of `index.html`.

    There are then three main links, `Home`, `Bio`, and `Maps` indented
    from the right (the three main sections of the Website). When hovered over by
    the mouse, they become responsive with the colour changing to a light
    grey colour, `rgb(116,111,120,1)`. This ensures an intuitive reaction to click.

- **Smaller Devices:**
    For tablets and mobiles the text is reduced in size using `Media Queries`.
    The thumbnail potrait is also removed for beter spacious viewing in the
    navigation bar on tablets.

    For mobile devices the `Bootstrap` function was used to collaspe the navbar,
    with an Army Badge, embroidered gold, being the icon to click for the drop-down
    menu of links.

**Sections:**

- **Home:** The Home section of the Web page should immediatey grab the
    attention of the users with a `Bootstrap Carousel` feature that loops
    through a montage of photos that change every 6 seconds. The images
    are large and expand the full page. A highly attractive and enthraling
    user experience. Captions in white text give a description for each photo.

- **Bio:** Using `Bootstrap's Display Property` features, a complex structure,
    using `hidden` and `visable` element properties, were used to optimise layout
    and user experience on different devices. A `thumb` icon pointed downwards is
    also included at the end of the Bio section to draw people attention down
    towards the map. This icon was taken from `Font Awesome`.

    For the deaktop, the layout consisits of text nestled between two photos either
    side, drawing the reader into reading the Bio. `blockquotes`were used to ensure
    quotes from Jack Fairfield's journal stand out.

    For tablet displays, the section was condensed to two columns, with photos
    running vertically from the left and text vertically from the right. This
    ensures a better reading and visual experience for users on tablets.

    For Mobile displays one photo is removed using `bootstrap's Display Properties`.
    This allows less scrolling on a mobile and not over saturating the mobile
    experience with photos. Text was also changed from `justify` to `left` on
    mobile device, using `Media Queries`, to allow for text to be better aligned.

- **Map:** The Map section is introduced with a short instruction to users
    with a key illustrating the symbols on the Map. Custom markers have been set
    up (Red Flags), that are clustered together where appropriate. Each Red Flag,
    once clicked, will open up an information window that will pop up a section
    of passage from Jack's Journal along with a photo.

    The Map itself has a Retro Theme provided by `Google` that gives a milatary feel
    to the Map, complementing the Website theme.

- **Footer:** A copyright feature is stated at the footer of the page to confirm
    ownership of all content and photos on Website.

### Features Left to Implement

Below are a list of features I feel would be beneficial to add to the Website
at a later date when more data/ information can be provided:

**More Locations with Info Windows:**
Jack Fairfield has many further stories from his journal which could increase
the intereactive Map experience.

**Include the Full Journal:**
Jack Fairfield's journal could be added to the Website in it's entirety,
with separate sub links for chapters.

**Add More locations with Informations Windows**:
Further photos could be added to include family tree information and other
relatives and friends who served in the war. Especially Jack's brothers
who also had active war services.

**Contact Form:** A page for people to get in contact if they have any related
stories or information to share.

**Music:** Play some music in the background (1940's genre), that plays on
entering site. This could be initiated using jquery, where it loops continuosly
or plays only a certain amount of times. There shoud be a function to turn sound
off. Along with this a playlist of World War Two songs mentioned in
Jack Fairfield's journal could be listed with the option to play
accordingly.

**Photographs**
Photos provided on the Map could include a feature that allows the photos to be
enlarged once clicked and be viewed in better detail. Or have a separate
section in Website for a gallery of photos that are referenced back to the Map.

[Go to top](#contents)

## Technolgies Used

---

The following technolgies were used in this project:

- [Balsamiq Wireframes](https://balsamiq.com/wireframes/desktop/) - Allowed
   preliminary designs to be drawn up of Website
- [GitHub](https://github.com/) - Used to store repository and deploy Website
- [GitPod](https://gitpod.io/workspaces/) - A platform used for hard coding
   of Website
- [HTML](https://en.wikipedia.org/wiki/HTML) - Markup language of Website
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Used to style
   HTML elements
- [BOOTSTRAP](https://getbootstrap.com/) - A famework for building responsive
   Websites where the powerful Grid system was used along with styling
- [Google Fonts](https://fonts.google.com/) - Programme used to import main
   fonts in Website: **Playfair Display** and **Calligraffitti**
- [Font Awesome](https://fontawesome.com/) - Programme used to import icons
   for Footer in Website: **far-envelope** and **fas fa-phone**
- [JavaScript](https://www.javascript.com/) - Used in collabration with
   Bootstrap to collaspe Navigation Bar for small devices and Google Maps
- [W3C](https://validator.w3.org/) - Used to validate HTML code
- [WSC](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [jQuery](https://jquery.com/) - Used to implement Navigation Collaspe feature
   JavaScript Plugin
- [Popper](https://popper.js.org/) - Used to implement Navigation Collaspe
   feature JavaScript Plugin
- [Markdown Lint](https://github.com/Bealby/markdownlint) - Used for validation
    checks on README.md content
- [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse/) -
    Helped tp improving the quality of Website
- [Chrome Developer Tools](https://www.google.com/chrome/dev/Google) - A useful
   developing tool in Chrome to edit pages and diagnose problems
- [Responsive Design](http://ami.responsivedesign.is/) - Free software
    to generate Mockup of Website on different devices
- [Validate Javascript](https://validatejavascript.com//) - Used to validate javascript
- [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial) -
  For API key and Javascript Map options

[Go to top](#contents)

## Testing

---

### Automated Testing

[W3C](https://validator.w3.org/) - All HTML files with their data were directly
    inputted in the Mark-Up Validation Service.
    The results:`Document checking completed. No errors or warnings to show.`

[WSC](https://jigsaw.w3.org/css-validator/) - CSS data was directly inputted in
    the CSS Validation Service. The results: `Congratulations! No Error Found.`

[Lighthouse Audit](https://developers.google.com/web/tools/lighthouse/) -
A feature in Chrome Developing Tools - Lighthouse Audit - was carried out
on Mobile and Desktop to assess **Performacne**, **Accesibility**,
**Best Practices** and **CEO**.

- **Mobile:** An overall average of 80% was received.
- **Desktop:** An overall average of 77% was recieved.

`Performance` scored the lowest percentage. 53% and 63% on Desktop and Mobile
respectively. This low score is mainly due to the large number of images that
the Website contains; as well as the google Map feature; causing longer
loading time.

Potential fixes could be to consider a lazy-loading offscreen feature,
which allows critical resources to load first. It also could be an option
to separate the sections into individual `html` pages, so that all images
and Maps are not loading at the same time.

[Validate Javascript](https://validatejavascript.com/) - Javascript files
were uploaded in in the Validate Javascript. Overall there were no errors
that needed to be changed and the javascript passed general standards.

[Chrome DevTools - Console](https://developers.google.com/web/tools/chrome-devtools/) -
Navigating through the Website rendered no critical fails/errors
in the console that were necessary to fix.

### Non-Automated Testing

### index.html

- Click `READ MORE` link and ensure it redirects you to `main.html`.
- When hovering over `READ MORE` ensure lighter grey colour occurs.

### main.html

#### Navigation Bar Links

- Click `thumbnail` image, `Jack Fairfield` and `War Diaries` and ensure
  they redirect you to `index.html`.
- Click through `Home`, `Bio`, and `Maps` links,
  ensuring each, when hovered over turn light grey, and direct you to the
  correct sections.
- Click each navigation link and randomaly navigate to other links.
- For each link navigated to (`Home`, `Bio`, and `Maps`), ensure main
  header `thumbnail` image, `Jack Fairfield` and `War Diaries` continue
  to redirect you to index.html.
- Ensure navigation collapse Bootstrap feature kicks in on mobile devices
  and the links continue to work correctly as process above.

#### Carousel

- Ensure carousel of photos are looping correctly and change every 6 seconds
  on all devices. (It should be noted that the carousel stops looping or
  changing through photos once mouse is hovered over carousel).
- Ensure photos on carousel can be manually clicked through on all devices.

#### Bio

- For Desktop devices ensure the Bio section is divided into three columns
  with text centred and images shown to the left and right respectively.
- For Tablet devices ensure the Bio section is divided into two columnns with
  two images aligned to the left and text aligned to the right.
- For Mobile devices ensure all content is located on one column, with first
  image removed.

#### Maps

- For all devices ensure the Map has the correct `lat` and `long` coordinates for
  initial load up of page.
- For all devices ensure Map displays `Red Flag Icons` and `Cluster Marker Icons`
  (When `Red Flag Icons` are clustered together.
- For all devices ensure that when a `Red Flag Icon` is clicked, an info window
  pops up and displays text and a photo centered.
- For all devices ensure all info windows clicked, can be closed with with
  the `x` icon displayed in the window.
- For all devices click through all `Red Flag Icons`, and ensure
  that when one info window opens, it is closed when another `Red Flag Icon`
  is clicked.
- For all devices click all `Cluster Marker Icons` and ensure Map zooms in
  and displays `Red Flag Icons` accordingly.
- For all devices ensure zoom and scrolling features work on Map.

#### Footer

- Ensure that Copyright text in footer is centred for all devices.

#### Browesers

- Chrome: Website renders well on all screen sizes.
- Firefox: Website renders well on all screen sizes.
- Safari: Website renders well on all screen sizes.
- Edge: Website renders well on all screen sizes.

#### Mobile and Tablet Devices

- The Website was tested on tablets and a variety of
  mobiles, including iPhone and Samsung. The results were
  satisfactory for all devices and continued to acheive the
  UX and UI goals.

#### User Testing

- Family and friends were asked to use the finished Website to test
  usability and comment on whether they felt it met their needs as discussed
  in the Strategy section - [User Stories](#user-stories).

#### User Experience

- Users felt that the Website fulfilled the expectation of quantity of
  photos, especially with the carousel implemented at beginning of the page.

- Another requirement was for the Website to be easy to use and not too
  complicated. Overall the Website acheived this goal, however when it
  came to the functionality of the Map, the older genration found it
  difficult to navigate around. Especially when trying to move around the
  Map, zooming in-and-out, and in doing so losing their way and not knowing how
  to go back to the start. It would therefore be beneficial to add more features
  to the Map to help in the navigation.
  - One feature could be to add an icon that is displayed in the top right of
    the Map, that allows the user to go back after they have clicked a cluster.
  - Also it maybe useful to add more detailed instructions on the Maps section
    to help users understand the Map functionality and features that can be
    used e.g. zooming in and out, and moving around Map.

- The Website fulfilled the Users request to add content from Jack Fairfield's
  journal and also information on Jack Fairfield's personality and progression
  in the Army. However it was commented that there was a greater yearning to
  have more than what was provided. This of course can be fixed over time and
  satisfy the users accordingly.

- It is normally standard practice to have the `navbar-toggler-icon` displayed
  as an intuitive `square box` with `horizontal lines`. For this Website I replaced
  this icon with an image of a `Gold Badge`.
  - Through User testing the results were positive. Users, through curiosity still
    intuitively clicked the `Gold Badge` for the drop menu on mobile
    devices.
  - However as the Website expands, further tests should be assessed to monitor
    results and make changes where necessary.

#### Fixes

- For Mobile devices the Bootstrap mobile collapse function did not collaspe when
  links were clicked. To fix this issue a simple jQuery code was added that was
  inspired from [Validate Javascript](https://github.com/twbs/bootstrap/issues/12852).
  An important fix to implement, otherwise the navbar concealed the
  content on the mobile device.

- The links, when clicked in the navigation bar did not accurately align
 with each section it navigated to - redirecting to the section
 slightly half way down. To fix this an extra `<div>` element
 was added above each section (`Home`,`Bio` and `Maps`), with a
 `postion: absolute;` and `margin-top` value. This allowed sections to
 align correctly on all devices.

- Custom Markers were used for Maps Javascript API with inspiration from
   the tutorial by
   [Pradip Debnath](https://www.youtube.com/watch?v=Xptz0GQ2DO4) and
   [Google Source Script](https://developers.google.com/maps/documentation/javascript/custom-markers).
   These Custom Markers were combined with Marker Clustering using
   [Google Source Script](https://developers.google.com/maps/documentation/javascript/marker-clustering)

   There were problems with Info Windows working once the Map and
   custom icons were set up. With inspiration from
   [Stack Over flow](https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow)
   and Tim Nelson from Code insitute support, this feature was correctly
   implemented.

[Go to top](#contents)

## Deployment

---

### Publish GitHub Repository

- Load up GitHub at <https://github.com>

- Navigate to the repository titled <https://github.com/Bealby/Milestone-Project-2>

- Click Settings:

![Deployment](/documentation/readme/deployment-1.png/)

- Scroll down to:
- Github Pages
- Source
- From drop-down menu choose master branch

![Deployment](/documentation/readme/deployment-2.png/)

- After selecting **master branch** the repository will be refreshed and
   published

- The published Website will be found highlighted in green under **Github
  Pages**, as below:

![Deployment](/documentation/readme/deployment-3.png/)

### Clone GitHub Repository

- Navigate to the repository titled <https://github.com/Bealby/Milestone-Project-2>

- On the main page for the repository click **Clone or Downlaod** as shown below.

- On the main page for the Repository click Clone or Download. Then click on the
   URL as shown below.

![Deployment](/documentation/readme/deployment-4.png/)

- Open in Terminal

- Change the current directory to the local directory

- Type `git clone` plus `URL` (copied in step 3). Then `Press Enter`

[Go to top](#contents)

## Credits

---

### Content

- All content for this Website was provided by Murray Bealby and Jack
  Fairfield.

### Media

- All photos were provided by Murray Bealby's private collection.

### Acknowledgements

- **Bootstrap:** For it's features and tutorials.
- **Slack Forum/ Code Institute Tutorial:** The benevolent force that
   always provide advice and support when needed.
- **Aaron Sinnott:** My Mentor for professional advice and good practice.
- **Tim Nelson:** Code Institute Tutor for support with Maps Javascript
  Clustering and Info Windows.
- **Friends and Family:** For user feedback.

[Go to top](#contents)
