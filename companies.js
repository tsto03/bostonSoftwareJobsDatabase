function myFunction() {

   let url = prompt("Copy and paste URL of company logo:");
   document.getElementById("addedURL").innerHTML = `${url}`;



}


let companies = [
   {
      name: "Actifio",
      image: "https://www.tcv.com/wp-content/uploads/2016/12/TCV_0054_actifio.png",
      blurb: "Actifio enterprise cloud data management enables thousands of businesses around the world to deliver their data just as they deliver their applications and infrastructure… as a service available instantly, anywhere."
   },
   {
      name: "Agero",
      image: "https://www.agero.com/sites/all/themes/agero/images/logo_header.png",
      blurb: "Agero’s mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions."
   },
   {
      name: "Akamai",
      image: "https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png",
      blurb: "Akamai is the global leader in Content Delivery Network (CDN) services, making the Internet fast, reliable and secure for its customers. "
   },
   {

      name: "AthenaHealth",
      image: "https://www.athenahealth.com/sites/ahcom/themes/ah_theme/assets/images/logo-color.svg",
      blurb: "athenahealth partners with hospital and ambulatory customers to drive clinical and financial results.We offer medical record, revenue cycle, patient engagement, care coordination, and population health services."
   },

   {

      name: "LogMeIn",
      image: "http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png",
      blurb: "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world’s top 10 SaaS companies with a leadership position in every one of our markets."
   },

   {

      name: "TripAdvisor",
      image: "https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",
      blurb: "Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip.Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises."
   },

   {
      name: "Wayfair",
      image: "http://www.codesquad-test.org/assets/img/wayfair_logo.png",
      blurb: "Wayfair is one of the world's largest online destinations for the home."
   }
];

let companyList = [];
for(i = 0; i < companies.length; i++) {
   console.log('Here is', companies[i].name); 
   console.log(companies[i].image);
   console.log(companies[i].blurb);
   
             
};
document.getElementById("companyList").innerHTML= `${companyList}`; 




// let companyImgList = [];
// let companyList = "";
// for(let i=0; i < companies.length; i++){
//    companyImgList[i] = "<img src='companyPhotos/" + companies[i] + "' width=150 height=150>";
// }
// document.getElementById("companyList").innerHTML = companyList;






