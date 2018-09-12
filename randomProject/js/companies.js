var companies = [{
        name: "Microsoft",
        category: "Tech",
        start: 1975,
        end: 2018
    },
    {
        name: "Johnson",
        category: "Pharmaceutical",
        start: 1886,
        end: 2018
    },
    {
        name: "Apple",
        category: "Tech",
        start: 1976,
        end: 2018
    },
    {
        name: "Cisco",
        category: "Tech",
        start: 1989,
        end: 2018
    },
    {
        name: "Moodys",
        category: "Finace",
        start: 1909,
        end: 2018
    },
    {
        name: "Ikea",
        category: "Retails",
        start: 1943,
        end: 2018
    },
    {
        name: "TestCompany1",
        category: "Crypto Scum",
        start: 2014,
        end: 2016
    },
    {
        name: "TestCompany2",
        category: "Repair",
        start: 2010,
        end: 2015
    }
];


var divo = document.createElement("div");
divo.setAttribute('class', 'company');
document.body.appendChild(divo);
console.log(divo);


//FOREACH and output on body
companies.forEach(function (company) {
    console.log(company.name);
    var marketAge = company.end - company.start;
    divo.innerHTML += `<div><h2><em>Company Info</em></h2>
                        <h3><em>${company.name}</em> </h3>
                        <h3> ${company.category} </h3>
                        <h4> ${company.start} started</h4>
                        <h4> ${company.end} </h4>
                        <h4> ${marketAge} years Market Age</h4>
                        </div>`;
});