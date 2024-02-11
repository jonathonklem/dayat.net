---
slug: "donor-nexus"
date: "2022-01-11"
title: "Donor Nexus"
---

[Donor Nexus](https://donornexus.com/) is a company that specializes in egg and embryo donation.

<img src="https://dayat.net/images/dnr-ss.png" className="mx-4">

Initially they had been using WordPress to handle account creation and maintenance.  Eventually they outgrew their WordPress solution and needed something that was more efficient and gave them a better degree of control.

We leveraged CakePHP to build a database for them.  This allowed us to create custom forms and flows to let applicants sign up to be donors as well as allowing recipients to search and mark donors as their favorites.

A custom backend allowed administrative staff to filter applicants better and also follow up with recipients based off their favorites.

Eventually they also wanted to incorporate an app for convenience.  Thanks to CakePHP's REST friendly nature, we were able to build the app as a front-end that communicated with the existing backend, reducing costs and shortening development time. Ionic and Capacitor were used to maintain the same codebase for both iOS and Android