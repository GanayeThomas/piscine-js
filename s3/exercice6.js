// Exercice 6: Filtrer un tableau d'objets par une plage de dates

var data = [{ version: "3.1.1", released_on: "2016-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2011-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2009-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2006-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2013-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2017-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
            { version: "3.1.1", released_on: "2015-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
           ],
ed = new Date("2016-08-21T00:00:00.000Z").getTime(),
sd = new Date("2010-08-21T00:00:00.000Z").getTime(),
result = data.filter(d => {
    var time = new Date(d.released_on).getTime();
    return (sd < time && time < ed);
});
console.log(result);