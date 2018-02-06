## Use Case
Personal Portfolio for design projects' showcase.
A personal portfolio and blog allows you to share your work and stories with potential employers. Writing project case studies help employers understand your development and implementation processes. Blogging helps you display your personality and insight.

## Implementation goal
### Homepage
#### Top navbar
- [x]hamburger menu under mobile
- [ ] under mobile, top navbar toggled should be less opaque

#### Landing screen
- [ ]background: particle effect? photo?
- [ ]Styling words

#### "work"
- [ ] on hover, work grid has color overlay and white text
  - currently grid is mostly default BS card

#### "about" (currently combined into landing screen)
- [ ] "about" section words
- [x] update Resume

#### "contact"
- [x] contact section words
- [x] contact section
- [ ] fill-in form to contact? more interactive? more design?

### Work Exhibition
- [ ] each page link to "next" and "previous" project
  - Another way: have a toggle menu at the top or bottom showing other projects' title images  
- [ ] **each image is a modal can click open larger version**

#### StyleUp
- [x] design page
- [x] write design process
- [ ] create journey map to better present
- [ ] create different stakeholders' map

#### spacemealbox
- now temporarily linked to pinshape page.
- [ ] write content and put in the page

#### dianrong
- [x] write content and put in the page

### footer
- [ ] Would words instead of icons be more clear to users?

## Framework / Tools used
- SCSS
- Bootstrap 4.0

## Further questions
- [ ] smooth scroll to next section
- [ ] Fade-in & Fade-out between pages
- [ ] "jump to top" button on longer pages
- [ ] can I populate HTMLs based on one template for "works"?
- [ ] insert GA tracking code: track main devices, location
- [ ] index page under tablet display is problematic

## Design Goal:
- Purpose of the portfolio
  - show design works using user-centered process
- User-friendliness conerns
  - Clean, straightforward
- Add personal style
  - High contrast
  - Borders
  - Types
  - ...

```
h1 {
    margin: .35em 0;
    line-height: 1.25em;
    font-family: Helvetica,Arial,sans-serif;
    display: block;
    font-weight: 900;
    font-size: 2.125em;
    font-weight: 800;
}
/*竟然就很好看？？！*/

```
