# ACTOR - LISA FAIRFIELD

---

The aim of this website is to promote Actor Lisa Fairfield.
The Website has been particulary designed to attract
potential casting agents that are looking for artists in
Advertising, Theatre and Film. to thus give Lisa Fairfield
the opportunity to launch her career in the competitive,
challenging world of acting.

## DEMO

---

![Mockup Generator](/documentation/readme/mockup-generator.png/)

A live version of Website can be found
[here](https://bealby.github.io/Milestone-Project-1/)

## CONTENTS

1.[UX](#ux)

- [STRATEGY](#strategy)
- [SCOPE](#scope)
- [STRUCTURE](#structure)
- [SKELETON](#skeleton)
- [SURFACE](#surface)

2.[FEATURES](#features)

- [FEATURES OF THE WEBSITE](#features-of-the-website)
- [FEATURES FOR SMALLER DEVICES](#features-for-smaller-devices)
- [FEATURES LEFT TO IMPLEMENT](#features-left-to-implement)

3.[TECHNOLOGIES USED](#technologies-used)

4.[TESTING](#testing)

- [AUTOMATED TESTING](#automated-testing)
- [NON-AUTOMATED TESTING](#non-automated-testing)
- [FIXES](#fixes)

5.[DEPLOYMENT](#deployment)

- [PUBLISH GitHub REPOSITORY](#publish-github-repository)
- [CLONE GitHub REPOSITORY](#clone-github-repository)

6.[CREDITS](#credits)

---

## UX

---

Our client desires a website to seek out agents or key contacts, while being
able to use the Website on business cards and on email signatures. Ultimately
these agents or key contacts in the acting world will lead onto bigger and
greater opportunities with producers and directors.

### STRATEGY

The main focus of the website is to allure and attract these agents and key
contacts who can open up new doors in a broad range of roles, including
advertising, theatre and films. With the acting market being heavily
competitive, the website needs to stand out from the crowd; be intuitive
in gaining information; while exuding professionalism.

It needs to come across well on mobile devices while users are on the move,
as well as being highly affective on tablets and desktop to allow for more
comfortable viewing in the office/ home.

Typical comments from key players in the industry include:

- ”Producers and directors work under a lot of pressure. Searching for actors/
   actresses will be a ruthless process”

- “Casting agents mainly seek information on: Naturalness, Personality,
   Professionalism, Well-rounded, Training”

- “It is essential to have an online presence so that casting agents,
    producers an directors who are interested can learn more about you.”

A graph below illustrates features to implement, valued with importance
against viability:

![viabilty-importance-graph](/documentation/readme/viability-importance.png/)

### SCOPE

To meet the client's objectives for the Website an online presence is fundamental
and will be implemented. The client has provided a montage of photos that will
be narrowed down to highlight her different personalities and potentual. A
biography of past and present performances, along with an introduction to
Lisa Fairfield, will be provided by my client. Show reels/ voice reels are
currently in the making and are not ready for the initual launch of the Website.
A blog and further references would also be a good addition to the Website, and
can be addressed at a later date when Lisa Fairfield's career is at the next
level.

The tradeoff in not implementing all desired features mentioned at launch,
will not be detrimental to the website, and the Website can be continually
refreshed and expaned as time passes.

### STRUCTURE

The website needs to be clean and slick without too much clutter and information,
which can cause cognitive overload. It needs to be fresh, stylistic and minimalist
for the artistic audience. At the same time it needs to provide enough content to
promote Lisa Fairfield as an actor. A ‘hero-image’ will be the prominent feature
on the index.html page, alluring potential agents and enticing them to learn more.
The navigation bar and footer will remain fixed through all pages. Alterations will
be made on the navigation bars on mobiles and tablets to maintain the look and feel.

The navigation bar will include tabs for Home, Gallery, Bio, Resume and Contact.
My client’s name will be centered above the navigation bar in clear standout font.
The footer will include a clickable email and telephone number and be viewable in
all pages so that an agent can click intuitively and with ease.

### SKELETON

Please find my Wireframes for Desktop, Tablet and Mobile
[here](https://github.com/Bealby/Milestone-Project-1/blob/master/documentation/wireframes/lisa-fairfield-wireframes.pdf)

### SURFACE

It is important not to overly glitz-and-glam the website (as the user
may believe), but to keep the website slick and minimal so that is easy for a
potential agent to navigate. I have chosen to use a white color theme with grey
dividers for overall structure. This will allow photos and text to stand out boldly
against the white background.

[Go to top](#contents)

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

[Go to top](#contents)

## TECHNOLOGIES USED

---

The following technolgies were used in this project:

- [Balsamiq Wireframes](https://balsamiq.com/wireframes/desktop/) - Allowed
   preliminary designs to be drawn up of Website
- [GitHub](https://github.com/) - Used to store repository and deploy website
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
   Bootstrap to collaspe Navigation Bar for small devices
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

[Go to top](#contents)

## TESTING

---

### AUTOMATED TESTING

[W3C](https://validator.w3.org/) - All HTML files with their data were directly
    inputted in the Mark-Up Validation Service. The results produced one error:-
    `Warning: Section lacks heading. Consider using h2-h6 elements to add
    identifying headings to all sections.` This warning is not a show-stopper
    but it should be considered to use a `<main>` element in combination with an
    `<article>` element in future projects.

[WSC](https://jigsaw.w3.org/css-validator/) - CSS data was directly inputted in
    the CSS Validation Service. The results: `Congratulations! No Error Found.`

[Lighthouse Audit](https://developers.google.com/web/tools/lighthouse/) - A
    feature in Chrome Developing Tools - Lighthouse Audit - was carried out on
    Mobile and Desktop to assess **Performacne**, **Accesibility** and **UX**.

- **Mobile:** An overall average of 96% was recieved. No major changes
    to implement but potential for some further tweaks at a later date.
- **Desktop:** An overall average of 93% was recieved.
    **Search Engine Optimisation** scored the lowest and requires further
    anaylsis to improve

### NON-AUTOMATED TESTING

#### Navigation Bar Links

- Click through `Home`, `Gallery`, `Bio`, `Resume` and `Contact` links,
  ensuring each becomes active and highlighted black.
- Click each navigation link and randomaly navigate to other links.
- For each link navigated to, ensure main header `Actress Lisa Bealby`,
  directs you back to `index.html` each time.

#### Resume

- While located on each navigation link, ensure separate window opens up
  when clicking `Resume`, displaying CV accordingly.

#### Contact Form

- Navigate to `Contact` page and click `Send` without submitting any data.
  An error message should appear.
- Fill in all required fields in form without adding Name. An
  error message should appear.
- Fill in all required fields in form without adding any comment. An
  error message should appear.
- Fill in all required fields in form with an invalid email address. An
  error message should appear.
- Fill in all required fields in form with a valid email address. No
  error message should appear and data fields become blank.

#### Footer

- Ensure that on each Web Page the footer links work for
  Telephone and Email (Opening up 'Email' and 'Calling' features
  accordingly).

#### Bio Reference

- Click on`Bio`and ensure link to reference opens up in a new window.

#### Browesers

- Chrome: Website renders well on all screen sizes.

- Firefox/Safari: Website renders well on both Firefox and Safari
  for all screen sizes. The Main Header font however,
  **Actor Lisa Fairfield**, does increase in thickness
  but does not affect UX overall.

#### Devices

- The Website was tested for usability on tablets and a variety of
  mobiles, including iPhone and Samsung. The results were
  satifying and accomplished the UX goal for smaller devices.

#### User Testing

- People were asked to use the finished Website to test usability
  and adopt the role of an agent. This helped reinforce that the
  aims of the Website were being acheived.

#### User Experience

- Overall the User experience fits the objective of the UX goals.
  The Website is highly affective on mobile devices. The contact
  details, as well as imagery, are bold and apparant through out
  a User's navigation on the Website.

- It accomplished the goal of providing information on Lisa Fairfield
  with an option to delve into futher information through links
  in `Resume` and in `Bio`.

#### FIXES

- Content in Bio page was justified but spacing became too large
  and inconsistant on mobile devies. A `@media(min-width:510px)`
  was used to set content to `text-align:initial` on mobile
  devices only.

- For the email address in Footer the digit **1** was not
  clear/elligible in the email address. This was fixed by implementing
  a `<span>`element and changing the font and size of digit **1** to
  make it clearer.

- Further `Media Queries` were used to increase the size of images
  in index.html and bio.html in mobile devices as they were
  otherwise looking too small even though responsive.

- For the `bio.html` page there is a moment of transition from large
  to medium screen where the image starts to look unpleasantly
  aligned. A media query of `@media(min-width:992px)` was implmented
  to increase the `margin-top` to `90px`to improve the look before
  image is transitioned to a single column on medium devices. There
  still however is a further need for improvement.

[Go to top](#contents)

## DEPLOYMENT

---

### PUBLISH GitHub REPOSITORY

- Load up GitHub at <https://github.com>

- Navigate to the repository titled <https://github.com/Bealby/Milestone-Project-1>

- Click Settings:

![Deployment](/documentation/readme/deployment-1.png/)

- Scroll down to:
- Github Pages
- Source
- From drop-down menu choose master branch

![Deployment](/documentation/readme/deployment-2.png/)

- After selecting **master branch** the repository will be refreshed and
   published

- The published website will be found highlighted in green under **Github
  Pages**, as below:

![Deployment](/documentation/readme/deployment-3.png/)

### CLONE GitHub REPOSITORY

- Navigate to the repository titled <https://github.com/Bealby/Milestone-Project-1.>

- On the main page for the repository click **Clone or Downlaod** as shown below.

- On the main page for the Repository click Clone or Download. Then click on the
   URL as shown below.

![Deployment](/documentation/readme/deployment-4.png/)

- Open in Terminal

- Change the current directory to the local directory

- Type `git clone` plus `URL` (copied in step 3). Then `Press Enter`

[Go to top](#contents)

## CREDITS

---

### Content

- All content for this Website was provided by Lisa Fairfied.
- Lisa Fairfeid's referece in Bio was provided by
  Nick Brice – Artistic Director.

### Media

- All photos were provided by Lisa Fairfield who in turn recieved permission
  from her Peers to publish on Website:
- **Nick Brice** - Artistic Director
- **Jack Shepherd** - English Actor, Playwright and Theatre director.

### Acknowledgements

- **Bootstrap:** For it's features and tutorials.
- **Slack Forum/ Code Institute Tutorial:** The benevolent force that
   always provide advice and support when needed.
- **Aaron Sinnott:** My Mentor for professional advice and good practice.
- **Friends and Family:** For User feedback.