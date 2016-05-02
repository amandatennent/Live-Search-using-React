class Search extends React.Component
{
    constructor()
    {
        super();
        this.state = { searchString: ''};
    }

    handleChange(e) {
        this.setState({ searchString: e.target.value });
    }

    render(){
        var libraries = this.props.items;
        var searchString = this.state.searchString.trim().toLowerCase();

        if (searchString.length > 0)
        {
            libraries = libraries.filter(function(item){
                return item.name.toLowerCase().match(searchString);
            });
        }

        return (
                <section>
                    <div className="search-input">
                        <input className="form-control" type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search" />
                    </div>
                    <table className="table table-striped spacer">
                        <tbody>
                        { 
                            libraries.map(function(item){
                                return(
                                    <tr>
                                        <td className="text-left">{item.name}</td>
                                        <td className="text-right"><a href={item.email}>{item.email}</a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </section>
        );
    }
}

// Data obtained from: https://www.mockaroo.com/                                                                                                                                                             
var data = [{
    "id": 1,
    "name": "Annie",
    "email": "agonzalez0@mapy.cz"
}, {
    "id": 2,
    "name": "Cynthia",
    "email": "charrison1@wikipedia.org"
}, {
    "id": 3,
    "name": "Joseph",
    "email": "jjackson2@technorati.com"
}, {
    "id": 4,
    "name": "Samuel",
    "email": "sanderson3@omniture.com"
}, {
    "id": 5,
    "name": "Susan",
    "email": "sadams4@sun.com"
}, {
    "id": 6,
    "name": "Marilyn",
    "email": "mkelly5@sphinn.com"
}, {
    "id": 7,
    "name": "Steve",
    "email": "shanson6@homestead.com"
}, {
    "id": 8,
    "name": "Janice",
    "email": "jjenkins7@blogger.com"
}, {
    "id": 9,
    "name": "Brenda",
    "email": "bgardner8@auda.org.au"
}, {
    "id": 10,
    "name": "Bobby",
    "email": "bcastillo9@people.com.cn"
}, {
    "id": 11,
    "name": "Jason",
    "email": "jvasqueza@elpais.com"
}, {
    "id": 12,
    "name": "Lillian",
    "email": "lwashingtonb@shareasale.com"
}, {
    "id": 13,
    "name": "Louis",
    "email": "ldanielsc@webeden.co.uk"
}, {
    "id": 14,
    "name": "James",
    "email": "jgarrettd@zimbio.com"
}, {
    "id": 15,
    "name": "Pamela",
    "email": "phansene@usgs.gov"
}, {
    "id": 16,
    "name": "Bobby",
    "email": "bmasonf@boston.com"
}, {
    "id": 17,
    "name": "Andrea",
    "email": "asanchezg@stanford.edu"
}, {
    "id": 18,
    "name": "Alice",
    "email": "arodriguezh@soundcloud.com"
}, {
    "id": 19,
    "name": "Sarah",
    "email": "sreynoldsi@psu.edu"
}, {
    "id": 20,
    "name": "Samuel",
    "email": "shughesj@1und1.de"
}, {
    "id": 21,
    "name": "Martin",
    "email": "mfisherk@umn.edu"
}, {
    "id": 22,
    "name": "Robin",
    "email": "rcookl@tripod.com"
}, {
    "id": 23,
    "name": "Nicole",
    "email": "nolsonm@discuz.net"
}, {
    "id": 24,
    "name": "Annie",
    "email": "alongn@ovh.net"
}, {
    "id": 25,
    "name": "Frances",
    "email": "fstevenso@geocities.jp"
}, {
    "id": 26,
    "name": "Janice",
    "email": "jreedp@mlb.com"
}, {
    "id": 27,
    "name": "Jimmy",
    "email": "jortizq@spotify.com"
}, {
    "id": 28,
    "name": "Charles",
    "email": "cleer@studiopress.com"
}, {
    "id": 29,
    "name": "Sarah",
    "email": "sjacobss@upenn.edu"
}, {
    "id": 30,
    "name": "Arthur",
    "email": "akelleyt@w3.org"
}, {
    "id": 31,
    "name": "Kenneth",
    "email": "kromerou@livejournal.com"
}, {
    "id": 32,
    "name": "Shirley",
    "email": "sortizv@deviantart.com"
}, {
    "id": 33,
    "name": "William",
    "email": "wgardnerw@blogs.com"
}, {
    "id": 34,
    "name": "Beverly",
    "email": "bandersonx@vimeo.com"
}, {
    "id": 35,
    "name": "Ashley",
    "email": "ayoungy@samsung.com"
}, {
    "id": 36,
    "name": "Adam",
    "email": "aharperz@opera.com"
}, {
    "id": 37,
    "name": "Laura",
    "email": "lharris10@unc.edu"
}, {
    "id": 38,
    "name": "Tammy",
    "email": "tnelson11@gov.uk"
}, {
    "id": 39,
    "name": "Phillip",
    "email": "preid12@cam.ac.uk"
}, {
    "id": 40,
    "name": "Heather",
    "email": "hross13@addtoany.com"
}, {
    "id": 41,
    "name": "Christina",
    "email": "cdunn14@about.com"
}, {
    "id": 42,
    "name": "Lisa",
    "email": "lgraham15@sakura.ne.jp"
}, {
    "id": 43,
    "name": "Ruby",
    "email": "rgomez16@umich.edu"
}, {
    "id": 44,
    "name": "Ralph",
    "email": "rcarroll17@friendfeed.com"
}, {
    "id": 45,
    "name": "Phyllis",
    "email": "pmatthews18@is.gd"
}, {
    "id": 46,
    "name": "Phillip",
    "email": "phart19@nydailynews.com"
}, {
    "id": 47,
    "name": "Wanda",
    "email": "wowens1a@canalblog.com"
}, {
    "id": 48,
    "name": "Debra",
    "email": "dramos1b@jiathis.com"
}, {
    "id": 49,
    "name": "Donna",
    "email": "dbradley1c@tuttocitta.it"
}, {
    "id": 50,
    "name": "Lois",
    "email": "lross1d@unesco.org"
}, {
    "id": 51,
    "name": "Mark",
    "email": "mwatkins1e@sohu.com"
}, {
    "id": 52,
    "name": "Lois",
    "email": "lsimmons1f@ifeng.com"
}, {
    "id": 53,
    "name": "Lisa",
    "email": "lparker1g@prweb.com"
}, {
    "id": 54,
    "name": "Christine",
    "email": "cward1h@prnewswire.com"
}, {
    "id": 55,
    "name": "Scott",
    "email": "sspencer1i@php.net"
}, {
    "id": 56,
    "name": "Gloria",
    "email": "gdaniels1j@naver.com"
}, {
    "id": 57,
    "name": "Joan",
    "email": "jrogers1k@buzzfeed.com"
}, {
    "id": 58,
    "name": "Karen",
    "email": "kchapman1l@webnode.com"
}, {
    "id": 59,
    "name": "Randy",
    "email": "rmoreno1m@seesaa.net"
}, {
    "id": 60,
    "name": "Kathryn",
    "email": "khunter1n@tripadvisor.com"
}, {
    "id": 61,
    "name": "Mildred",
    "email": "mdixon1o@bbc.co.uk"
}, {
    "id": 62,
    "name": "Martin",
    "email": "mbishop1p@europa.eu"
}, {
    "id": 63,
    "name": "Eric",
    "email": "emontgomery1q@i2i.jp"
}, {
    "id": 64,
    "name": "Catherine",
    "email": "coliver1r@123-reg.co.uk"
}, {
    "id": 65,
    "name": "Gerald",
    "email": "glynch1s@oakley.com"
}, {
    "id": 66,
    "name": "Juan",
    "email": "jcarter1t@bloglines.com"
}, {
    "id": 67,
    "name": "Joe",
    "email": "jmorrison1u@live.com"
}, {
    "id": 68,
    "name": "Roger",
    "email": "rsullivan1v@squarespace.com"
}, {
    "id": 69,
    "name": "Jimmy",
    "email": "jrivera1w@time.com"
}, {
    "id": 70,
    "name": "Jessica",
    "email": "jwilliamson1x@yellowbook.com"
}, {
    "id": 71,
    "name": "Benjamin",
    "email": "bdiaz1y@marketwatch.com"
}, {
    "id": 72,
    "name": "Anne",
    "email": "aolson1z@cbslocal.com"
}, {
    "id": 73,
    "name": "Frances",
    "email": "fwilliamson20@twitter.com"
}, {
    "id": 74,
    "name": "Jacqueline",
    "email": "jfrazier21@twitpic.com"
}, {
    "id": 75,
    "name": "Ann",
    "email": "aharvey22@friendfeed.com"
}, {
    "id": 76,
    "name": "Bonnie",
    "email": "bdean23@mozilla.org"
}, {
    "id": 77,
    "name": "Paula",
    "email": "pcoleman24@guardian.co.uk"
}, {
    "id": 78,
    "name": "James",
    "email": "jhart25@naver.com"
}, {
    "id": 79,
    "name": "Gregory",
    "email": "gthompson26@tmall.com"
}, {
    "id": 80,
    "name": "Katherine",
    "email": "kwallace27@creativecommons.org"
}, {
    "id": 81,
    "name": "Gary",
    "email": "gwarren28@youtube.com"
}, {
    "id": 82,
    "name": "Phillip",
    "email": "pboyd29@xrea.com"
}, {
    "id": 83,
    "name": "Ronald",
    "email": "rjames2a@usgs.gov"
}, {
    "id": 84,
    "name": "Matthew",
    "email": "mmatthews2b@dmoz.org"
}, {
    "id": 85,
    "name": "Carolyn",
    "email": "cgarcia2c@friendfeed.com"
}, {
    "id": 86,
    "name": "Fred",
    "email": "fmartin2d@t-online.de"
}, {
    "id": 87,
    "name": "Frank",
    "email": "fgray2e@lycos.com"
}, {
    "id": 88,
    "name": "Jane",
    "email": "jowens2f@noaa.gov"
}, {
    "id": 89,
    "name": "Eugene",
    "email": "escott2g@addtoany.com"
}, {
    "id": 90,
    "name": "Cheryl",
    "email": "cgray2h@prweb.com"
}, {
    "id": 91,
    "name": "Carl",
    "email": "cmitchell2i@aboutads.info"
}, {
    "id": 92,
    "name": "Jose",
    "email": "jjones2j@angelfire.com"
}, {
    "id": 93,
    "name": "Shawn",
    "email": "smason2k@delicious.com"
}, {
    "id": 94,
    "name": "Tammy",
    "email": "tmitchell2l@last.fm"
}, {
    "id": 95,
    "name": "Heather",
    "email": "hdean2m@arstechnica.com"
}, {
    "id": 96,
    "name": "Janet",
    "email": "jsullivan2n@tinyurl.com"
}, {
    "id": 97,
    "name": "Debra",
    "email": "danderson2o@prweb.com"
}, {
    "id": 98,
    "name": "Teresa",
    "email": "tmendoza2p@ucoz.com"
}, {
    "id": 99,
    "name": "Angela",
    "email": "alewis2q@pbs.org"
}, {
    "id": 100,
    "name": "Jonathan",
    "email": "jreid2r@shop-pro.jp"
}];

ReactDOM.render(
    <Search items={ data } />,
    document.getElementById('content')
);