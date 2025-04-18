export const convertDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  return new Date(+year, +month - 1, +day);
};

export const convertTimeZone = (timeString: string) => {
  if (!timeString) {
    return ["", ""];
  }

  const today = new Date();
  const timeZone = today.getTimezoneOffset() / -60;
  // eslint-disable-next-line no-unused-vars
  let [hours, minutes, second] = timeString.split(":");

  if ((+hours + timeZone) % 24 < 10) {
    hours = "0" + ((+hours + timeZone) % 24);
  } else {
    hours = +hours + timeZone + "";
  }

  return [hours, minutes];
};

export const convertFlagSuffix = (nationality: string) => {
  switch(nationality){ 
    case "Bahrain": return "BH";
    case "British": 
    case "UK": return "GB";
    case "UAE": return "AE";
    case "Argentina": 
    case "Argentinian": return "AR";
    case "Australian":
    case "Australia": return "AU";
    case "Austria": return "AT";
    case "Azerbaijan": return "AZ";
    case "Belgian":
    case "Belgium": return "BE";
    case "Brazilian":
    case "Brazil": return "BR";
    case "American":
    case "USA": return "US";
    case "Canada":
    case "Canadian": return "CA"
    case "Chinese": 
    case "China": return "CN";
    case "Netherlands": return "NL";
    case "Danish":
    case "Denmark": return "DK"
    case "Dutch": return "NL";
    case "German":
    case "Germany": return "DE";
    case "Italian":
    case "Italy": return "IT";
    case "Spanish":
    case "Spain": return "ES";
    case "French":
    case "France": return "FR";
    case "Finland":
    case "Finnish": return "FI";
    case "Hungary": return "HU";
    case "India": return "IN";
    case "Japan": 
    case "Japanese": return "JP";
    case "Korea": return "KR";
    case "Malaysia": return "MY";
    case "Mexican":
    case "Mexico": return "MX";
    case "Monegasque":
    case "Monaco": return "MC";
    case "Morocco": return "MA";
    case "New Zealand":
    case "New Zealander": return "NZ";
    case "Polish": return "PL";
    case "Portugal": return "PT";
    case "Qatar": return "QA";
    case "Russian":
    case "Russia": return "RU";
    case "Saudi Arabia": return "SA";
    case "Singapore": return "SG";
    case "South Africa": return "ZA";
    case "Swedish":
    case "Sweden": return "SE";
    case "Switzerland": return "CH";
    case "Turkey": return "TR";
    case "Thailand":
    case "Thai": return "TH";
  }
   
}