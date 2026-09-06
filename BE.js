document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // ALL EVENTS - past and future, in one list
    // Add every new event here with its real date. This one list
    // automatically becomes BOTH sections on the page:
    //   - Still in the future?  -> shows in "Upcoming Events"
    //   - Already happened?     -> shows in "Past Events" gallery,
    //                              newest first, capped to the most
    //                              recent 8 so that section never
    //                              grows without limit. Anything
    //                              older just quietly drops off -
    //                              you never need to delete it.
    // =========================================================
    const events = [
        {
            title: "State of Black Macomb Forum",
            date: "2026-02-13",
            dateLabel: "Friday, February 13th 2026",
            img: "/images/State of Black Macomb 2026 Flyer.jpg",
            link: "https://www.eventbrite.com/e/mcbe-state-of-black-macomb-forum-registration-1978444227944?aff=erelexpmlt"
        },
        {
            title: "Black Business & Health Expo",
            date: "2026-02-21",
            dateLabel: "Saturday, February 21st 2026",
            img: "/images/Black Business Expo Vendors 2026 (1).jpg",
            link: "https://www.zeffy.com/en-US/ticketing/2026-mcbe-black-business-and-health-expo"
        },
        {
            title: "Gala",
            date: "2026-02-28",
            dateLabel: "Saturday, February 28th 2026",
            img: "/images/MCBE 2026 Gala Flyer.jpg",
            link: "https://www.eventbrite.com/e/macomb-celebration-of-black-excellence-awards-dinner-and-gala-tickets-1976404929347"
        },
        { title: "Concert Gospel", date: "2025-02-16", img: "/images/Gospel concert 2 (1).jpeg" },
        { title: "Ultimate Chef Challenge", date: "2025-02-17", img: "/images/Chef Challenge.jpeg" },
        { title: "Gala", date: "2025-02-22", img: "/images/MCBE Gala Flyer.jpeg" },
        { title: "HBCU College Fair", date: "2025-02-18", img: "/images/HBCU Fair.jpeg" },
        { title: "Emerging Leaders Day", date: "2025-02-19", img: "/images/emerging leaders day (1).jpeg" },
        { title: "Health & Wellness Fair", date: "2025-02-20", img: "/images/Health and Wellness.jpeg" },
        { title: "Spoken Word and Q&A Session", date: "2025-02-15", img: "/images/BlackMacombForum.Final.png" },
        { title: "Vendor & Resource Expo", date: "2025-02-15", img: "/images/Black Business Expo 2025 (1).png" }
    ];

    const today = new Date();
    const eventsList = document.getElementById('eventsList');
    const pastEventsRow = document.getElementById('pastEventsRow');

    // --- Upcoming Events (future dates) ---
    const upcoming = events.filter(e => new Date(e.date) >= today);

    if (eventsList) {
        if (upcoming.length === 0) {
            eventsList.innerHTML = '<p class="no-events">No upcoming events right now — check back soon!</p>';
        } else {
            eventsList.innerHTML = upcoming.map(e => `
                <li class="event-card">
                    <a href="${e.link}" class="flyer-link" target="_blank" rel="noopener">
                        <img src="${e.img}" class="event-image" alt="${e.title} flyer">
                        <div class="flyer-overlay"><span>Click to Register</span></div>
                    </a>
                    <h3>${e.title}</h3>
                    <p class="event-date">${e.dateLabel}</p>
                </li>
            `).join('');
        }
    }

    // --- Past Events gallery (most recent 8 only) ---
    const PAST_EVENTS_LIMIT = 8;
    const past = events
        .filter(e => new Date(e.date) < today)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, PAST_EVENTS_LIMIT);

    if (pastEventsRow) {
        pastEventsRow.innerHTML = past.map(e => `
            <div class="event">
                <img src="${e.img}" alt="${e.title}">
                <div class="caption">
                    <h3>${e.title}</h3>
                </div>
            </div>
        `).join('');
    }

    // =========================================================
    // NOMINATION / VOTING PHASE
    // Update these three dates each year — everything else
    // (banner text, headings, buttons, links) updates itself.
    // =========================================================
    const nominationDeadline = new Date("2026-11-30");
    const votingOpens        = new Date("2026-12-01");
    const votingCloses       = new Date("2026-12-31");

    let phase;
    if (today < nominationDeadline) phase = "nominating";
    else if (today < votingOpens)   phase = "closed";
    else if (today <= votingCloses) phase = "voting";
    else                            phase = "ended";

    const NOMINATE_URL = "https://docs.google.com/forms/d/e/1FAIpQLScbGZ5vXYH-H5pMxd8ezLdNIgeA_U6XT1HtzBwt0cinaIyKag/viewform?pli=1";
    const VOTE_URL = "https://www.surveymonkey.com/r/Y7WVC9Q";

    const copy = {
        nominating: {
            bannerText: "Nominations are open — nominate a community leader today!",
            bannerBtnText: "Nominate Now",
            bannerBtnLink: NOMINATE_URL,
            eyebrow: "NOMINATIONS ARE OPEN",
            heading: "NOMINATE A TRAILBLAZER",
            body: "Know someone making a real impact in our community? Nominate them for a 2026 Celebration of Black Excellence award before nominations close.",
            btnText: "NOMINATE NOW",
            btnLink: NOMINATE_URL
        },
        closed: {
            bannerText: "Nominations have closed — voting opens December 1st.",
            bannerBtnText: null,
            bannerBtnLink: null,
            eyebrow: "NOMINATIONS ARE CLOSED",
            heading: "VOTING OPENS DECEMBER 1ST",
            body: "Nominations are officially closed. Check back December 1st to vote for this year's honorees.",
            btnText: null,
            btnLink: null
        },
        voting: {
            bannerText: "Voting is open — cast your vote for this year's honorees!",
            bannerBtnText: "Vote Now",
            bannerBtnLink: VOTE_URL,
            eyebrow: "TIME TO CELEBRATE BLACK EXCELLENCE",
            heading: "VOTING IS OFFICIALLY OPEN!",
            body: "You have the power to decide who will shine as our 2026 award winners at the Celebration of Black Excellence Gala! Every vote brings us closer to recognizing the trailblazers who inspire our community.",
            btnText: "CLICK HERE TO VOTE",
            btnLink: VOTE_URL
        },
        ended: {
            bannerText: "Voting has closed — winners will be announced at the Gala!",
            bannerBtnText: null,
            bannerBtnLink: null,
            eyebrow: "VOTING HAS CLOSED",
            heading: "WINNERS ANNOUNCED AT THE GALA",
            body: "Thank you to everyone who nominated and voted this year! This year's honorees will be revealed live at the Celebration of Black Excellence Gala.",
            btnText: null,
            btnLink: null
        }
    };

    const c = copy[phase];

    const bannerText = document.getElementById('bannerText');
    const bannerBtn = document.getElementById('bannerBtn');
    const infoEyebrow = document.getElementById('infoEyebrow');
    const infoHeading = document.getElementById('infoHeading');
    const infoBody = document.getElementById('infoBody');
    const actionBtn = document.getElementById('actionBtn');

    if (bannerText) bannerText.textContent = c.bannerText;
    if (bannerBtn) {
        if (c.bannerBtnText) {
            bannerBtn.textContent = c.bannerBtnText;
            bannerBtn.href = c.bannerBtnLink;
            bannerBtn.style.display = "inline-block";
        } else {
            bannerBtn.style.display = "none";
        }
    }
    if (infoEyebrow) infoEyebrow.textContent = c.eyebrow;
    if (infoHeading) infoHeading.textContent = c.heading;
    if (infoBody) infoBody.textContent = c.body;
    if (actionBtn) {
        if (c.btnText) {
            actionBtn.textContent = c.btnText;
            actionBtn.href = c.btnLink;
            actionBtn.style.display = "inline-block";
        } else {
            actionBtn.style.display = "none";
        }
    }
});
