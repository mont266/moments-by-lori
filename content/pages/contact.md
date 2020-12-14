---
slug: contact
featuredImage: https://ucarecdn.com/77e64116-0a8f-4eff-a57b-30aa7518d505/
phone: 0987 123 456
meta:
  description: This is a meta description.
  title: Contact Page
address: 404 James St, Burleigh Heads QLD 4220
template: ContactPage
title: Contact Us
subtitle: The easiest way to get in touch.
email: example@example.com
locations:
  - lat: "-27.9654732"
    lng: "153.2432449"
    mapLink: ""
---

# Example contact form

This form is setup to use Netlify's form handling:

- the form action is set to the current absolute url: `action: '/contact/'`
- a name attribute is sent with the form's data `'form-name': 'Contact'`
- netlify data attributes are added to the form `data-netlify data-netlify-honeypot`

Find out more in the [Netlify Docs](https://www.netlify.com/docs/form-handling/).
