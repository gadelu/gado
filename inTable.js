        const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
        const options = {
         method: 'GET',
         headers: {
           'content-type': 'application/octet-stream',
           'X-RapidAPI-Key': myapikey,
           'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
                }
            };

            function getMatch(str) {
            var urlRegex = '(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?';
            var reg = new RegExp(urlRegex, 'ig');
            return str.match(reg);
            }
 
            fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData="";
                    var gtitle = "ENGLAND: Premier League";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle) != -1){
                            tableData += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30" height="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body").innerHTML = tableData;

                        } 
                    })
                });  

                fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData2="";
                    var gtitle2 = "SPAIN: La Liga";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle2) != -1){
                            tableData2 += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body2").innerHTML = tableData2;

                        } 
                    })
                });
                
                fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData3="";
                    var gtitle3 = "GERMANY: Bundesliga";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle3) != -1){
                            tableData3 += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body3").innerHTML = tableData3;

                        } 
                    })
                }); 

                fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData4="";
                    var gtitle4 = "ITALY: Serie A";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle4) != -1){
                            tableData4 += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body4").innerHTML = tableData4;

                        } 
                    })
                });  


                fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData5="";
                    var gtitle5 = "FRANCE: Ligue 1";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle5) != -1){
                            tableData5 += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body5").innerHTML = tableData5;

                        } 
                    })
                });  


                fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
                .then(response=> response.json())
                .then(items => {
                    let tableData6="";
                    var gtitle6 = "TURKEY: Super Lig";
                    items.map(item => {
                        let matchApiDate = item.date;
                        let timestamp = new Date(matchApiDate).getTime();
                        let Day = new Date(timestamp).getDate();
                        let Month = new Date(timestamp).getMonth() + 1;
                        let Year = new Date(timestamp).getFullYear();
                        let OurNewDateFormat = `${Year}/${Month}/${Day}`;
                        if (item.competition.name.search(gtitle6) != -1){
                            tableData6 += `
                            <tr>
                                <td><img src="${item.thumbnail}" width="75" height="75"></td>
                                <td>${item.title}</td>
                                <td>${OurNewDateFormat}</td>
                                <td><a href="${getMatch(item.embed)}" target="_blank"><img src="https://3ajel.info/wp-content/uploads/2023/05/tv-icon.png" width="30"></a></td>
                            </tr>
                            `;
                            document.getElementById("table-body6").innerHTML = tableData6;

                        } 
                    })
                });  
