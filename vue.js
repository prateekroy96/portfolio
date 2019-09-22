var app = new Vue({
    el: '#app',
    data: {
        //bio
        name: 'Prateek Roy',
        title: 'Full Stack Developer',
        dob: '28-06-1996',
        status: 'Available for work',
        qual: 'Graduate (B. Tech - CE)',
        address: 'Delhi, INDIA',
        //links
        email: 'royprateek96@gmail.com',
        mail_to: 'mailto:royprateek96@gmail.com',
        github: 'https://github.com/prateekroy96',
        linkedin: 'https://www.linkedin.com/in/prateek-roy-563b8a188/',
        twitter: 'https://twitter.com/royprateek96',
        resume: './files/resume.pdf',
        //project links
        konnect_path: 'http://sleepy-dawn-20911.herokuapp.com/',
        konnect_git: 'https://github.com/prateekroy96/Konnect',
        pf_path: 'https://prateekroy96.github.io/path-finding/',
        pf_git: 'https://github.com/prateekroy96/path-finding',
        tdl_path: 'https://prateekroy96.github.io/Todo-List/',
        tdl_git: 'https://github.com/prateekroy96/Todo-List',
        regis_path: 'https://guarded-tundra-07131.herokuapp.com/',
        regis_git: 'https://github.com/prateekroy96/Registration-Template'
    },
    methods: {
      ready: function () {
        this.time = Date.now()
      }
    }
  })