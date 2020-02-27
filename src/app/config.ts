export let cfg = {
    // API Url
    apiUrl: window.location.hostname == 'localhost' ? 'http://localhost:3100' : 'https://thesecretsociety.us',

    img_path: window.location.hostname == 'localhost' ? 'http://localhost:3100' : 'https://thesecretsociety.us',

    // Formats date correctly
    dateConverter: (startdate) => {
        return startdate.month + '/' + startdate.day + '/' + startdate.year
    },

    // Formats time correctly
    timeConverter: (starttime) => {
        var minute = ( starttime.minute < 10 ) ? `0${starttime.minute}` : starttime.minute;
    
        if ( starttime.hour > 12 ) {
          return (starttime.hour - 12) + ':' + minute + " " + "PM"
        } else {
          return starttime.hour + ':' + minute + " " + "AM"
        }
    },

    // States
    states: [
        { id: "AL", name: "Alabama" },
        { id: "AK", name: "Alaska" },
        { id: "AZ", name: "Arizona" },
        { id: "AR", name: "Arkansas" },
        { id: "CA", name: "California" },
        { id: "CO", name: "Colorado" },
        { id: "CT", name: "Connecticut" },
        { id: "DE", name: "Delaware" },
        { id: "DC", name: "District Of Columbia" },
        { id: "FL", name: "Florida" },
        { id: "GA", name: "Georgia" },
        { id: "HI", name: "Hawaii" },
        { id: "ID", name: "Idaho" },
        { id: "IL", name: "Illinois" },
        { id: "IN", name: "Indiana" },
        { id: "IA", name: "Iowa" },
        { id: "KS", name: "Kansas" },
        { id: "KY", name: "Kentucky" },
        { id: "LA", name: "Louisiana" },
        { id: "ME", name: "Maine" },
        { id: "MD", name: "Maryland" },
        { id: "MA", name: "Massachusetts" },
        { id: "MI", name: "Michigan" },
        { id: "MN", name: "Minnesota" },
        { id: "MS", name: "Mississippi" },
        { id: "MO", name: "Missouri" },
        { id: "MT", name: "Montana" },
        { id: "NE", name: "Nebraska" },
        { id: "NV", name: "Nevada" },
        { id: "NH", name: "New Hampshire" },
        { id: "NJ", name: "New Jersey" },
        { id: "NM", name: "New Mexico" },
        { id: "NY", name: "New York" },
        { id: "NC", name: "North Carolina" },
        { id: "ND", name: "North Dakota" },
        { id: "OH", name: "Ohio" },
        { id: "OK", name: "Oklahoma" },
        { id: "OR", name: "Oregon" },
        { id: "PA", name: "Pennsylvania" },
        { id: "RI", name: "Rhode Island" },
        { id: "SC", name: "South Carolina" },
        { id: "SD", name: "South Dakota" },
        { id: "TN", name: "Tennessee" },
        { id: "TX", name: "Texas" },
        { id: "UT", name: "Utah" },
        { id: "VT", name: "Vermont" },
        { id: "VA", name: "Virginia" },
        { id: "WA", name: "Washington" },
        { id: "WV", name: "West Virginia" },
        { id: "WI", name: "Wisconsin" },
        { id: "WY", name: "Wyoming" }
    ]
};