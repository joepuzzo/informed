const markets = [
  { name: 'UnitedStates', supply: 100000, demand: 70000, code: 'US' },
  { name: 'United Kingdom', supply: 50000, demand: 60000, code: 'UK' },
  { name: 'Japan', supply: 80000, demand: 70000, code: 'JP' },
  { name: 'China', supply: 70000, demand: 80000, code: 'CN' },
  { name: 'India', supply: 60000, demand: 90000, code: 'IN' },
  { name: 'Germany', supply: 90000, demand: 60000, code: 'DE' },
  { name: 'Australia', supply: 25000, demand: 40000, code: 'AU' },
  { name: 'Brazil', supply: 35000, demand: 20000, code: 'BR' },
  { name: 'Canada', supply: 45000, demand: 30000, code: 'CA' },
  { name: 'Chile', supply: 10000, demand: 15000, code: 'CL' },
  { name: 'Colombia', supply: 8000, demand: 10000, code: 'CO' },
  { name: 'Egypt', supply: 15000, demand: 12000, code: 'EG' },
  { name: 'France', supply: 70000, demand: 55000, code: 'FR' },
  { name: 'Ghana', supply: 2000, demand: 3000, code: 'GH' },
  { name: 'Greece', supply: 12000, demand: 9000, code: 'GR' },
  { name: 'Indonesia', supply: 45000, demand: 35000, code: 'ID' },
  { name: 'Iran', supply: 12000, demand: 10000, code: 'IR' },
  { name: 'Iraq', supply: 9000, demand: 6000, code: 'IQ' },
  { name: 'Ireland', supply: 6000, demand: 4000, code: 'IE' },
  { name: 'Italy', supply: 55000, demand: 45000, code: 'IT' },
  { name: 'Jamaica', supply: 2000, demand: 2500, code: 'JM' },
  { name: 'Kenya', supply: 4000, demand: 5000, code: 'KE' },
  { name: 'South Korea', supply: 55000, demand: 60000, code: 'KR' },
  { name: 'Malaysia', supply: 10000, demand: 12000, code: 'MY' },
  { name: 'Mexico', supply: 30000, demand: 25000, code: 'MX' },
  { name: 'Netherlands', supply: 35000, demand: 30000, code: 'NL' },
  { name: 'New Zealand', supply: 6000, demand: 5000, code: 'NZ' },
  { name: 'Norway', supply: 9000, demand: 8000, code: 'NO' },
  { name: 'Romania', supply: 15000, demand: 12000, code: 'RO' },
  { name: 'Serbia', supply: 5000, demand: 4000, code: 'RS' },
  { name: 'Russia', supply: 80000, demand: 90000, code: 'RU' },
  { name: 'Saudi Arabia', supply: 20000, demand: 25000, code: 'SA' },
  { name: 'South Africa', supply: 15000, demand: 18000, code: 'ZA' },
  { name: 'Spain', supply: 45000, demand: 35000, code: 'ES' },
  { name: 'Sweden', supply: 10000, demand: 8000, code: 'SE' },
  { name: 'Switzerland', supply: 12000, demand: 10000, code: 'CH' },
  { name: 'Taiwan', supply: 20000, demand: 22000, code: 'TW' },
  { name: 'Thailand', supply: 25000, demand: 20000, code: 'TH' },
  { name: 'Turkey', supply: 35000, demand: 30000, code: 'TR' },
  { name: 'Ukraine', supply: 12000, demand: 15000, code: 'UA' },
  { name: 'United Arab Emirates', supply: 15000, demand: 12000, code: 'AE' },
  { name: 'Vietnam', supply: 30000, demand: 25000, code: 'VN' },
  { name: 'Austria', supply: 12000, demand: 9000, code: 'AT' },
  { name: 'Belgium', supply: 18000, demand: 15000, code: 'BE' },
  { name: 'Bulgaria', supply: 8000, demand: 6000, code: 'BG' },
  { name: 'Croatia', supply: 4000, demand: 5000, code: 'HR' },
  { name: 'Czech Republic', supply: 12000, demand: 10000, code: 'CZ' },
  { name: 'Denmark', supply: 9000, demand: 7000, code: 'DK' },
  { name: 'Estonia', supply: 2000, demand: 2500, code: 'EE' },
  { name: 'Finland', supply: 8000, demand: 7000, code: 'FI' },
  { name: 'Hungary', supply: 10000, demand: 12000, code: 'HU' },
  { name: 'Iceland', supply: 2000, demand: 3000, code: 'IS' },
  { name: 'Israel', supply: 15000, demand: 18000, code: 'IL' },
  { name: 'Latvia', supply: 5000, demand: 4000, code: 'LV' },
  { name: 'Lithuania', supply: 6000, demand: 8000, code: 'LT' },
  { name: 'Luxembourg', supply: 2000, demand: 1500, code: 'LU' },
  { name: 'Malta', supply: 1000, demand: 2000, code: 'MT' },
  { name: 'Morocco', supply: 8000, demand: 9000, code: 'MA' },
  { name: 'New Caledonia', supply: 1000, demand: 500, code: 'NC' },
  { name: 'Nigeria', supply: 35000, demand: 40000, code: 'NG' },
  { name: 'North Macedonia', supply: 2000, demand: 3000, code: 'MK' },
  { name: 'Pakistan', supply: 20000, demand: 25000, code: 'PK' },
  { name: 'Peru', supply: 15000, demand: 18000, code: 'PE' },
  { name: 'Philippines', supply: 30000, demand: 40000, code: 'PH' },
  { name: 'Poland', supply: 30000, demand: 25000, code: 'PL' },
  { name: 'Portugal', supply: 15000, demand: 12000, code: 'PT' },
  { name: 'Puerto Rico', supply: 5000, demand: 7000, code: 'PR' },
  { name: 'Qatar', supply: 5000, demand: 6000, code: 'QA' },
  { name: 'Réunion', supply: 1000, demand: 1500, code: 'RE' },
  { name: 'Argentina', supply: 20000, demand: 25000, code: 'AR' },
  { name: 'Bangladesh', supply: 15000, demand: 18000, code: 'BD' },
  { name: 'Bolivia', supply: 5000, demand: 6000, code: 'BO' },
  { name: 'Cambodia', supply: 8000, demand: 10000, code: 'KH' },
  { name: 'Cameroon', supply: 4000, demand: 5000, code: 'CM' },
  { name: 'Costa Rica', supply: 7000, demand: 8000, code: 'CR' },
  { name: 'Cuba', supply: 6000, demand: 7000, code: 'CU' },
  { name: 'Dominican Republic', supply: 8000, demand: 10000, code: 'DO' },
  { name: 'Ecuador', supply: 12000, demand: 15000, code: 'EC' },
  { name: 'El Salvador', supply: 3000, demand: 4000, code: 'SV' },
  { name: 'Ethiopia', supply: 6000, demand: 7000, code: 'ET' },
  { name: 'Fiji', supply: 2000, demand: 2500, code: 'FJ' },
  { name: 'Gabon', supply: 2000, demand: 1500, code: 'GA' },
  { name: 'Guatemala', supply: 8000, demand: 10000, code: 'GT' },
  { name: 'Haiti', supply: 3000, demand: 4000, code: 'HT' },
  { name: 'Honduras', supply: 5000, demand: 6000, code: 'HN' },
  { name: 'Hong Kong', supply: 10000, demand: 12000, code: 'HK' },
  { name: 'Ivory Coast', supply: 4000, demand: 5000, code: 'CI' },
  { name: 'Jordan', supply: 6000, demand: 7000, code: 'JO' },
  { name: 'Kazakhstan', supply: 10000, demand: 12000, code: 'KZ' },
  { name: 'Kuwait', supply: 5000, demand: 6000, code: 'KW' },
  { name: 'Kyrgyzstan', supply: 2000, demand: 2500, code: 'KG' },
  { name: 'Laos', supply: 3000, demand: 4000, code: 'LA' },
  { name: 'Lebanon', supply: 8000, demand: 10000, code: 'LB' },
  { name: 'Libya', supply: 6000, demand: 7000, code: 'LY' },
  { name: 'Madagascar', supply: 2000, demand: 2500, code: 'MG' },
  { name: 'Mali', supply: 3000, demand: 4000, code: 'ML' },
  { name: 'Albania', supply: 3000, demand: 4000, code: 'AL' },
  { name: 'Armenia', supply: 2000, demand: 2500, code: 'AM' },
  { name: 'Azerbaijan', supply: 5000, demand: 6000, code: 'AZ' },
  { name: 'Bahrain', supply: 3000, demand: 3500, code: 'BH' }
  // { name: 'Belarus', supply: 6000, demand: 7000, code: 'BY' },
  // { name: 'Belize', supply: 1000, demand: 1500, code: 'BZ' },
  // { name: 'Bosnia and Herzegovina', supply: 4000, demand: 5000, code: 'BA' },
  // { name: 'Botswana', supply: 3000, demand: 4000, code: 'BW' },
  // { name: 'Brunei', supply: 2000, demand: 2500, code: 'BN' },
  // { name: 'Burkina Faso', supply: 2500, demand: 3000, code: 'BF' }
];

export default markets;

// const removeDuplicatesByCode = arr => {
//   let unique = arr.filter(
//     (v, i, a) => a.findIndex(t => t.code === v.code) === i
//   );
//   return unique;
// };

// markets.forEach(market => console.log(JSON.stringify(market), ','));