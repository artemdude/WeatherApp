bootstrap
react.js
backbone.js
charts------ http://www.highcharts.com/demo
underscore.js
http://nvd3.org/examples/line.html
require.js
jquery
less

maps http://snazzymaps.com/style/1/pale-dawn


написать тесты

        #scene {
            margin: -200px;
            padding: 0;
            z-index: -10;
        }

<ul id="scene">
    <li class="layer" data-depth="1.00"><img src="http://www.clipartbest.com/cliparts/Kin/eyg/Kineyg4RT.svg"></li>
</ul>
<script src="js/libs/parallax.js"></script>

 $('#scene').parallax({
            calibrateX: false,
            calibrateY: true,
            invertX: false,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 2,
            scalarY: 2,
            frictionX: 0.1,
            frictionY: 0.3,
            originX: 0.0,
            originY: 0.0
        });


        // var c = ["Ukraine", "Russia", "Belarus", "Kazakhstan", "Azerbaijan", "Armenia", "Georgia", "Israel", "USA", "Germany", "Kyrgyzstan", "Latvia", "Lithuania", "Estonia", "Moldova", "Tajikistan", "Turkmenistan", "Uzbekistan", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Aruba", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Côte d`Ivoire", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Italy", "Jamaica", "Japan", "Jordan", "Kenya", "Kiribati", "Kuwait", "Laos", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Rwanda", "São Tomé and Príncipe", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turks and Caicos Islands", "Tuvalu", "US Virgin Islands", "Uganda", "United Arab Emirates", "United Kingdom", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
//        var countries = new Bloodhound({
//            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
//            queryTokenizer: Bloodhound.tokenizers.whitespace,
//            limit: 10,
//            prefetch: {
//                // url points to a json file that contains an array of country names, see
//                // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
//                url: 'data.json',
//                // the json file contains an array of strings, but the Bloodhound
//                // suggestion engine expects JavaScript objects so this converts all of
//                // those strings
//                filter: function(list) {
//                    return $.map(list, function(country) { return { name: country }; });
//                }
//            }
//        });
//
//        countries.initialize();
//
//        $('#bloodhound .form-control').typeahead({
//                    hint: true,
//                    highlight: true,
//                    minLength: 1
//                },
//                {
//                    name: 'states',
//                    displayKey: 'value',
//                    source: countries.ttAdapter()
//                });