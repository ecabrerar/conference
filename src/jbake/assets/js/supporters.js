import { getUsefulContents, getUsefulLink } from '/js/util-url.js';
import {fetchData} from '/js/fetch-util.js';

function createSupporterCardRow(supportersJson) {

    let rowHtml = "<h2>"+supportersJson.packageName+"</h2>"+
            "<div class=\"row justify-content-center\">";

        supportersJson.supporters.filter(item => item.display === true).forEach(supporter => rowHtml += createSupporterCard(supporter));

      rowHtml +=  "</div>";

      return rowHtml;
}

function createSupporterCard(supporterJson) {

    return "<div class=\"col-lg-3 col-sm-6\">" +
        "<div class=\"meeta-sponsor-logo\">" +
        "<a href=\"" + supporterJson.url + "\" target=\"_blank\" title=\"" + supporterJson.name + "\"><img src=\"" + supporterJson.logoUrl + "\" alt=\"" + supporterJson.name + "\"></a>" +
        "</div>" +
        "</div>";
}

let supporterList = function(supporterJson) {

      let supportersList = [];

      supporterJson.forEach(supporterObj => supportersList.push(supporterObj));


    return supportersList;
}

let renderSupporterList = function(supportersList) {
        let supportersHtml = document.getElementById('supportersList');


       supportersList.forEach(supporter => supportersHtml.innerHTML += createSupporterCardRow(supporter));

}

let supporterUrl = "../json/supporters.json";
let jsonData = await fetchData(supporterUrl);
let supporterListRendered = supporterList(jsonData);

renderSupporterList(supporterListRendered);
