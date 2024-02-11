---
slug: "atf-gun-db"
date: "2024-02-11"
title: "ATFGunDB"
---

[ATFGunDB](https://atfgundb.com) is an application that tracks a user's gun collection, ammo inventory, and round counts accumulated on guns to aid in preventative maintenance as well as tracking maintenance.

<center>
    <img src="https://atfgundb.com/ogimage-new-4.png" alt="ATFGunDB Layout" style="max-width: 100%; width: 560px" />

<iframe style="max-width: 100%; margin-top: 30px; margin-bottom: 30px; width: 560px" width="560" height="315" src="https://www.youtube.com/embed/ydSN48bS5js?si=BYgrTG-xf_40RHMb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>


The general architecture broke down to the following: 

![ATFGunDB Architecture](https://www.jonathonklem.com/assets/architecture.jpg)

Additionally the Laravel management install communicates with Mailchimp to add new users to the marketing mailing list.

Ionic and Capacitor with React were used to maintain a single codebase among iOS, Android and desktop environments.  

Technologies used include:
- [Go](https://go.dev/)
- [AWS : Lambda/S3/SES](https://aws.amazon.com/)
- [Auth0](https://auth0.com/)
- [Laravel](https://laravel.com/)
- [Cloudflare](https://www.cloudflare.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Ionic](https://ionic.io/)/[Capacitor](https://capacitorjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [ChartJS](https://www.chartjs.org/)

Utililizing Auth0 intitially presented some unique challenges on the mobile platform since iOS limits communicating user information with "3rd party services".  Additionally, extra care needed to be taken to ensure that we redirected back to the app properly upon successful login.  On both iOS and Android an intent/url scheme had to be registered in the manifest/plist files.

A conscious decision to use Contexts inside React over Redux was made even though there was a non-trivial amount of state to manage because of the relatively linear nature of the data flow and because most of the components did require a rerender if data changed (such as tables of inventory or ChartJS charts).

A separate management interface was provided to allow administrative staff to monitor user activity and prevent any abuse as well as observe how well marketing efforts are paying off. 

In conclusion, we were able to fully leverage current technology to provide a unique experience for the user as well as offer insight and control to the client.