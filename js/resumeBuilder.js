var bio = {
  "name" : "Krista Sanchez",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "303-885-0745",
    "email" : "kleigh.sanchez@gmail.com",
    "twitter" : "@KL319H",
    "github" : "Kl319H",
    "location" : "Denver, CO"
  },
  "bioPic" : "images/krista_Sanchez_640.jpg",
  "welcomeMsg" : "My name is Krista Sanchez. I create responsive and elegant web aplications.",
  "skills" : ["HTML5", "CSS3", "JavaScript", "Git"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(HTMLskillsStart);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);

$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);

$("#topContacts").append(formattedEmail);

var twitter = bio.contacts.twitter;
var formatedTwitter = HTMLtwitter.replace("%data%", twitter);

$("#topContacts").append(formatedTwitter);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);

$("#topContacts").append(formattedGithub);

for (var i in bio.skills) {
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkill);
}

var education = {
  "schools": [
    {
      "name" : "Montrose High School",
      "degree" : "General Studies",
      "location" : "Montrose, Colorado",
      "dates" : "September 1989 - May 1992"
    },
    {
      "name" : "Udacity",
      "degree" : "Front-End Web Developer Nanodegree",
      "location" : "Mountain View, CA",
      "dates" : "May 2016 - present"
    }
  ],
  "onlineClasses": [
    {
      "title" : "Intro To Computer Science",
      "school" : "Udacity",
      "dates" : "2016",
      "URL" : "https://classroom.udacity.com/courses/cs101"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : "2016",
      "URL" : "https://classroom.udacity.com/courses/ud882"
    },
    {
      "title" : "How to use Git and GitHub",
      "school" : "Udacity",
      "dates" : "2016",
      "URL" : "https://classroom.udacity.com/courses/ud775"
    },
    {
      "title" : "Front-End Web Developer Nano Degree",
      "school" : "Udacity",
      "dates" : "2016",
      "URL" : "https://classroom.udacity.com/nanodegrees/nd001"
    }
  ]
}
education.display = function() {
  for (var i = 0, totalSchools = education.schools.length; i < totalSchools; i++) {
    if (education.schools.hasOwnProperty(i)) {
        $('#education').append(HTMLschoolStart);

        var formattedName = HTMLschoolName
            .replace('%data%', education.schools[i].name)
            .replace('%url%', education.schools[i].url);
        var formattedDegree = HTMLschoolDegree
            .replace('%data%', education.schools[i].degree);

        $('.education-entry:last').append(formattedName + formattedDegree);

        var formattedLocation = HTMLschoolLocation
            .replace('%data%', education.schools[i].location);
        $('.education-entry:last').append(formattedLocation);

        var formattedDates = HTMLschoolDates
            .replace('%data%', education.schools[i].dates);
        $('.education-entry:last').append(formattedDates);

        var formattedMajor = HTMLschoolMajor
            .replace('%data%', education.schools[i].major);
        $('.education-entry:last').append(formattedMajor);
    }
}

$('#education').append(HTMLonlineClasses);
for (var o = 0, totalCourses = education.onlineClasses.length; o < totalCourses; o++) {
    if (education.onlineClasses.hasOwnProperty(o)) {
        $('#education').append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle
          .replace('%data%', education.onlineClasses[o].title);
        var formattedSchool = HTMLonlineSchool
          .replace('%data%', education.onlineClasses[o].school);
        $('.education-entry:last').append(formattedTitle + formattedSchool);

        var formattedOnlineDates = HTMLonlineDates
            .replace('%data%', education.onlineClasses[o].dates);
        $('.education-entry:last').append(formattedOnlineDates);

        var formattedURL = HTMLonlineURL
            .replace('%data%', education.onlineClasses[o].URL)
            .replace('%url%', education.onlineClasses[o].URL);
        $('.education-entry:last').append(formattedURL);
    }
  }
};
education.display();

var work = {
  "jobs": [
    {
      "employer" : "Tri-State Generation and Transmission",
      "title" : "Administrative Assistant",
      "dates" : "October 2013 - April 2016",
      "location" : "Westminster, CO",
      "description" : "Handle critical projects for Senior Vice Presidents, Senior Managers and Engineering Managers with high levels of confidentiality. Working with existing spreadsheets while attempting to adopt new technology in order to increase efficiency and accuracy with data. Timesheet and expense report management in Asset Suite. Budget planning and reports in Hyperion. Running and creating bespoke reports in Oracle Business Intelligence Enterprise Edition (OBIEE) and comparing data with General Ledger & Data Warehouse. Accounting adjustments in Asset Suite for Capital Project Contracts. Maintaining complex filing systems and databases. Creating Documentum database for electronic record storage, creating document types, attaching correct metadata to records and setting permissions. Setting up and running GoToMeeting or WebEx Video Conferencing for meetings. Coordination of domestic and international travel. Converting old permit documents from Word Perfect to Microsoft Word. Minute taking for Board of Manager Meetings, Safety Meetings, Engineering and Operating committees. Creating and formatting Memos and Resolutions, Board PowerPoint presentations, and Board Books in Diligent to be viewed on iPads during the Board of Manager’s meetings. Extensive work with Legal to create, edit, format and route for review, approval and signatures all Contracts, Agreements and Legal Correspondence with critical business deadlines. A member of the Emergency Response Team with CPR Certification and the Health and Wellness Group."
    },
    {
      "employer" : "Oracle Corporation",
      "title" : "Executive Assistant Product Development",
      "dates" : "August 2008 - August 2013",
      "location" : "Broomfield, CO Redwoodshores, CA",
      "description" : "Correspondence, heavy and error free calendaring, web conferences, taking and distribution of minutes. Domestic & international travel arrangements. Domestic & International expense reports. New hire hardware and software requests and hardware modifications. Coordination of agendas for meetings with customers, partners and internal employees along with catering. Triage issues with computers, office equipment, A/V, and Internet connectivity/WIFI. Technical assignments such as bug hunts, graphic design, alpha and beta testing. Organization and coordination of Oracle World vendor meetings, booth set-up and schedule, as well as demo dry runs. Clerical duties including visa applications, legal documents, patent applications, and Statements of Work. Organization of workspaces, files, business cards and address books. Managed and executed extremely important and confidential tasks. 24/7 availability based on the timezone of my CTO, SVP and urgency of requests. Organization of a “Test Drive a Tesla” event in the Oracle parking lot with two Roadster Sports onsite."
    },
    {
      "employer" : "BEA Systems",
      "title" : "Facilities Coordinator",
      "dates" : "September 2007 - August 2008",
      "location" : "Boulder, CO",
      "description" : "Facilities Coordinator in charge of managing daily office operations & security. First point of contact in person and via telephone. Handled critical projects for top executives with high levels of confidentiality. Coordination of catering, grocery delivery, office supply orders and hardware orders. Input of assets using PeopleSoft. Maintained office equipment, cappuccino machine, workspace and conference room configuration. Responsible for keeping the beer bottles off of the foosball table and the beer refrigerator stocked. Prepare weekly time, expense, delivery and travel reports. Coordination of building maintenance schedule, fire drills, blood drives and office functions. Updated office emergency routes using Visio. New employee set up, access badges, employee moves and safe removal of termed employees. Standardization of the BEA site to become an Oracle facility after the buyout."
    }
  ]
}

work.display = function () {
  for (var i in work.jobs) {
    var job = work.jobs[i];
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
  }
};

work.display();

var projects = {
  "projects": [
    {
      "title" : "Meteor Simple Todo List",
      "dates" : "March 2016 - April 2016",
      "description" : "This was my first project, and my intoduction to JavaScript, CSS and HTML. It is as the title states, a simple todo list. This was made in Meteor 1.2.",
      "images" : "images/meteorSimpleTodos.jpg"
    },
    {
      "title" : "My Portfolio",
      "dates" : "May 2016",
      "description" : "This was my first project for the Udacity Front-End Web Developer Nanodegree. This is to be used as my online portfolio for potential employers to see. This is a work in progress. It will be updated as I complete projects and learn new techniques. It is responsive using bootstrap.",
      "images" : "images/portfolio.jpg"
    },
    {
      "title" : "Online Resume",
      "dates" : "June 2016",
      "description" : "This was my second project for the Udacity Front-End Web Developer Nanodegree. This is a work in progress. It will be updated with additional courses and projects.",
      "images" : "images/onlineResume.jpg"
    }
  ]
}

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
  }
}
projects.display();


$("#mapDiv").append(googleMap);
